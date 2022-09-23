<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Programme;

class ProgrammeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $programme = Array(
            [
                'uuid' => '1',
                'libelle' => 'Cosmetiques' ,
                'image' => 'images/programmes/programme1.jpg',
                'description' => 'Formation en cosmetiques' ,
                'nombre_apprenant' => '15',

                
                
                
            ],
            [
                'uuid' => '2',
                'libelle' => 'patisserie' ,
                'description' => 'Formation en Patisserie' ,
                'image' => 'images/programmes/programme2.jpg',
                'nombre_apprenant' => '15'

                
            ]
            );
            foreach($programme as $key => $value){
                Programme::create($value);
            }
    }
}
