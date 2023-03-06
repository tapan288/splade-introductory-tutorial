<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Role extends Model
{
    use HasFactory;

    const ROLES = [
        'Admin' => 'Admin',
        'User' => 'User',
    ];

    protected $fillable = [
        'title',
    ];

    public function permissions()
    {
        return $this->belongsToMany(Permission::class);
    }
}
