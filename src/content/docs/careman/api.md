---
title: "Careman Laravel API"
description: "Laravel route list displaying all functions of routes across the entire application"
---

| Domain                                                         | Method | Name                                     | Middleware                                                                |
| -------------------------------------------------------------- | ------ | ---------------------------------------- | ------------------------------------------------------------------------- |
| *                                                              |        |                                          | App\Http\Middleware\Authenticate                                          |
| *                                                              |        |                                          | Illuminate\Routing\Middleware\ValidateSignature                           |
| *                                                              |        |                                          | Illuminate\Routing\Middleware\ThrottleRequests:6,1                        |
| *                                                              |        |                                          | App\Http\Middleware\RedirectIfAuthenticated                               |
| /api/                                                          | GET    | /                                   **** | App\Http\Controllers\HomeController@index                                 |
| /api/                                                          | POST   |                                          | App\Http\Controllers\Auth\AuthenticatedSessionController@store            |
| /api/login                                                     | GET    | login                                    | App\Http\Controllers\Auth\AuthenticatedSessionController@create           |
| /api/logout                                                    | POST   | logout                                   | App\Http\Controllers\Auth\AuthenticatedSessionController@destroy          |
| /api/s                                                         | GET    | s                                        | App\Http\Controllers\SearchController@shift_type_list                     |
| /api/active-calendar                                           | GET    | active-calendar                          | App\Http\Controllers\ClientController@cal_active_list                     |
| /api/api/user                                                  | GET    | user                                     | Closure                                                                   |
| /api/assessment-add/{id}                                       | POST   | assessment-add/{id}                      | App\Http\Controllers\AssessmentController@shift_add                       |
| /api/assessment-calendar                                       | GET    | assessment-calendar                      | App\Http\Controllers\ClientController@cal_assessment_list                 |
| /api/assessment-create/{id}                                    | GET    | assessment-create/{id}                   | App\Http\Controllers\AssessmentController@shift_create                    |
| /api/assessment-edit/{id}                                      | GET    | assessment-edit/{id}                     | App\Http\Controllers\AssessmentController@shift_edit                      |
| /api/assessment-update                                         | POST   | assessment-update                        | App\Http\Controllers\AssessmentController@shift_update                    |
| /api/available-employees/{from}/{to}/{skills}                  | GET    | available-employees/{from}/{to}/{skills} | App\Http\Controllers\ShiftController@available_employees                  |
| /api/awaits-calendar                                           | GET    | awaits-calendar                          | App\Http\Controllers\ClientController@cal_awaits_list                     |
| /api/client-active                                             | GET    | client-active                            | App\Http\Controllers\ClientController@shift_active_list                   |
| /api/client-add                                                | POST   | client-add                               | App\Http\Controllers\ClientController@create                              |
| /api/client-assessments                                        | GET    | client-assessments                       | App\Http\Controllers\ClientController@shift_assessment_list               |
| /api/client-awaits                                             | GET    | client-awaits                            | App\Http\Controllers\ClientController@shift_awaits_list                   |
| /api/client-closed                                             | GET    | client-closed                            | App\Http\Controllers\ClientController@shift_closed_list                   |
| /api/client-create                                             | GET    | client-create                            | App\Http\Controllers\ClientController@handler                             |
| /api/client-deceased                                           | GET    | client-deceased                          | App\Http\Controllers\ClientController@shift_deceased_list                 |
| /api/client-edit/{id}                                          | GET    | client-edit/{id}                         | App\Http\Controllers\ClientController@edit_client                         |
| /api/client-leads                                              | GET    | client-leads                             | App\Http\Controllers\ClientController@shift_type_list                     |
| /api/contrast-color                                            | GET    | contrast-color                           | App\Http\Controllers\ClientController@contrast_color                      |
| /api/client-note-pdf                                           | GET    | client-note-pdf                          | App\Http\Controllers\ClientController@note_pdf                            |
| /api/client-phase-edit/{id}                                    | POST   | client-phase-edit/{id}                   | App\Http\Controllers\ClientController@insert_leads_phase                  |
| /api/client-refuse                                             | GET    | client-refuse                            | App\Http\Controllers\ClientController@shift_refuse_list                   |
| /api/client-search                                             | GET    | client-search                            | App\Http\Controllers\ClientController@search_client                       |
| /api/client-single                                             | GET    | client-single                            | App\Http\Controllers\ClientController@shift_single_list                   |
| /api/client-single-edit/{id}                                   | GET    | client-single-edit/{id}                  | App\Http\Controllers\ClientController@shift_single_edit                   |
| /api/client_single_update                                      | POST   | client_single_update                     | App\Http\Controllers\ClientController@client_single_update                |
| /api/update_client                                             | POST   | update_client                            | App\Http\Controllers\ClientController@update_client                       |
| /api/client-view                                               | GET    | client-view                              | App\Http\Controllers\ClientController@view_client                         |
| /api/client/active/search                                      | GET    | client/active/search                     | App\Http\Controllers\ClientController@shift_active_list_search            |
| /api/client/assessments/search                                 | GET    | client/assessments/search                | App\Http\Controllers\ClientController@shift_assessments_list_search       |
| /api/client/awaits/search                                      | GET    | client/awaits/search                     | App\Http\Controllers\ClientController@shift_awaits_list_search            |
| /api/client/closed/search                                      | GET    | client/closed/search                     | App\Http\Controllers\ClientController@shift_closed_list_search            |
| /api/client/deceased/search                                    | GET    | client/deceased/search                   | App\Http\Controllers\ClientController@shift_deceased_list_search          |
| /api/client/leads/search                                       | GET    | client/leads/search                      | App\Http\Controllers\ClientController@shift_leads_list_search             |
| /api/client/refuse/search                                      | GET    | client/refuse/search                     | App\Http\Controllers\ClientController@shift_refuse_list_search            |
| /api/client/single/search                                      | GET    | client/single/search                     | App\Http\Controllers\ClientController@shift_single_list_search            |
| /api/close-all-shifts/{id}                                     | GET    | close-all-shifts/{id}                    | App\Http\Controllers\ShiftController@close_all_shifts                     |
| /api/close-deceased-shifts/{id}                                | GET    | close-deceased-shifts/{id}               | App\Http\Controllers\ShiftController@patient_deceased                     |
| /api/close-shift/{id}                                          | GET    | close-shift/{id}                         | App\Http\Controllers\ShiftController@close_shift                          |
| /api/close-upcoming-shifts/{id}                                | GET    | close-upcoming-shifts/{id}               | App\Http\Controllers\ShiftController@close_upcoming_shifts                |
| /api/closed-calendar                                           | GET    | closed-calendar                          | App\Http\Controllers\ClientController@cal_closed_list                     |
| /api/confirm-password                                          | GET    | confirm-password                         | App\Http\Controllers\Auth\ConfirmablePasswordController@show              |
| /api/                                                          | POST   |                                          | App\Http\Controllers\Auth\ConfirmablePasswordController@store             |
| /api/deceased-calendar                                         | GET    | deceased-calendar                        | App\Http\Controllers\ClientController@cal_deceased_list                   |
| /api/delete-client-doc/{id}                                    | GET    | delete-client-doc/{id}                   | App\Http\Controllers\ClientDocsController@delete_doc                      |
| /api/verification.send                                         | POST   | verification.send                        | App\Http\Controllers\Auth\EmailVerificationNotificationController@store   |
| /api/add_employee                                              | POST   | add_employee                             | App\Http\Controllers\EmployeeController@add_employee                      |
| /api/employee-create                                           | GET    | employee-create                          | App\Http\Controllers\EmployeeController@create_employee                   |
| /api/employee-edit/{id}                                        | GET    | employee-edit/{id}                       | App\Http\Controllers\EmployeeController@edit_employee                     |
| /api/employee-note-pdf                                         | GET    | employee-note-pdf                        | App\Http\Controllers\EmployeeController@note_pdf                          |
| /api/employee-search                                           | GET    | employee-search                          | App\Http\Controllers\EmployeeController@search_employee                   |
| /api/update_employee                                           | PUT    | update-employee                          | App\Http\Controllers\EmployeeController@update_employee                   |
| /api/employee-view                                             | GET    | employee-view                            | App\Http\Controllers\EmployeeController@view_employee                     |
| /api/export-shifts                                             | GET    | export-shifts                            | Closure                                                                   |
| /api/                                                          | POST   |                                          | App\Http\Controllers\HomeController@export                                |
| /api/                                                          | POST   |                                          | App\Http\Controllers\HomeController@exportClientHours                     |
| /api/filter_employees                                          | POST   | filter_employees                         | App\Http\Controllers\ShiftController@filter_employees                     |
| /api/password-email                                            | POST   | password-email                           | App\Http\Controllers\Auth\PasswordResetLinkController@store               |
| /api/forgot-password                                           | GET    | forgot-password                          | App\Http\Controllers\Auth\PasswordResetLinkController@create              |
| /api/forms                                                     | GET    | forms                                    | App\Http\Controllers\FormsController@index                                |
| /api/                                                          | POST   |                                          | App\Http\Controllers\FormsController@saveForm                             |
| /api/forms/create                                              | GET    | forms/create                             | App\Http\Controllers\FormsController@create                               |
| /api/forms/create-client/{shift_id}/{form_id}                  | GET    | forms/create-client/{shift_id}/{form_id} | App\Http\Controllers\FormsController@assign                               |
| /api/                                                          | POST   |                                          | App\Http\Controllers\FormsController@editFrom                             |
| /api/forms/edit-client/{shift_id}/{form_id}                    | GET    | forms/edit-client/{shift_id}/{form_id}   | App\Http\Controllers\FormsController@getClient                            |
| /api/forms/edit/{id}                                           | GET    | forms/edit/{id}                          | App\Http\Controllers\FormsController@showEdit                             |
| /api/                                                          | POST   |                                          | App\Http\Controllers\FormsController@saveClient                           |
| /api/                                                          | POST   |                                          | App\Http\Controllers\FormsController@updateClient                         |
| /api/invalid-login                                             | GET    | invalid-login                            | Closure                                                                   |
| /api/leads-calendar                                            | GET    | leads-calendar                           | App\Http\Controllers\ClientController@cal_leads_list                      |
| /api/manager_booking_add                                       | POST   | manager_booking_add                      | App\Http\Controllers\ManagerShiftsController@manager_booking_add          |
| /api/manager-booking-complete/{id}                             | GET    | manager-booking-complete/{id}            | App\Http\Controllers\ManagerShiftsController@manager_booking_complete     |
| /api/manager-booking-delete/{id}                               | GET    | manager-booking-delete/{id}              | App\Http\Controllers\ManagerShiftsController@manager_booking_delete       |
| /api/manager-booking-edit/{id}                                 | GET    | manager-booking-edit/{id}                | App\Http\Controllers\ManagerShiftsController@manager_booking_edit         |
| /api/manager_booking_update                                    | POST   | manager_booking_update                   | App\Http\Middleware\ManagerShiftsController@manager_booking_updat         |
| /api/manager-schedule-pdf                                      | GET    | manager-schedule-pdf                     | App\Http\Controllers\PDFController@print_manager_schedule                 |
| /api/manager_create_shift_forms                                | POST   | manager_create_shift_forms               | ManagerShiftFormsController@manager_create_shift_forms                    |
| /api/manager-shift-forms/{id}                                  | GET    | manager-shift-forms/{id}                 | App\Http\Controllers\ManagerShiftFormsController@manager_shift_type_forms |
| /api/manager_shift_type_add                                    | POST   | manager_shift_type_add                   | ManagerShiftTypesController@manager_shift_type_add                        |
| /api/manager-shifttypes                                        | GET    | manager-shifttypes                       | App\Http\Controllers\ManagerShiftTypesController@manager_shift_types      |
| /api/managers-calendar<br>`date-from="" date-to=""7 clinic=""` | GET    | managers-calendar                        | App\Http\Controllers\ManagerShiftsController@managers_calendar            |
| /api/message-create                                            | GET    | message-create                           | App\Http\Controllers\MessageTypeController@message_create                 |
| /api/message-delete/{id}                                       | GET    | message-delete/{id}                      | App\Http\Controllers\MessageTypeController@message_delete                 |
| /api/message-manage                                            | GET    | message-manage                           | App\Http\Controllers\MessageController@messages_manage                    |
| /api/message-send/{shift}/{date}/{id}                          | GET    | message-send/{shift}/{date}/{id}         | App\Http\Controllers\MessageController@send_shift_messages                |
| /api/message-shifts                                            | GET    | message-shifts                           | App\Http\Controllers\MessageController@messages_get_shifts                |
| /api/message_store                                             | POST   | message_store                            | App\Http\Controllers\MessageTypeController@message_store                  |
| /api/message-types                                             | GET    | message-types                            | App\Http\Controllers\MessageTypeController@messages_types                 |
| /api/message_update                                            | POST   | message_update                           | App\Http\Controllers\MessageTypeController@message_update                 |
| /api/send_message_all                                          | POST   | send_message_all                         | App\Http\Controllers\MessageController@send_message_all                   |
| /api/refuse-calendar                                           | GET    | refuse-calendar                          | App\Http\Controllers\ClientController@cal_refuse_list                     |
| /api/register                                                  | GET    | register                                 | App\Http\Controllers\Auth\RegisteredUserController@create                 |
| /api/                                                          | POST   |                                          | App\Http\Controllers\Auth\RegisteredUserController@store                  |
| /api/password-update                                           | POST   | password-update                          | App\Http\Controllers\Auth\NewPasswordController@store                     |
| /api/reset-password/{token}                                    | GET    | reset-password/{token}                   | App\Http\Controllers\Auth\NewPasswordController@create                    |
| /api/sanctum/csrf-cookie                                       | GET    | sanctum/csrf-cookie                      | Laravel\Sanctum\Http\Controllers\CsrfCookieController@show                |
| /api/sent-messages                                             | GET    | sent-messages                            | App\Http\Controllers\MessageController@sent_messages                      |
| /api/                                                          | POST   |                                          | App\Http\Controllers\ShiftController@shift_add                            |
| /api/shift-change-messages                                     | GET    | shift-change-messages                    | App\Http\Controllers\MessageController@shift_change_messages              |
| /api/shift-create/{id}                                         | GET    | shift-create/{id}                        | App\Http\Controllers\ShiftController@shift_create                         |
| /api/shift-edit/{id}                                           | GET    | shift-edit/{id}                          | App\Http\Controllers\ShiftController@shift_edit                           |
| /api/shift-end-messages                                        | GET    | shift-end-messages                       | App\Http\Controllers\MessageController@shift_end_messages                 |
| /api/shift-start-messages                                      | GET    | shift-start-messages                     | App\Http\Controllers\MessageController@shift_start_messages               |
| /api/shift-type                                                | GET    | shift-type                               | App\Http\Controllers\ShiftTypesController@shift_type_list                 |
| /api/dashboard                                                 | POST   | dashboard                                | App\Http\Controllers\ShiftTypesController@shift_type_create               |
| /api/single-calendar                                           | GET    | single-calendar                          | App\Http\Controllers\ClientController@cal_single_list                     |
| /api/skill-list                                                | GET    | skill-list                               | App\Http\Controllers\SkillController@skill_list                           |
| /api/skill-create                                              | PUT    | skill-create                             | App\Http\Controllers\SkillController@skill_create                         |
| /api/user-role                                                 | POST   | user_role                                | App\Http\Controllers\RolesController@user_role                            |
| /api/verify-email                                              | GET    | verify-email                             | App\Http\Controllers\Auth\EmailVerificationPromptController@__invoke      |
| /api/verify-email/{id}/{hash}                                  | GET    | verify-email/{id}/{hash}                 | App\Http\Controllers\Auth\VerifyEmailController@__invoke                  |
| /api/view-users                                                | GET    | view-users                               | App\Http\Controllers\RolesController@view_users                           |
| /api/                                                          | POST   | vital-create                             | App\Http\Controllers\FormsController@vital_create                         |
| /api/vitals-edit/{shift_id}                                    | GET    | vitals-edit/{shift_id}                   | App\Http\Controllers\FormsController@vital_edit                           |
| /api/                                                          | POST   | vitals-update                            | App\Http\Controllers\FormsController@vital_update                         |
| /api/vitals/{shift_id}                                         | GET    | vitals/{shift_id}                        | App\Http\Controllers\FormsController@vitals                               |