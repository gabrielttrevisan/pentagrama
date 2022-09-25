<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasTimestamps;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Neighborhood extends Model
{
    use HasFactory, HasTimestamps;

    protected $fillable = [
        'name'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(City::class);
    }
}
