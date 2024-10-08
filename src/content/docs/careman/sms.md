---
title: "Careman SMS Provider"
description: "How the client SMS's are automatically sent."
---

<img src="../../../../sms-portal.svg">

## to get default sms in the database run the following command
```$php artisan db:seed```

```php
<?php
namespace App\Lib;
class SMSApi{
    public $url;
    public $username;
    public $password;
    public $time;
    public $validityperiod;

    public function __construct() {
        $this->url = 'http://api.smsportal.com/api5/http5.aspx';
        $this->username = ''; //your login username
        $this->password = ''; //your login password
      	$this->time = date('h:i');
		$this->validityperiod = '24';
    }
    
    public function checkCredits() {
        $data = array(
            'Type' => 'credits', 
            'Username' => $this->username,
            'Password' => $this->password
        );
        $response = $this->querySmsServer($data);
        // NULL response only if connection to sms server failed or timed out
        if ($response == NULL) {
            return '???';
        } elseif ($response->call_result->result) {
	    echo '</br>Credits: ' .  $response->data->credits;
            return $response->data->credits;
        }
    }
    
   public function sendSms($mobile_number, $msg) {
        $data = array(
            'Type' => 'sendparam', 
            'Username' => $this->username,
            'Password' => $this->password,
            'numto' => $mobile_number, //phone numbers (can be comma seperated)
            'data1' => $msg, //your sms message
          	'time' => $this->time, //the time your message will go out
          	'validityperiod' => $this->validityperiod, //the duration of validity

        );
        $response = $this->querySmsServer($data);
        return $this->returnResult($response);
    }
    
    // query API server and return response in object format
    private function querySmsServer($data, $optional_headers = null) {

        $ch = curl_init($this->url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        // prevent large delays in PHP execution by setting timeouts while connecting and querying the 3rd party server
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT_MS, 2000); // response wait time
        curl_setopt($ch, CURLOPT_TIMEOUT_MS, 2000); // output response time
        $response = curl_exec($ch);
        if (!$response) return NULL;
        else return new \SimpleXMLElement($response);
    }

    // handle sms server response
    private function returnResult($response) {
        $return = new \StdClass();
        $return->pass = NULL;
        $return->msg = '';
        if ($response == NULL) {
            $return->pass = FALSE;
            $return->msg = 'SMS connection error.';
        } elseif ($response->call_result->result) {
            $return->pass = 'CallResult: '.TRUE . '</br>';
	    $return->msg = 'EventId: '.$response->send_info->eventid .'</br>Error: '.$response->call_result->error;
        } else {
            $return->pass = 'CallResult: '.FALSE. '</br>';
            $return->msg = 'Error: '.$response->call_result->error;
        }

        return $return; 
    }

    function validate_phone_number($phone)
    {
         // Allow +, - and . in phone number
         $filtered_phone_number = filter_var($phone, FILTER_SANITIZE_NUMBER_INT);
         // Remove "-" from number
         $phone_to_check = str_replace("-", "", $filtered_phone_number);
         // Check the lenght of number
         // This can be customized if you want phone number from a specific country
         if (strlen($phone_to_check) < 10 || strlen($phone_to_check) > 13) {
            return false;
         } else {
           return true;
         }
    }
    
}
```