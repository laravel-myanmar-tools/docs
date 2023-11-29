# Installation

## Via Composer

Download package via composer

```bash
composer require pyaesoneaung/laravel-myanmar-tools
```

## Publish Validation Messages (Optional)

If you want to make changes in validation messages, you can publish them to your application.

```bash
php artisan vendor:publish --provider="PyaeSoneAung\LaravelMyanmarTools\LaravelMyanmarToolsServiceProvider"
```

Now, you can edit validation messages at **/lang/vendor/laravelMyanmarTools/en/validation.php**


## Version Compatibilities

| Laravel  | Package |
| ------------- | ------------- |
| 9.x - 11.x  | 3.x  |
| 6.x - 10.x  | 2.x  |
