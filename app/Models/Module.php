<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    use HasFactory;

    protected $fillable = [
        'uuid',
        'titre',
        'description',
        'file',
        'programme_id',
        'formation_id',


    ];



    public function formation()
    {
        return $this->belongsTo(Formation::class , 'formation_id');


    }

    public function programme()
    {
        return $this->belongsTo(Programme::class , 'programme_id');
    }

    public function cours()
    {
        return $this->hasMany(Cours::class , 'module_id');


    }



    public function getRouteKeyName()
    {
        return 'uuid';
    }
}
