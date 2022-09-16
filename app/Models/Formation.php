<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Formation extends Model
{
    use HasFactory;

    protected $fillable = [
        'uuid',
        'libelle',
        'description',
        'programme_id',
        'formateur_id',
        
    ];

    public function programme()
    {
        return $this->belongsTo(Programme::class , 'programme_id');
       
        
    }
    public function formateur()
    {
        return $this->belongsTo(Formateur::class , 'formateur_id');
       
    }
    public function seances()
    {
        return $this->hasMany(Seance::class , 'formation_id');
       
    }

    public function getRouteKeyName()
    {
        return 'uuid';
    }
}
