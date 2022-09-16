<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Formation;

class FormationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $formation = Array(
            [
                'uuid' => '1',
                'libelle' => 'Cosmetiques' ,
                'description' => 'Formation en cosmetiques' ,
                'programme_id' => '1',
                'formateur_id' => '1',
                
                
            ],
            [
                'uuid' => '2',
                'libelle' => 'patisserie' ,
                'description' => 'Formation en Patisserie' ,
                'programme_id' => '2',
                'formateur_id' => '2',
                
                
            ],
            [
                'uuid' => '3',
                'libelle' => 'Design' ,
                'description' => 'Formation en Design' ,
                'programme_id' => '2',
                'formateur_id' => '2',
                
                
            ],
            [
                'uuid' => '4',
                'libelle' => 'commerce' ,
                'description' => 'Formation en commerce' ,
                'programme_id' => '2',
                'formateur_id' => '2',
                
                
            ]
            );
            foreach($formation as $key => $value){
                Formation::create($value);
            }
    }
}
