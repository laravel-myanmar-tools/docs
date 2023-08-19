# Create Custom Macro

To get started, you may define the macro within the **boot** method of your application's **App\Providers\AppServiceProvider** class.

## isMptOrTelenor

```php
use Illuminate\Support\Str;

public function boot()
{
    Str::macro('isMptOrTelenor', function ($phone) {
        return Str::isMpt($phone) || Str::isTelenor($phone);
    });
}
```

## isAtom

```php
use Illuminate\Support\Str;

public function boot()
{
    Str::macro('isAtom', function ($phone) {
        return Str::isTelenor($phone);
    });
}
```
