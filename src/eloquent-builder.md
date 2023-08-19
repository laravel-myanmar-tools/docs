# Illuminate\Database\Eloquent\Builder

## Myanmar Phone Number

### Where Myanmar Phone Number

```php
use App\Models\Customer;

Customer::whereMyanmarPhoneNumber('phone')->first();

// => App\Models\Customer {#4672
//      id: 1,
//      phone: "09250000000",
//      created_at: "2022-10-30 17:24:29",
//      updated_at: "2022-10-30 17:24:29",
//    }
```

### Where MPT

```php
use App\Models\Customer;

Customer::whereMpt('phone')->first();

// => App\Models\Customer {#4739
//      id: 1,
//      phone: "09250000000",
//      created_at: "2022-10-30 17:24:29",
//      updated_at: "2022-10-30 17:24:29",
//    }
```

### Where Ooredoo

```php
use App\Models\Customer;

Customer::whereOoredoo('phone')->first();

// => App\Models\Customer {#4885
//      id: 2,
//      phone: "09970000000",
//      created_at: "2022-10-30 17:24:29",
//      updated_at: "2022-10-30 17:24:29",
//    }
```

### Where Telenor

```php
use App\Models\Customer;

Customer::whereTelenor('phone')->first();

// => App\Models\Customer {#3937
//      id: 3,
//      phone: "09790000000",
//      created_at: "2022-10-30 17:24:29",
//      updated_at: "2022-10-30 17:24:29",
//    }
```

### Where MEC

```php
use App\Models\Customer;

Customer::whereMec('phone')->first();

// => App\Models\Customer {#3938
//      id: 4,
//      phone: "0930000000",
//      created_at: "2022-10-30 17:24:29",
//      updated_at: "2022-10-30 17:24:29",
//    }
```

### Where Mytel

```php
use App\Models\Customer;

Customer::whereMytel('phone')->first();

// => App\Models\Customer {#4672
//      id: 5,
//      phone: "09690000000",
//      created_at: "2022-10-30 17:24:29",
//      updated_at: "2022-10-30 17:24:29",
//    }
```
