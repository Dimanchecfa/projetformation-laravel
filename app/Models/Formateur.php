<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Formateur extends Model
{
    use HasFactory;

    protected $fillable = [
        'uuid',
        'nom',
        'prenom',
        'email',
        'telephone',
        'adresse',
        'ville',
        'discipline',
        

    ];


    public function formations()
    {
        return $this->hasMany(Formation::class , 'formateur_id');

    }

    public function programme()
    {
        return $this->belongsToMany(Programme::class);
    }

    public function getRouteKeyName()
    {
        return 'uuid';
    }

}
