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
        'formation_id',
        'programme_id'
        
    ];

  

    public function formation()
    {
        return $this->belongsTo(Formation::class , 'formation_id');
        // un module appartient a une formation
        
    }
    public function getRouteKeyName()
    {
        return 'uuid';
    }
}
