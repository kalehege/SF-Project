<?php

namespace App\Http\Requests;

use App\Traits\LockedDemoUser;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserUpdateRequest extends FormRequest
{
    use LockedDemoUser;

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'first_name' => ['required', 'max:50'],
            'last_name' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'email'],
            'password' => ['nullable'],
            'owner' => ['required', 'boolean'],
            'type' => ['required'],
            'photo' => ['nullable', 'image'],
        ];
    }
}
