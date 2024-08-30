<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class DealData extends Data
{
    public function __construct(
        public int $lead_id,
        public int $name,
        public string $amount,
        public string $stage,
        public string $expected_close_date,
        public ?string $notes
    ) {}
}
