<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Formateur;

class FormateurSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $formateur = Array(
            [
                'uuid' => '1' ,
                'nom' => 'Moussa' ,
                'prenom' => 'Moussa' ,
                'email' => 'moussa@gmail.com' ,
                'telephone' => '778888888' ,
                'adresse' => 'Dakar' ,
                'ville' => 'Dakar' ,
               
               
                
            ],
            [
                'uuid' => '2' ,
                'nom' => 'Sow' ,
                'prenom' => 'Fatou' ,
                'email' => 'fatou@mail.com' ,
                'telephone' => '774567890' ,
                'adresse' => 'Dakar' ,
                'ville' => 'Dakar' ,
              
                
            ]
        );
        foreach ($formateur as $key => $value) {
            Formateur::create($value);
        }

    }
}
