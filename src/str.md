# Illuminate\Support\Str

## Myanmar Font

### Check Unicode Font

```php
use Illuminate\Support\Str;

Str::isUnicodeFont('မြန်မာပြည်');

// true
```

### Check Zawgyi Font

```php
use Illuminate\Support\Str;

Str::isZawgyiFont('ျမန္မာျပည္');

// true
```

### Detect Myanmar Font

```php
use Illuminate\Support\Str;

Str::detectMyanmarFont('မြန်မာပြည်');

// unicode
```

```php
use Illuminate\Support\Str;

Str::detectMyanmarFont('ျမန္မာျပည္');

// zawgyi
```

### Zawgyi To Unicode

```php
use Illuminate\Support\Str;

Str::zgToUni('ျမန္မာျပည္');

// မြန်မာပြည်
```

### Unicode To Zawgyi

```php
use Illuminate\Support\Str;

Str::uniToZg('မြန်မာပြည်');

// ျမန္မာျပည္
```

## Myanmar Phone Number

### Check Myanmar Phone Number

```php
use Illuminate\Support\Str;

Str::isMyanmarPhoneNumber('09250000000');

// true
```

### Check MPT

```php
use Illuminate\Support\Str;

Str::isMpt('09250000000');

// true
```

### Check Ooredoo

```php
use Illuminate\Support\Str;

Str::isOoredoo('09970000000');

// true
```

### Check Telenor

```php
use Illuminate\Support\Str;

Str::isTelenor('09790000000');

// true
```

### Check MEC

```php
use Illuminate\Support\Str;

Str::isMec('0930000000');

// true
```

### Check Mytel

```php
use Illuminate\Support\Str;

Str::isMytel('09690000000');

// true
```

### Get Telecom Name

```php
use Illuminate\Support\Str;

Str::telecomName('09250000000');

// mpt
```

```php
use Illuminate\Support\Str;

Str::telecomName('09970000000');

// ooredoo
```

```php
use Illuminate\Support\Str;

Str::telecomName('09790000000');

// telenor
```

```php
use Illuminate\Support\Str;

Str::telecomName('0930000000');

// mec
```

```php
use Illuminate\Support\Str;

Str::telecomName('09690000000');

// mytel
```

### Get Telecom Network Type

```php
use Illuminate\Support\Str;

Str::telecomNetworkType('09250000000');

// gsm
```

```php
use Illuminate\Support\Str;

Str::telecomNetworkType('09440000000');

// wcdma
```

### Normalize Myanmar Phone Number

```php
use Illuminate\Support\Str;

Str::normalizeMyanmarPhoneNumber('09250000000');

// 09250000000
```

```php
use Illuminate\Support\Str;

Str::normalizeMyanmarPhoneNumber('(၀၉)၂၅၀၀၀၀၀၀၀');

// 09250000000
```

```php
use Illuminate\Support\Str;

Str::normalizeMyanmarPhoneNumber('၀၉-၂၅၀၀၀၀၀၀၀');

// 09250000000
```

```php
use Illuminate\Support\Str;

Str::normalizeMyanmarPhoneNumber('+၉၅၉၂၅၀၀၀၀၀၀၀');

// 09250000000
```

```php
use Illuminate\Support\Str;

Str::normalizeMyanmarPhoneNumber('09-၂၅ဝရဝရဝရဝ');

// 09250707070 (ဝလုံး နဲ့ ရကောက် ပါလျှင် 0 နဲ့ 7 လို့ပြောင်းလဲပါသည်)
```

### Extract Myanmar Phone Number

```php
use Illuminate\Support\Str;

Str::extractMyanmarPhoneNumber('မောင်မောင်ရဲ့ ဖုန်းနံပါတ်များမှာ ၀၉၂၅၀၀၀၀၀၀၀ နှင့် ၀၉၉၇၀၀၀၀၀၀၀ တို့ဖြစ်ပါသည်။');

// ["09250000000", "09970000000"]
```

### Extract MPT

```php
use Illuminate\Support\Str;

Str::extractMpt('မောင်မောင်ရဲ့ ဖုန်းနံပါတ်မှာ 09250000000 ဖြစ်ပါသည်။');

// ["09250000000"]
```

### Extract Ooredoo

```php
use Illuminate\Support\Str;

Str::extractOoredoo('မောင်မောင်ရဲ့ ဖုန်းနံပါတ်မှာ 09970000000 ဖြစ်ပါသည်။');

// ["09970000000"]
```

### Extract Telenor

```php
use Illuminate\Support\Str;

Str::extractTelenor('မောင်မောင်ရဲ့ ဖုန်းနံပါတ်မှာ 09790000000 ဖြစ်ပါသည်။');

// ["09790000000"]
```

### Extract MEC

```php
use Illuminate\Support\Str;

Str::extractMec('မောင်မောင်ရဲ့ ဖုန်းနံပါတ်မှာ 0930000000 ဖြစ်ပါသည်။');

// ["0930000000"]
```

### Extract Mytel

```php
use Illuminate\Support\Str;

Str::extractMytel('မောင်မောင်ရဲ့ ဖုန်းနံပါတ်မှာ 09690000000 ဖြစ်ပါသည်။');

// ["09690000000"]
```

## NRC

### Check NRC

```php
use Illuminate\Support\Str;

Str::isNrc('12/OUKAMA(N)123456');

// true
```

```php
use Illuminate\Support\Str;

Str::isNrc('12/OuKaMa(Naing)123456');

// true
```

```php
use Illuminate\Support\Str;

Str::isNrc('၁၂/ဥကမ(နိုင်)၁၂၃၄၅၆');

// true
```

### Normalize NRC

```php
use Illuminate\Support\Str;

Str::normalizeNrc('12/OUKAMA(N)123456');
// 12/OUKAMA(N)123456

Str::normalizeNrc('12/OUKAMA(N)123456', 'mm');
// ၁၂/ဥကမ(နိုင်)၁၂၃၄၅၆
```

```php
use Illuminate\Support\Str;

Str::normalizeNrc('12/OuKaMa(Naing)123456');
// 12/OUKAMA(N)123456

Str::normalizeNrc('12/OuKaMa(Naing)123456', 'mm');
// ၁၂/ဥကမ(နိုင်)၁၂၃၄၅၆
```

```php
use Illuminate\Support\Str;

Str::normalizeNrc('၁၂/ဥကမ(နိုင်)၁၂၃၄၅၆');
// 12/OUKAMA(N)123456

Str::normalizeNrc('၁၂/ဥကမ(နိုင်)၁၂၃၄၅၆', 'mm');
// ၁၂/ဥကမ(နိုင်)၁၂၃၄၅၆
```