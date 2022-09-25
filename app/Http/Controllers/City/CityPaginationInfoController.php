<?php

namespace App\Http\Controllers\City;

use App\Http\Controllers\Controller;
use App\Http\Requests\Pagination\PageRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Response;

class CityPaginationInfoController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function __invoke(PageRequest $request): JsonResponse
    {
        /** @var \App\Models\User $user */
        $user = $request->user();

        if (is_null($user))
        {
            return Response::json([
                'error' => 'Não autorizado',
            ], 401);
        }

        $cities = $user->cities()->count();

        return Response::json([
            'cities' => $cities,
            'pages' => ceil($cities / $request->get('page_size', 6)),
        ]);
    }
}
