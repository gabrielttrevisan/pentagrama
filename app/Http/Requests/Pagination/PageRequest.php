<?php

namespace App\Http\Requests\Pagination;

use Illuminate\Foundation\Http\FormRequest;

class PageRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'page' => [ 'numeric', 'nullable' ],
            'page_size' => [ 'numeric', 'nullable' ],
        ];
    }

    public function messages()
    {
        return [
            'page.numeric' => 'O campo página deve ser do tipo número',
            'page_size.numeric' => 'O campo tamanho da página deve ser do tipo número',
        ];
    }
}
