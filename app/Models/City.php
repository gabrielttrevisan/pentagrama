<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasTimestamps;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class City extends Model
{
    use HasFactory, HasTimestamps;

    protected $fillable = [
        'consolidated_at',
        'name',
        'state',
        'user_id',
    ];

    protected $dates = [
        'consolidated_at',
        'created_at',
        'updated_at',
    ];

    public function neighborhoods(): HasMany
    {
        return $this->hasMany(Neighborhood::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
