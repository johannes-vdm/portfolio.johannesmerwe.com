---
title: "Careman Management System"
description: "Lorem ipsum dolor sit amet - 4"
---

For any additional details, feel free to contact:
johannesmerwede@gmail.com

## Contributors
* [Johannes van der Merwe](https://github.com/johannes-vdm)
* [Mighty Vukeya](https://github.com/mightyman)

### Design 
ThinkTank

## Branches
- Live Branch: `live`
- Dev Branch: `develop`

## VSCode Plugins
- [Comment Anchors](https://marketplace.visualstudio.com/items?itemName=ExodiusStudios.comment-anchors)
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
- [Markdown PDF - Converting from Markdown](https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf)
## Startup

### API
1. ```git clone -b <branchname> https://github.com/johannes-vdm/Caressa```
2. Clone most recent DB From https://careman.caressa.co.za Available through Gerrie Scheepers AWS RDS to Local Server
3. ```cd caressa/backend```
4. Set up .env file
5. ```composer install```/```composer upgrade```
6. ```php artisan serve```
7. Default endpoint `localhost:8000/api`
### ReactJS
1. Navigate to root directory
2. ```npm install```
3. ```Enter your local API url provided by Backend in your .env file```
4. ```npm run dev```

## DB Backups
| DBMS Version            | SYS Version | File                    | Branch       |
| ----------------------- | ----------- | ----------------------- | ------------ |
| MySQL version 4.9.5deb2 | 7.3.9       | 2022_02_03.sql          | live         |
| MySQL version 4.9.5deb2 | 7.3.9       | 2022_02_18.sql          | live         |
| MySQL version 4.9.5deb2 | 7.3.9       | 2022_02_23.sql          | live         |
| MySQL version 4.9.5deb2 | 7.3.9       | 2022_03_16.sql          | live         |
| MySQL version 4.9.5deb2 | 7.3.9       | 2022_03_29.sql          | live         |
| MySQL version 4.9.5deb2 | 7.3.9       | 2022_04_08.sql          | live         |
| MySQL version 4.9.5deb2 | 7.3.9       | 2022_04_21.sql          | live         |
| MySQL version 4.9.5deb2 | 7.3.9       | 2022_05_19.sql          | live         |
| MySQL version 4.9.5deb2 | 7.3.9       | 2022_05_24.sql          | live         |
| MySQL version 4.9.5deb2 | 7.4.3       | dev_site_2022_06_02.sql | working_site |
| MySQL version 4.9.5deb2 | 7.4.3       | 2022_07_22.sql          | live         |
| MySQL version 4.9.5deb2 | 7.4.3       | 2022_07_29.sql          | live         |

### Send Messages to ended shifts
`command:shiftend`

### Send out messages to shift that will start tomorrow.
`command:shiftstart`

### Sends out messages to shifts where nurses are changing.
`command:shiftchange`

# Routes
```php artisan route:list```

# List details

## Client Active IDS
- 1 - Leads
- 2 - Assessments
- 3 - Active (Displayed on Dashboard)
- 4 - Refuse Service
- 5 - Deceased
- 6 - Closed
- 7 - Awaiting Service
- 8 - Single Procedure

## User Permission IDS
- [NOT SET] - Not Assigned
- 0 - Inactive
- 1 - Operational Manager
- 2 - Nursing Manager
- 3 - Super Admin
- 4 - HR Admin
- 5 - Admin Manager
- 6 - Case Manager

# Messages
MIGHTY CHANGES
- sms class directory app/lib/SMSApi.php

## to get default sms in the database run the following command
```$php artisan db:seed```

# Dependencies
```
9.5.14 The PHP Unit Testing framework.
├──doctrine/instantiator ^1.3.1
│  └──php ^7.1 || ^8.0
├──ext-dom *
├──ext-json *
├──ext-libxml *
├──ext-mbstring *
│  └──php >=7.1
├──ext-xml *
├──ext-xmlwriter *
├──myclabs/deep-copy ^1.10.1
│  └──php ^7.1 || ^8.0
├──phar-io/manifest ^2.0.3
│  ├──ext-dom *
│  ├──ext-phar *
│  ├──ext-xmlwriter *
│  ├──phar-io/version ^3.0.1
│  │  └──php ^7.2 || ^8.0
│  └──php ^7.2 || ^8.0
├──phar-io/version ^3.0.2
│  └──php ^7.2 || ^8.0
├──php >=7.3
├──phpspec/prophecy ^1.12.1
│  ├──doctrine/instantiator ^1.2
│  │  └──php ^7.1 || ^8.0
│  ├──php ^7.2 || ~8.0, <8.2
│  ├──phpdocumentor/reflection-docblock ^5.2
│  │  ├──ext-filter *
│  │  ├──php ^7.2 || ^8.0
│  │  ├──phpdocumentor/reflection-common ^2.2
│  │  │  └──php ^7.2 || ^8.0
│  │  ├──phpdocumentor/type-resolver ^1.3
│  │  │  ├──php ^7.2 || ^8.0
│  │  │  └──phpdocumentor/reflection-common ^2.0
│  │  │     └──php ^7.2 || ^8.0
│  │  └──webmozart/assert ^1.9.1
│  │     ├──php ^7.2 || ^8.0
│  │     └──symfony/polyfill-ctype ^1.8
│  │        └──php >=7.1
│  ├──sebastian/comparator ^3.0 || ^4.0
│  │  ├──php >=7.3
│  │  ├──sebastian/diff ^4.0
│  │  │  └──php >=7.3
│  │  └──sebastian/exporter ^4.0
│  │     ├──php >=7.3
│  │     └──sebastian/recursion-context ^4.0
│  │        └──php >=7.3
│  └──sebastian/recursion-context ^3.0 || ^4.0
│     └──php >=7.3
├──phpunit/php-code-coverage ^9.2.7
│  ├──ext-dom *
│  ├──ext-libxml *
│  ├──ext-xmlwriter *
│  ├──nikic/php-parser ^4.13.0
│  │  ├──ext-tokenizer *
│  │  └──php >=7.0
│  ├──php >=7.3
│  ├──phpunit/php-file-iterator ^3.0.3
│  │  └──php >=7.3
│  ├──phpunit/php-text-template ^2.0.2
│  │  └──php >=7.3
│  ├──sebastian/code-unit-reverse-lookup ^2.0.2
│  │  └──php >=7.3
│  ├──sebastian/complexity ^2.0
│  │  ├──nikic/php-parser ^4.7
│  │  │  ├──ext-tokenizer *
│  │  │  └──php >=7.0
│  │  └──php >=7.3
│  ├──sebastian/environment ^5.1.2
│  │  └──php >=7.3
│  ├──sebastian/lines-of-code ^1.0.3
│  │  ├──nikic/php-parser ^4.6
│  │  │  ├──ext-tokenizer *
│  │  │  └──php >=7.0
│  │  └──php >=7.3
│  ├──sebastian/version ^3.0.1
│  │  └──php >=7.3
│  └──theseer/tokenizer ^1.2.0
│     ├──ext-dom *
│     ├──ext-tokenizer *
│     ├──ext-xmlwriter *
│     └──php ^7.2 || ^8.0
├──phpunit/php-file-iterator ^3.0.5
│  └──php >=7.3
├──phpunit/php-invoker ^3.1.1
│  └──php >=7.3
├──phpunit/php-text-template ^2.0.3
│  └──php >=7.3
├──phpunit/php-timer ^5.0.2
│  └──php >=7.3
├──sebastian/cli-parser ^1.0.1
│  └──php >=7.3
├──sebastian/code-unit ^1.0.6
│  └──php >=7.3
├──sebastian/comparator ^4.0.5
│  ├──php >=7.3
│  ├──sebastian/diff ^4.0
│  │  └──php >=7.3
│  └──sebastian/exporter ^4.0
│     ├──php >=7.3
│     └──sebastian/recursion-context ^4.0
│        └──php >=7.3
├──sebastian/diff ^4.0.3
│  └──php >=7.3
├──sebastian/environment ^5.1.3
│  └──php >=7.3
├──sebastian/exporter ^4.0.3
│  ├──php >=7.3
│  └──sebastian/recursion-context ^4.0
│     └──php >=7.3
├──sebastian/global-state ^5.0.1
│  ├──php >=7.3
│  ├──sebastian/object-reflector ^2.0
│  │  └──php >=7.3
│  └──sebastian/recursion-context ^4.0
│     └──php >=7.3
├──sebastian/object-enumerator ^4.0.3
│  ├──php >=7.3
│  ├──sebastian/object-reflector ^2.0
│  │  └──php >=7.3
│  └──sebastian/recursion-context ^4.0
│     └──php >=7.3
├──sebastian/resource-operations ^3.0.3
│  └──php >=7.3
├──sebastian/type ^2.3.4
│  └──php >=7.3
└──sebastian/version ^3.0.2
   └──php >=7.3";
```
