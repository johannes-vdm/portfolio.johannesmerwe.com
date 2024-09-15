---
title: "Automation"

---


## General Commands
### Populate DB Genders via ID numbers
```php
command:idtogender
```


```php
// ANCHOR USED IN UPLOADS 
protected $signature = 'command:gender';
/**
 * The console command description.
 *
 * @var string
 */
protected $description = 'Populate DB Genders via ID numbers';

/**
 * Create a new command instance.
 *
 * @return void
 */
public function __construct()
{
    parent::__construct();
}

/**
 * Execute the console command.
 *
 * @return int
 */
public function handle()
{
    $employees = Employee::all();
    foreach ($employees as $employee) {
        $arr = explode(' ', $employee->info_first_name);
        $init = '';
        foreach ($arr as $a) {
            $init .= substr($a, 0, 1);
        }

        $initial = $init;
        $employee->info_initials = $initial;

        $id = $employee->info_identity_number;
        $gender = '';

        if (strlen($id) == 13) {
            $gen = substr($id, 6, 4);
            if ((int) $gen > 4999) {
                $gender = 'male';
            } else {
                $gender = 'female';
            }
        }

        $employee->info_gender = $gender;

        $this->info($employee->info_first_name . ' ' . $id . ' ' . $gen . ' ' . $gender);
        $employee->save();
    }
}
```

### Send Messages to ended shifts
```php
command:shiftend
```

```php
/**
 * The name and signature of the console command.
 *
 * @var string
 */
protected $signature = 'command:shiftend';

/**
 * The console command description.
 *
 * @var string
 */
protected $description = 'end out messages to shift that are ending tomorrow';

/**
 * Create a new command instance.
 *
 * @return void
 */
public function __construct()
{
    parent::__construct();
}

/**
 * Execute the console command.
 *
 * @return int
 */
public function handle()
{
    //sms obj
    $sms = new SMSApi();

    //get today's date
    $tomorrow = date('Y-m-d', strtotime('+1 day'));
    //get shift that starts tomorrow
    $ending_shifts = Shift::whereDate('date_from', '=', $tomorrow)
        ->where('shift_end', 1)
        ->get();

    /*Start Message*/
    if (count($ending_shifts) > 0) {
        //get shift end message
        $message_type = MessageType::where('type', 'Shift Ends')->first();

        foreach ($ending_shifts as $shift) {
            //get end shift contacts
            $start_shift_contact[0] = $shift->client->client_mobile_number;
            $start_shift_contact[1] = $shift->employee->contact_work_phone_number_phone;
            $start_shift_contact[2] = $shift->manager->contact_work_phone_number_phone;
            //$start_shift_contact[3]   =   $shift->clientContact->contact_person_tel;

            //validate
            $validate_contacts = [];
            for ($index = 0; $index < 3; $index++) {
                $phone = $start_shift_contact[$index];
                $result = $sms->validate_phone_number($phone);
                if ($result) {
                    $validate_contacts[$index] = true;
                } else {
                    $validate_contacts[$index] = false;
                }
            }

            //log message
            $message = new Message();

            //create message
            $message_to_send = $message_type->message . 'Date:' . $shift->date_from . ' ' . 'Nurse:' . $shift->employee->info_nickname . ' ' . $shift->client->info_surname . 'Patient:' . $shift->client_surname . ' ' . $shift->client->client_surname;

            //get shift
            $message->shift_id = $shift->id;

            //get shift message type
            $message->message_type_id = $message_type->id;

            //loop through contacts
            foreach ($start_shift_contact as $index => $contact) {
                /*put my number for testing*/
                //$contact = "0658935600";

                //check if contact is valid
                if ($validate_contacts[$index] == true) {
                    //valid >> send sms
                    $response = $sms->sendSms($contact, $message_to_send);

                    //log sent status to true
                    if ($index == 0) {
                        //client messgae status
                        $message->client_message_status = true;
                    }

                    if ($index == 1) {
                        //employee message status
                        $message->employee_message_status = true;
                    }

                    if ($index == 2) {
                        //employee message status
                        $message->manager_message_status = true;
                    }

                    /*if($index == 3)
                    {
                        //client contact message status
                        $message->client_contacts_message_status = true;
                    }*/
                } else {
                    //log sent status to true
                    if ($index == 0) {
                        //client messgae status
                        $message->client_message_status = false;
                    }

                    if ($index == 1) {
                        //employee message status
                        $message->employee_message_status = false;
                    }

                    if ($index == 2) {
                        //employee message status
                        $message->manager_message_status = false;
                    }

                    /*if($index == 3)
                    {
                        //client contact message status
                        $message->client_contacts_message_status = false;
                    }*/
                }
            }

            //get date
            $message->message_date = date('Y-m-d');

            //save message
            if ($message->save()) {
                echo "Message logged successfully \n";
            } else {
                echo "Error login message \n";
            }
        }
    } else {
        echo "No ending shifts found \n";
    }
    return 0;
}

```

### Send out messages to shift that will start tomorrow.
```php
command:shiftstart
```
```php
/**
 * The name and signature of the console command.
 *
 * @var string
 */
protected $signature = 'command:shiftstart';

/**
 * The console command description.
 *
 * @var string
 */
protected $description = 'end out messages to shift that will start tomorrow.';

/**
 * Create a new command instance.
 *
 * @return void
 */
public function __construct()
{
    parent::__construct();
}

/**
 * Execute the console command.
 *
 * @return int
 */
public function handle()
{
    //sms obj
    $sms = new SMSApi();

    //get today's date
    $tomorrow = date('Y-m-d', strtotime('+1 day'));
    //get shift that starts tomorrow
    $start_shifts = Shift::whereDate('date_from', '=', $tomorrow)
        ->where('shift_start', 1)
        ->get();

    /*Start Message*/
    if (count($start_shifts) > 0) {
        //get shift start message
        $message_type = MessageType::where('type', 'Shift Begins')->first();

        foreach ($start_shifts as $shift) {
            //get start shitf contacts
            $start_shift_contact[0] = $shift->client->client_mobile_number;
            $start_shift_contact[1] = $shift->employee->contact_work_phone_number_phone;
            $start_shift_contact[2] = $shift->manager->contact_work_phone_number_phone;
            // $start_shift_contact[3]   =   $shift->clientContact->contact_person_tel;

            //validate
            $validate_contacts = [];
            for ($index = 0; $index < 3; $index++) {
                $phone = $start_shift_contact[$index];
                $result = $sms->validate_phone_number($phone);
                if ($result) {
                    $validate_contacts[$index] = true;
                } else {
                    $validate_contacts[$index] = false;
                }
            }

            //log message
            $message = new Message();

            //create message
            $message_to_send = $message_type->message . 'Date:' . $shift->date_from . ' ' . 'Nurse:' . $shift->employee->info_nickname . ' ' . $shift->client->info_surname . 'Patient:' . $shift->client_surname . ' ' . $shift->client->client_surname;

            //get shift
            $message->shift_id = $shift->id;

            //get shift message type
            $message->message_type_id = $message_type->id;

            //loop through contacts
            foreach ($start_shift_contact as $index => $contact) {
                /*put my number for testing*/
                $contact = '0823009121';
                $contact2 = '0793795821';

                //check if contact is valid
                if ($validate_contacts[$index] == true) {
                    //valid >> send sms
                    $response = $sms->sendSms($contact, $message_to_send);
                    // TODO REMOVE
                    $response = $sms->sendSms($contact2, $message_to_send);

                    //log sent status to true
                    if ($index == 0) {
                        //client messgae status
                        $message->client_message_status = true;
                    }

                    if ($index == 1) {
                        //employee message status
                        $message->employee_message_status = true;
                    }

                    if ($index == 2) {
                        //employee message status
                        $message->manager_message_status = true;
                    }
                    /*if($index == 3)
                    {
                        //client contact message status
                        $message->client_contacts_message_status = true;
                    }*/
                } else {
                    //log sent status to true
                    if ($index == 0) {
                        //client messgae status
                        $message->client_message_status = false;
                    }

                    if ($index == 1) {
                        //employee message status
                        $message->employee_message_status = false;
                    }

                    if ($index == 2) {
                        //employee message status
                        $message->manager_message_status = false;
                    }

                    /*if($index == 3)
                    {
                        //client contact message status
                        $message->client_contacts_message_status = false;
                    }*/
                }
            }

            //get date
            $message->message_date = date('Y-m-d');

            //save message
            if ($message->save()) {
                echo "Message logged successfully \n";
            } else {
                echo "Error login message \n";
            }
        }
    } else {
        echo "No shifts starting tomorrow found\n";
    }
    return 0;
}

```

### Sends out messages to shifts where nurses are changing.
```php
command:shiftchange
```

```php
/**
 * The name and signature of the console command.
 *
 * @var string
 */
protected $signature = 'command:shiftchange';

/**
 * The console command description.
 *
 * @var string
 */
protected $description = 'Sends out messages to shifts where nurses are changing';

/**
 * Create a new command instance.
 *
 * @return void
 */
public function __construct()
{
    parent::__construct();
}

/**
 * Execute the console command.
 *
 * @return int
 */
public function handle()
{
    //sms obj
    $sms = new SMSApi();

    //get today's date
    $tomorrow = date('Y-m-d', strtotime('+1 day'));
    //get shift that starts tomorrow
    $changing_shifts = Shift::whereDate('date_from', '=', $tomorrow)
        ->where('shift_change_nurse', 1)
        ->get();

    /*Start Message*/
    if (count($changing_shifts) > 0) {
        //get shift end message
        $message_type = MessageType::where('type', 'Change Nurse')->first();

        foreach ($changing_shifts as $shift) {
            //get end shift contacts
            $start_shift_contact[0] = $shift->client->client_mobile_number;
            $start_shift_contact[1] = $shift->employee->contact_work_phone_number_phone;
            $start_shift_contact[2] = $shift->manager->contact_work_phone_number_phone;
            //$start_shift_contact[3]   =   $shift->clientContact->contact_person_tel;

            //validate
            $validate_contacts = [];
            for ($index = 0; $index < 3; $index++) {
                $phone = $start_shift_contact[$index];
                $result = $sms->validate_phone_number($phone);
                if ($result) {
                    $validate_contacts[$index] = true;
                } else {
                    $validate_contacts[$index] = false;
                }
            }

            //log message
            $message = new Message();

            //create message
            $message_to_send = $message_type->message . 'Date:' . $shift->date_from . ' ' . 'Nurse:' . $shift->employee->info_nickname . ' ' . $shift->client->info_surname . 'Patient:' . $shift->client_surname . ' ' . $shift->client->client_surname;

            //get shift
            $message->shift_id = $shift->id;

            //get shift message type
            $message->message_type_id = $message_type->id;

            //loop through contacts
            foreach ($start_shift_contact as $index => $contact) {
                /*put my number for testing*/
                //$contact = "0658935600";

                //check if contact is valid
                if ($validate_contacts[$index] == true) {
                    //valid >> send sms
                    $response = $sms->sendSms($contact, $message_to_send);

                    //log sent status to true
                    if ($index == 0) {
                        //client messgae status
                        $message->client_message_status = true;
                    }

                    if ($index == 1) {
                        //employee message status
                        $message->employee_message_status = true;
                    }

                    if ($index == 2) {
                        //employee message status
                        $message->manager_message_status = true;
                    }
                    /*if($index == 3)
                    {
                        //client contact message status
                        $message->client_contacts_message_status = true;
                    }*/
                } else {
                    //log sent status to true
                    if ($index == 0) {
                        //client messgae status
                        $message->client_message_status = false;
                    }

                    if ($index == 1) {
                        //employee message status
                        $message->employee_message_status = false;
                    }

                    if ($index == 2) {
                        //employee message status
                        $message->manager_message_status = false;
                    }
                }
            }

            //get date
            $message->message_date = date('Y-m-d');

            //save message
            if ($message->save()) {
                echo "Message logged successfully \n";
            } else {
                echo "Error login message \n";
            }
        }
    } else {
        echo "No ending shifts found \n";
    }
    return 0;
}
```


## Recurring commands

```php
  $schedule->commands('command:shiftchange')->daily();
  $schedule->commands('command:shiftend')->daily();
  $schedule->commands('command:shiftstart')->daily();
```