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
                'programme_id' => '1',
                'formation_id' => '1',
            ],
            [
                'uuid' => '2',
                'date' => '2021-09-15',
                'heure_debut' => '10:00:00',
                'heure_fin' => '12:00:00',
                'programme_id' => '2',
                'formation_id' => '1',
            ],
            [
                'uuid' => '3',
                'date' => '2021-09-15',
                'heure_debut' => '14:00:00',
                'heure_fin' => '16:00:00',
                'programme_id' => '1',
                'formation_id' => '1',
            ]
        );
        foreach ($seance as $key => $value) {
            Seance::create($value);
        }
    }
}
