<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        $this->call([ProgrammeSeeder::class]);
        $this->call([FormationSeeder::class]);
        $this->call([ApprenantSeeder::class]);
        $this->call([FormateurSeeder::class]);
        $this->call([ModuleSeeder::class]);
        $this->call([SeanceSeeder::class]);
        $this->call([CoursSeeder::class]);
        
    }
}
