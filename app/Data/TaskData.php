<?php

namespace App\Data;

use Carbon\Doctrine\DateTimeType;
use Spatie\LaravelData\Data;

class TaskData extends Data
{
    public function __construct(
        public string $title,
        public string $description,
        public DateTimeType $due_date,
        public string $status,
        public int $assigned_to,
        public int $related_to
    ) {}
}
