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
        'lieu',
        'programme_id',
        'formation_id',
        'module_id',

    ];

    public function formation()
    {
        return $this->belongsTo(Formation::class , 'formation_id');

    }
    public function programme()
    {
        return $this->belongsTo(Programme::class , 'programme_id');
    }
    public function module()
    {
        return $this->belongsTo(Module::class , 'module_id');
    }







    public function getRouteKeyName()
    {
        return 'uuid';
    }
}
