# Installation

## Install Package

Download package via composer

```bash
composer require pyaesoneaung/laravel-myanmar-tools
```

## Version Compatibilities

| Laravel  | Package |
| ------------- | ------------- |
| 9.x - 10.x  | 3.x  |
| 6.x - 10.x  | 2.x  |

## Publish Validation Messages (Optional)

If you want to make changes in validation messages, you can publish them to your application.

```bash
php artisan vendor:publish --provider="PyaeSoneAung\LaravelMyanmarTools\LaravelMyanmarToolsServiceProvider"
```

Now, you can edit validation messages at `/lang/vendor/laravelMyanmarTools/en/validation.php`

## Thanks JetBrains

<img src="https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.png" width="100"></a>

JetBrains support Laravel Myanmar Tools by providing [Open Source License](https://www.jetbrains.com/community/opensource/#support).
