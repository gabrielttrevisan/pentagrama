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
            ->with('neighborhoods');

        $wheres = [];

        $offset = (intval($request->get('page', 0)) - 1) * $pageSize;

        $name_city = $request->name_city;

        if (isset($name_city)) $wheres[] = [ 'name', 'like', "%$name_city%" ];

        $name_neighborhood = $request->name_neighborhood;

        if (isset($name_neighborhood)) $cities->whereRelation('neighborhoods', 'name', 'like', "%$name_neighborhood%");

        $consolidation_start = $request->consolidation_start;

        if (isset($consolidation_start)) $wheres[] = [ 'consolidated_at', '>=', $consolidation_start ];

        $consolidation_end = $request->consolidation_end;

        if (isset($consolidation_end)) $wheres[] = [ 'consolidated_at', '<=', $consolidation_end ];

        if (count($wheres) > 0) {
            $cities->where($wheres);
        }

        $cities = $cities->orderBy('created_at', 'desc')
            ->skip($offset)
            ->take($pageSize)
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
