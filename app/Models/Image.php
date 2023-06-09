<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $fillable = [
        
        'id_article',
        'images'
    ];
    public function Article(){
        return $this->belongsTo(Article::class);

    }

}
