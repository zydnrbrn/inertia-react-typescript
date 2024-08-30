<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class LeadData extends Data
{
    public function __construct(
        public int $contact_id,
        public string $status,
        public int $score,
        public string $source,
        public ?string $description
    ) {}
}
