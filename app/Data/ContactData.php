<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class ContactData extends Data
{
    public function __construct(
        public string $first_name,
        public string $last_name,
        public string $email,
        public ?string $phone,
        public string $company,
        public ?string $notes
    ) {}
}
