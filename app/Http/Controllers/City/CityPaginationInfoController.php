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

        $cities = $user->cities();

        $wheres = [];

        $name_city = $request->name_city;

        if (isset($name_city)) $wheres[] = [ 'name', 'like', "%$name_city%" ];

        $name_neighborhood = $request->name_neighborhood;

        if (isset($name_neighborhood)) $cities->whereRelation('neighborhoods', 'name', 'like', "%$name_neighborhood%");

        $consolidation_start = $request->consolidation_start;

        if (isset($consolidation_start)) $wheres[] = [ 'consolidated_at', '>=', $consolidation_start ];

        $consolidation_end = $request->consolidation_end;

        if (isset($consolidation_end)) $wheres[] = [ 'consolidated_at', '<=', $consolidation_end ];

        if (count($wheres) > 0) $cities->where($wheres);

        $cities = $cities->count();

        return Response::json([
            'cities' => $cities,
            'pages' => ceil($cities / $request->get('page_size', 6)),
        ]);
    }
}
