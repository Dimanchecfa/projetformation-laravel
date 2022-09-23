<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Programme extends Model
{
    use HasFactory;

    protected $fillable = [
        'uuid',
        'libelle',
        'description',
        'image',
        'promotion',
        
    ];

    public function formations()
    {
        return $this->hasMany(Formation::class , 'programme_id');
      
    }
    public function getRouteKeyName() {
        return 'uuid';
    }
  
}
