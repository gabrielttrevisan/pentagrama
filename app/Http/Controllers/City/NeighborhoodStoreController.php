<?php

namespace App\Http\Controllers\City;

use App\Http\Controllers\Controller;
use App\Http\Requests\City\NeighborhoodStoreRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class NeighborhoodStoreController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function __invoke(NeighborhoodStoreRequest $request): JsonResponse
    {
        /** @var \App\Models\User $user */
        $user = $request->user();

        if (is_null($user))
        {
            return Response::json([
                'error' => 'Não autorizado',
            ], 401);
        }

        $city = $user->cities()->findOrFail($request->id);

        $city->neighborhoods()->create($request->validated());

        return Response::json([], 204);
    }
}
