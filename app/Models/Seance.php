<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seance extends Model
{
    use HasFactory;

    protected $fillable = [
        'uuid',
        'date',
        'heure_debut',
        'heure_fin',
        'formation_id',
        
    ];

    public function formation()
    {
        return $this->belongsTo(Formation::class , 'formation_id');
        
    }
    public function getRouteKeyName()
    {
        return 'uuid';
    }
}
