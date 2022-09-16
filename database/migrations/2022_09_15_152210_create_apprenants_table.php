<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApprenantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('apprenants', function (Blueprint $table) {
            $table->id();
            $table->string('uuid')->unique();
            $table->string('nom');
            $table->string('prenom');
            $table->string('email')->unique();
            $table->string('telephone')->unique();
            $table->string('date_naissance');
            $table->enum('sexe', ['Masculin', 'Feminin']);
            $table->enum('niveau_etude', ['BEPC', 'BAC', 'BAC+2', 'BAC+3', 'BAC+4', 'BAC+5']);
            $table->enum('numero_identite_type', ['CNI', 'Passeport', 'Permis de conduire']);
            $table->string('numero_identite');
            $table->string('date_delivrance');
            $table->string('date_expiration');
            $table->string('adresse');
            $table->string('ville');
            $table->unsignedInteger('programme_id');
            $table->string('password');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('apprenants');
    }
}
