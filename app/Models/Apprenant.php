<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Apprenant extends Model
{
    use HasFactory;

    protected $fillable = [
        'uuid',
        'nom',
        'prenom',
        'email',
        'telephone',
        'date_naissance',
        'sexe',
        'niveau_etude',
        'numero_identite_type',
        'numero_identite',
        'date_delivrance',
        'date_expiration',
        'adresse',
        'ville',
        'programme_id',
        'password'
        
    ];

    public function programme()
    {
        return $this->belongsTo(Programme::class , 'programme_id');
    }

    public function getRouteKeyName()
    {
        return 'uuid';
    }

 

    
   

    



}
