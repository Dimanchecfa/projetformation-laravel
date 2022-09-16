<?php

namespace Database\Seeders;

use App\Models\Module;
use Illuminate\Database\Seeder;

class ModuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $module = Array(
            [
                'uuid' => '1',
                'titre' => 'Module 1',
                'description' => 'Module 1',
                'file' => 'Module 1',
                'programme_id' => '1',
                'formation_id' => '1',
            ],
            [
                'uuid' => '2',
                'titre' => 'Module 2',
                'description' => 'Module 2',
                'file' => 'Module 2',
                'programme_id' => '2',
                'formation_id' => '1',
            ],
            [
                'uuid' => '3',
                'titre' => 'Module 3',
                'description' => 'Module 3',
                'file' => 'Module 3',
                'programme_id' => '2',
                'formation_id' => '1',
            ],
           
            [
                'uuid' => '5',
                'titre' => 'Module 5',
                'description' => 'Module 5',
                'file' => 'Module 5',
                'programme_id' => '2',
                'formation_id' => '2',
            ],
            [
                'uuid' => '6',
                'titre' => 'Module 6',
                'description' => 'Module 6',
                'file' => 'Module 6',
                'programme_id' => '2',
                'formation_id' => '2',
            ],
            [
                'uuid' => '7',
                'titre' => 'Module 7',
                'description' => 'Module 7',
                'file' => 'Module 7',
                'programme_id' => '1',
                'formation_id' => '2',
            ],
          
        );
        foreach ($module as $key => $value) {
            Module::create($value);
        }
    }
}
