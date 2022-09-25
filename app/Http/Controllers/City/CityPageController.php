<?php

namespace App\Http\Controllers\City;

use App\Http\Controllers\Controller;
use App\Http\Requests\Pagination\PageRequest;
use App\Models\City;
use App\Models\Neighborhood;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Response;

class CityPageController extends Controller
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

        $pageSize = intval($request->get('page_size', 6));

        $cities = $user->cities()
            ->with('neighborhoods')
            ->orderBy('created_at', 'desc')
            ->offset((intval($request->get('page', 0)) - 1) * $pageSize)
            ->limit($pageSize)
            ->get()
            ->map(fn (City $city) => ([
                'id' => $city->id,
                'name' => $city->name,
                'state' => $city->state,
                'consolidatedAt' => $city->consolidated_at,
                'createdAt' => $city->created_at,
                'updatedAt' => $city->updated_at,
                'neighborhoods' => $city->neighborhoods()
                    ->get()
                    ->map(fn (Neighborhood $neighborhood) => ([
                        'id' => $neighborhood->id,
                        'name' => $neighborhood->name,
                        'createdAt' => $neighborhood->created_at,
                        'updatedAt' => $neighborhood->updated_at,
                    ]))
            ]));

        return Response::json([
            'cities' => $cities,
        ]);
    }
}
