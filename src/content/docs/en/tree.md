---
title: Directory Tree
---

## Backend
```
📦backend
 ┣ 📂app
 ┃ ┣ 📂Console
 ┃ ┃ ┣ 📂Commands
 ┃ ┃ ┃ ┣ 🐘 GenderID.php
 ┃ ┃ ┃ ┣ 🐘 shiftchangemessages.php
 ┃ ┃ ┃ ┣ 🐘 ShiftEndMessages.php
 ┃ ┃ ┃ ┗ 🐘 ShiftStartMessages.php
 ┃ ┃ ┗ 🐘 Kernel.php
 ┃ ┣ 📂Exceptions
 ┃ ┃ ┗ 🐘 Handler.php
 ┃ ┣ 📂Exports
 ┃ ┃ ┗ 🐘 ShiftExport.php
 ┃ ┣ 📂Http
 ┃ ┃ ┣ 📂Controllers
 ┃ ┃ ┃ ┣ 📂Auth
 ┃ ┃ ┃ ┃ ┣ 🐘 AuthenticatedSessionController.php
 ┃ ┃ ┃ ┃ ┣ 🐘 ConfirmablePasswordController.php
 ┃ ┃ ┃ ┃ ┣ 🐘 ConfirmPasswordController.php
 ┃ ┃ ┃ ┃ ┣ 🐘 EmailVerificationNotificationController.php
 ┃ ┃ ┃ ┃ ┣ 🐘 EmailVerificationPromptController.php
 ┃ ┃ ┃ ┃ ┣ 🐘 ForgotPasswordController.php
 ┃ ┃ ┃ ┃ ┣ 🐘 LoginController.php
 ┃ ┃ ┃ ┃ ┣ 🐘 NewPasswordController.php
 ┃ ┃ ┃ ┃ ┣ 🐘 PasswordResetLinkController.php
 ┃ ┃ ┃ ┃ ┣ 🐘 RegisterController.php
 ┃ ┃ ┃ ┃ ┣ 🐘 RegisteredUserController.php
 ┃ ┃ ┃ ┃ ┣ 🐘 ResetPasswordController.php
 ┃ ┃ ┃ ┃ ┣ 🐘 VerificationController.php
 ┃ ┃ ┃ ┃ ┗ 🐘 VerifyEmailController.php
 ┃ ┃ ┃ ┣ 🐘 AssessmentController.php
 ┃ ┃ ┃ ┣ 🐘 ClientController.php
 ┃ ┃ ┃ ┣ 🐘 ClientDocsController.php
 ┃ ┃ ┃ ┣ 🐘 Controller.php
 ┃ ┃ ┃ ┣ 🐘 EmployeeController.php
 ┃ ┃ ┃ ┣ 🐘 EmployeeExperienceController.php
 ┃ ┃ ┃ ┣ 🐘 FormsController.php
 ┃ ┃ ┃ ┣ 🐘 FormShiftController.php
 ┃ ┃ ┃ ┣ 🐘 HomeController.php
 ┃ ┃ ┃ ┣ 🐘 ManagerShiftFormsController.php
 ┃ ┃ ┃ ┣ 🐘 ManagerShiftsController.php
 ┃ ┃ ┃ ┣ 🐘 ManagerShiftTypesController.php
 ┃ ┃ ┃ ┣ 🐘 MessageController.php
 ┃ ┃ ┃ ┣ 🐘 MessageTypeController.php
 ┃ ┃ ┃ ┣ 🐘 PDFController.php
 ┃ ┃ ┃ ┣ 🐘 ResidentLocationController.php
 ┃ ┃ ┃ ┣ 🐘 RolesController.php
 ┃ ┃ ┃ ┣ 🐘 SearchController.php
 ┃ ┃ ┃ ┣ 🐘 ShiftController.php
 ┃ ┃ ┃ ┣ 🐘 ShiftTypesController.php
 ┃ ┃ ┃ ┣ 🐘 SingleProcedureController.php
 ┃ ┃ ┃ ┗ 🐘 SkillController.php
 ┃ ┃ ┣ 📂Middleware
 ┃ ┃ ┃ ┣ 🐘 Authenticate.php
 ┃ ┃ ┃ ┣ 🐘 EncryptCookies.php
 ┃ ┃ ┃ ┣ 🐘 PreventRequestsDuringMaintenance.php
 ┃ ┃ ┃ ┣ 🐘 RedirectIfAuthenticated.php
 ┃ ┃ ┃ ┣ 🐘 TrimStrings.php
 ┃ ┃ ┃ ┣ 🐘 TrustHosts.php
 ┃ ┃ ┃ ┣ 🐘 TrustProxies.php
 ┃ ┃ ┃ ┗ 🐘 VerifyCsrfToken.php
 ┃ ┃ ┣ 📂Requests
 ┃ ┃ ┃ ┗ 📂Auth
 ┃ ┃ ┃ ┃ ┗ 🐘 LoginRequest.php
 ┃ ┃ ┣ 📂Resources
 ┃ ┃ ┃ ┗ 🐘 UserRoleResource.php
 ┃ ┃ ┗ 🐘 Kernel.php
 ┃ ┣ 📂Lib
 ┃ ┃ ┗ 🐘 SMSApi.php
 ┃ ┣ 📂Models
 ┃ ┃ ┣ 🐘 Assessment.php
 ┃ ┃ ┣ 🐘 Client.php
 ┃ ┃ ┣ 🐘 ClientContacts.php
 ┃ ┃ ┣ 🐘 ClientDocs.php
 ┃ ┃ ┣ 🐘 ClientLeads.php
 ┃ ┃ ┣ 🐘 ClientNotes.php
 ┃ ┃ ┣ 🐘 Employee.php
 ┃ ┃ ┣ 🐘 EmployeeComGroup.php
 ┃ ┃ ┣ 🐘 EmployeeDocument.php
 ┃ ┃ ┣ 🐘 EmployeeExperience.php
 ┃ ┃ ┣ 🐘 EmployeeNotes.php
 ┃ ┃ ┣ 🐘 EmployeeSkills.php
 ┃ ┃ ┣ 🐘 Form.php
 ┃ ┃ ┣ 🐘 FormData.php
 ┃ ┃ ┣ 🐘 FormDataValue.php
 ┃ ┃ ┣ 🐘 FormShiftValue.php
 ┃ ┃ ┣ 🐘 ManagerShiftForms.php
 ┃ ┃ ┣ 🐘 ManagerShifts.php
 ┃ ┃ ┣ 🐘 ManagerShiftTypes.php
 ┃ ┃ ┣ 🐘 Message.php
 ┃ ┃ ┣ 🐘 MessageType.php
 ┃ ┃ ┣ 🐘 ResidentLocation.php
 ┃ ┃ ┣ 🐘 Roles.php
 ┃ ┃ ┣ 🐘 Shift.php
 ┃ ┃ ┣ 🐘 ShiftEmployee.php
 ┃ ┃ ┣ 🐘 shiftSkillsRequired.php
 ┃ ┃ ┣ 🐘 ShiftTypes.php
 ┃ ┃ ┣ 🐘 SingleProcedure.php
 ┃ ┃ ┣ 🐘 skill.php
 ┃ ┃ ┣ 🐘 UpdatingDoctor.php
 ┃ ┃ ┣ 🐘 User.php
 ┃ ┃ ┣ 🐘 ViewEmployees.php
 ┃ ┃ ┣ 🐘 ViewPatients.php
 ┃ ┃ ┗ 🐘 Vital.php
 ┃ ┣ 📂Providers
 ┃ ┃ ┣ 🐘 AppServiceProvider.php
 ┃ ┃ ┣ 🐘 AuthServiceProvider.php
 ┃ ┃ ┣ 🐘 BroadcastServiceProvider.php
 ┃ ┃ ┣ 🐘 EventServiceProvider.php
 ┃ ┃ ┗ 🐘 RouteServiceProvider.php
 ┃ ┗ 📂View
 ┃ ┃ ┗ 📂Components
 ┃ ┃ ┃ ┣ 🐘 AppLayout.php
 ┃ ┃ ┃ ┗ 🐘 GuestLayout.php
 ┣ 📂bootstrap
 ┃ ┣ 📂cache
 ┃ ┃ ┣ 📜.gitignore
 ┃ ┃ ┣ 🐘 packages.php
 ┃ ┃ ┗ 🐘 services.php
 ┃ ┗ 🐘 app.php
 ┣ 📂config
 ┃ ┣ 🐘 app.php
 ┃ ┣ 🐘 auth.php
 ┃ ┣ 🐘 broadcasting.php
 ┃ ┣ 🐘 cache.php
 ┃ ┣ 🐘 cors.php
 ┃ ┣ 🐘 database.php
 ┃ ┣ 🐘 filesystems.php
 ┃ ┣ 🐘 hashing.php
 ┃ ┣ 🐘 logging.php
 ┃ ┣ 🐘 mail.php
 ┃ ┣ 🐘 queue.php
 ┃ ┣ 🐘 sanctum.php
 ┃ ┣ 🐘 services.php
 ┃ ┣ 🐘 session.php
 ┃ ┗ 🐘 view.php
 ┣ 📂database
 ┃ ┣ 📂factories
 ┃ ┃ ┗ 🐘 UserFactory.php
 ┃ ┣ 📂migrations
 ┃ ┃ ┣ 🐘 2014_10_12_000000_create_users_table.php
 ┃ ┃ ┣ ...
 ┃ ┣ 📂seeders
 ┃ ┃ ┣ 🐘 DatabaseSeeder.php
 ┃ ┃ ┗ 🐘 MessageTypeSeeder.php
 ┃ ┗ 📜.gitignore
 ┣ 📂readme
 ┃ ┣ 📂db_backups
 ┃ ┃ ┣ 📃2022_02_03.sql
 ┃ ┃ ┣ 📃2022_02_18.sql
 ┃ ┃ ┣ 📃2022_02_23.sql
 ┃ ┃ ┣ 📃2022_03_16.sql
 ┃ ┃ ┣ 📃2022_03_29.sql
 ┃ ┃ ┣ 📃2022_04_08.sql
 ┃ ┃ ┣ 📃2022_04_21.sql
 ┃ ┃ ┣ 📃2022_05_19.sql
 ┃ ┃ ┣ 📃2022_05_24.sql
 ┃ ┃ ┣ 📃2022_07_22.sql
 ┃ ┃ ┣ 📃2022_07_29.sql
 ┃ ┃ ┗ 📃dev_site_2022_06_02.sql
 ┃ ┣ 📜db_mysql_relations_careman.mwb
 ┃ ┗ 📜db_relations.svg
 ┣ 📂routes
 ┃ ┣ 🐘 api.php
 ┃ ┣ 🐘 auth.php
 ┃ ┣ 🐘 channels.php
 ┃ ┣ 🐘 console.php
 ┃ ┗ 🐘 web.php
 ┣ 📂storage
 ┃ ...
 ┣ 📂tests
 ┃ ┣ 📂Feature
 ┃ ┃ ┣ 📂Auth
 ┃ ┃ ┃ ┣ 🐘 AuthenticationTest.php
 ┃ ┃ ┃ ┣ 🐘 EmailVerificationTest.php
 ┃ ┃ ┃ ┣ 🐘 PasswordConfirmationTest.php
 ┃ ┃ ┃ ┣ 🐘 PasswordResetTest.php
 ┃ ┃ ┃ ┗ 🐘 RegistrationTest.php
 ┃ ┃ ┗ 🐘 ExampleTest.php
 ┃ ┣ 📂Unit
 ┃ ┃ ┗ 🐘 ExampleTest.php
 ┃ ┣ 🐘 CreatesApplication.php
 ┃ ┗ 🐘 TestCase.php
 ┣ 📜.editorconfig
 ┣ 📜.env
 ┣ 📜.env.example
 ┣ 📜.gitattributes
 ┣ 📜.gitignore
 ┣ 📜artisan
 ┣ 📜composer.json
 ┣ 📜composer.lock
 ┣ 📜phpunit.xml
 ┣ 📜README.html
 ┣ 📜README.md
 ┣ 📜routes.md
 ┣ 📜SECURITY.md
 ┣ 🐘 server.php
 ┗ 📜webpack.mix.js
 ```
## Front-End
 ```
📦frontend
 ┣📂public
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂css
 ┃ ┃ ┃ ┣ 🌟app.css
 ┃ ┃ ┃ ┣ 🌟home.css
 ┃ ┃ ┃ ┣ 🌟login.css
 ┃ ┃ ┃ ┣ 🌟picklist.css
 ┃ ┃ ┃ ┗ 🌟popover.css
 ┃ ┃ ┣ 📂plugins
 ┃ ┃ ┃ ┣ 📜arrive.min.js
 ┃ ┃ ┃ ┣ 📜bootstrap-datetimepicker.min.js
 ┃ ┃ ┃ ┣ 📜bootstrap-notify.js
 ┃ ┃ ┃ ┣ 📜bootstrap-selectpicker.js
 ┃ ┃ ┃ ┣ 📜bootstrap-tagsinput.js
 ┃ ┃ ┃ ┣ 📜chartist.min.js
 ┃ ┃ ┃ ┣ 📜fullcalendar.min.js
 ┃ ┃ ┃ ┣ 📜jasny-bootstrap.min.js
 ┃ ┃ ┃ ┣ 📜jquery-jvectormap.js
 ┃ ┃ ┃ ┣ 📜jquery.bootstrap-wizard.js
 ┃ ┃ ┃ ┣ 📜jquery.dataTables.min.js
 ┃ ┃ ┃ ┣ 📜jquery.tagsinput.js
 ┃ ┃ ┃ ┣ 📜jquery.validate.min.js
 ┃ ┃ ┃ ┣ 📜moment.min.js
 ┃ ┃ ┃ ┣ 📜nouislider.min.js
 ┃ ┃ ┃ ┣ 📜perfect-scrollbar.jquery.min.js
 ┃ ┃ ┃ ┗ 📜sweetalert2.js
 ┃ ┃ ┃ ⚛ AddressCheck.jsx
 ┃ ┃ ┃ ⚛ Calendar.jsx
 ┃ ┃ ┃ ⚛ ClientAdd.jsx
 ┃ ┃ ┃ ⚛ ComboTreePlugin.jsx
 ┃ ┃ ┃ ⚛ EmployeeAdd.jsx
 ┃ ┃ ┃ ⚛ PhaseSort.jsx
 ┃ ┃ ┃ ⚛ Picklist.jsx
 ┃ ┃ ┃ ⚛ Shift.jsx
 ┃ ┃ ┃ ⚛ ShiftType.jsx
 ┃ ┃ ┃ ⚛ SkillList.jsx
 ┃ ┃ ┃ ⚛ Validator.jsx
 ┃ ┃ ┗ 📂tags
 ┃ ┃ ┃ ┣ 🌟tagsinput.css
 ┃ ┃ ┃ ┗ ⚛ Tagsinput.jsx
 ┃ ┣ 📂experience_docs
 ┃ ┃ ┣ 📜1651822618.pdf
 ┃ ┃ ┣ ...
 ┃ ┣ 📂images
 ┃ ┃ ┣ 📜caressa.png
 ┃ ┃ ┣ 📜caressalogo.png
 ┃ ┃ ┗ 📜profile-avatar.png

 📦src
 ┣ 📂auth
 ┃ ┃ ┣ ⚛ Confirm.jsx
 ┃ ┃ ┣ ⚛ Email.jsx
 ┃ ┃ ┗ ⚛ Reset.jsx
 ┃ ┣ ⚛ ConfirmPassword.jsx
 ┃ ┣ ⚛ ForgotPassword.jsx
 ┃ ┣ ⚛ Invalid.jsx
 ┃ ┣ ⚛ Login.jsx
 ┃ ┣ ⚛ Register.jsx
 ┃ ┣ ⚛ ResetPassword.jsx
 ┃ ┣ ⚛ VerifyEmail.jsx
 ┃ ┗ ⚛ Verify.jsx
 ┣ 📂calendar
 ┃ ┣ ⚛ Assessment.jsx
 ┃ ┣ ⚛ Awaits.jsx
 ┃ ┣ ⚛ Closed.jsx
 ┃ ┣ ⚛ Deceased.jsx
 ┃ ┣ ⚛ Leads.jsx
 ┃ ┣ ⚛ Managers.jsx
 ┃ ┣ ⚛ Refuse.jsx
 ┃ ┗ ⚛ Single.jsx
 ┣ 📂client
 ┃ ┣ 📂state
 ┃ ┃ ┣ 📂single
 ┃ ┃ ┃ ┣ ⚛ Edit.jsx
 ┃ ┃ ┃ ┗ ⚛ Single.jsx
 ┃ ┃ ┣ ⚛ Active.jsx
 ┃ ┃ ┣ ⚛ Assessments.jsx
 ┃ ┃ ┣ ⚛ Awaits.jsx
 ┃ ┃ ┣ ⚛ Closed.jsx
 ┃ ┃ ┣ ⚛ Deceased.jsx
 ┃ ┃ ┣ ⚛ Leads.jsx
 ┃ ┃ ┗ ⚛ Refused.jsx
 ┃ ┣ ⚛ Add.jsx
 ┃ ┣ ⚛ Edit.jsx
 ┃ ┗ ⚛ View.jsx
 ┣ 📂components
 ┃ ┣ ⚛ AuthCard.jsx
 ┃ ┣ ⚛ AuthSessionStatus.jsx
 ┃ ┣ ⚛ AuthValidationErrors.jsx
 ┃ ┣ ⚛ Button.jsx
 ┃ ┣ ⚛ DropdownLink.jsx
 ┃ ┣ ⚛ Input.jsx
 ┃ ┣ ⚛ Label.jsx
 ┃ ┣ ⚛ LoginButton.jsx
 ┃ ┣ ⚛ NavLink.jsx
 ┃ ┣ ⚛ RegisterButton.jsx
 ┃ ┗ ⚛ ResponsiveNavLink.jsx
 ┣ 📂employee
 ┃ ┣ ⚛ Add.jsx
 ┃ ┣ ⚛ Competence.jsx
 ┃ ┣ ⚛ Edit.jsx
 ┃ ┗ ⚛ View.jsx
 ┣ 📂forms
 ┃ ┗ 📂client
 ┃ ┃ ┣ 📂vitals
 ┃ ┃ ┃ ┣ ⚛ Add.jsx
 ┃ ┃ ┃ ┗ ⚛ Edit.jsx
 ┃ ┃ ┣ ⚛ Add.jsx
 ┃ ┃ ┗ ⚛ Edit.jsx
 ┣ 📂layouts
 ┃ ┣ ⚛ AdminLayout.jsx
 ┃ ┣ ⚛ AppLayout.jsx
 ┃ ┣ ⚛ GuestLayout.jsx
 ┃ ┣ ⚛ Navigation.jsx
 ┃ ┗ ⚛ TopNav.jsx
 ┣ 📜.gitignore
 ┣ 📜.npmrc
 ┣ 📜package.json
 ┣ 📜package-lock.json
 ┗ 📜vite.config.ts
📜Readme.md
 ```