<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cours extends Model
{
    use HasFactory;

    protected $fillable = [
        'uuid',
        'programme_id',
        'formation_id',
        'module_id',
        'titre',
        'is_validated',
    ];


    public function programme()
    {
        return $this->belongsTo(Programme::class);
    }
    public function formation()
    {
        return $this->belongsTo(Formation::class);
    }
    public function module()
    {
        return $this->belongsTo(Module::class);
    }

    public function getRouteKeyName() {
        return 'uuid' ;
    }
}
