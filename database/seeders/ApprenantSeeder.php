<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Apprenant;

class ApprenantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $apprenant = Array(
            [
                'uuid' => '1' ,
                'nom' => 'Diallo' ,
                'prenom' => 'Mamadou' ,
                'email' => 'mamadou@gmail.com' ,
                'telephone' => '774567890' ,
                'adresse' => 'Dakar' ,
                'ville' => 'Dakar' ,
                'date_naissance' => '1999-12-12' ,
                'sexe' => 'Masculin' ,
                'niveau_etude' => 'BAC' ,
                'numero_identite_type' => 'CNI' ,
                'numero_identite' => '123456789' ,
                'date_delivrance' => '2019-12-12' ,
                'date_expiration' => '2029-12-12' ,
                'programme_id' => '1',
                'password' => '123456789' ,
            ],
            [
                'uuid' => '2' ,
                'nom' => 'Sow' ,
                'prenom' => 'Fatou' ,
                'email' => 'fatou@gmail.com' ,
                'telephone' => '774d567890' ,
                'adresse' => 'Dakar' ,
                'ville' => 'Dakar' ,
                'date_naissance' => '1999-12-12' ,
                'sexe' => 'Feminin' ,
                'niveau_etude' => 'BAC' ,
                'numero_identite_type' => 'CNI' ,
                'numero_identite' => '123456789' ,
                'date_delivrance' => '2019-12-12' ,
                'date_expiration' => '2029-12-12' ,
                'programme_id' => '2',
                'password' => '123456789' ,
            ]
        );
        foreach ($apprenant as $key => $value) {
            Apprenant::create($value);
        }

    }
}
