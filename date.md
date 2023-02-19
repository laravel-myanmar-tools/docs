# Date

## Carbon

### Check Independence Day

```php
use Illuminate\Support\Carbon;

Carbon::parse('2023-01-04')->isIndependenceDay();

// true
```

### Check Union Day

```php
use Illuminate\Support\Carbon;

Carbon::parse('2023-02-12')->isUnionDay();

// true
```

### Check Peasants Day

```php
use Illuminate\Support\Carbon;

Carbon::parse('2023-03-02')->isPeasantsDay();

// true
```

### Check Labour Day

```php
use Illuminate\Support\Carbon;

Carbon::parse('2023-05-01')->isLabourDay();

// true
```

### Check Martyr's Day

```php
use Illuminate\Support\Carbon;

Carbon::parse('2023-07-19')->isMartyrsDay()

// true
```