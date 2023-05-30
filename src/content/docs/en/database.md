---
title: 'Database'
---


## Relationship Graph

### Diagram File
[MySQL EER Diagram File](../../../../db_mysql_relations_careman.mwb)

### EER Diagram Image
![MarineGEO circle logo](../../../../db_relations.svg "MarineGEO logo")

<a href="../../../../db_relations.svg" target="_blank">View Image</a>

## Seed   
This could have been improved as the entire database should have been `seed-ready`

```shell

php artisan db:seed

```

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MessageTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('message_types')->insert([
            ["type" => "Shift Begins", "message" => "Shift Starts tomorrow"],
            ["type" => "Shift Ends", "message" => "Shift Ends tomorrow"],
            ["type" => "Shift Nurse Change", "message" => "Shift change Nurse"],
        ]);
    }
}

```