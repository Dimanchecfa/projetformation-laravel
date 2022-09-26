<?php

namespace Database\Seeders;

use App\Models\Cours;
use Illuminate\Database\Seeder;

class CoursSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $seeder = array(
            [
                'uuid' => '1',
                'programme_id' => '1',
                'formation_id' => '1',
                'module_id' => '1',
                'titre' => 'Cours 1',
                

            ],
            [
                'uuid' => '2',
                'programme_id' => '1',
                'formation_id' => '1',
                'module_id' => '1',
                'titre' => 'Cours 2',
                
            ]
            );
            foreach ($seeder as $seed) {
                Cours::create($seed);
            }
    }
}
