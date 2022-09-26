<?php

namespace Database\Seeders;

use App\Models\Seance;
use Illuminate\Database\Seeder;

class SeanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $seance = Array(
            [
                'uuid' => '1',
                'date' => '2021-09-15',
                'heure_debut' => '08:00:00',
                'heure_fin' => '10:00:00',
                'lieu' => 'Lieu 1',
                'formation_id' => '1',
                'module_id' => '2',
            ],
            [
                'uuid' => '2',
                'date' => '2021-09-15',
                'heure_debut' => '10:00:00',
                'heure_fin' => '12:00:00',
                'lieu' => 'Salle 1',
                'formation_id' => '1',
                'module_id' => '1',
            ],
            [
                'uuid' => '3',
                'date' => '2021-09-15',
                'heure_debut' => '14:00:00',
                'heure_fin' => '16:00:00',
                'formation_id' => '1',
                'lieu' => 'Salle 2',
                'module_id' => '1',
            ]
        );
        foreach ($seance as $key => $value) {
            Seance::create($value);
        }
    }
}
