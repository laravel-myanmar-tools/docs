# Illuminate\Http\Request

## Myanmar Font

### Check Unicode Font

```php
// https://{domain}.com/{path}?name=မြန်မာပြည်

$request->isUnicodeFont('name');

// true
```

### Check Zawgyi Font

```php
// https://{domain}.com/{path}?name=ျမန္မာျပည္

$request->isZawgyiFont('name');

// true
```

### Detect Myanmar Font

```php
// https://{domain}.com/{path}?name=မြန်မာပြည်

$request->detectMyanmarFont('name');

// unicode
```

```php
// https://{domain}.com/{path}?name=ျမန္မာျပည္

$request->detectMyanmarFont('name');

// zawgyi
```

### Zawgyi To Unicode

```php
// https://{domain}.com/{path}?name=ျမန္မာျပည္

$request->zgToUni('name');

// မြန်မာပြည်
```

### Unicode To Zawgyi

```php
// https://{domain}.com/{path}?name=မြန်မာပြည်

$request->uniToZg('name');

// ျမန္မာျပည္
```

## Myanmar Phone Number

### Check Myanmar Phone Number

```php
// https://{domain}.com/{path}?phone=09250000000

$request->isMyanmarPhoneNumber('phone');

// true
```

### Check MPT

```php
// https://{domain}.com/{path}?phone=09250000000

$request->isMpt('phone');

// true
```

### Check Ooredoo

```php
// https://{domain}.com/{path}?phone=09970000000

$request->isOoredoo('phone');

// true
```

### Check Telenor

```php
// https://{domain}.com/{path}?phone=09790000000

$request->isTelenor('phone');

// true
```

### Check MEC

```php
// https://{domain}.com/{path}?phone=0930000000

$request->isMec('phone');

// true
```

### Check Mytel

```php
// https://{domain}.com/{path}?phone=09690000000

$request->isMytel('phone');

// true
```

### Get Telecom Name

```php
// https://{domain}.com/{path}?phone=09250000000

$request->telecomName('phone');

// mpt
```

```php
// https://{domain}.com/{path}?phone=09970000000

$request->telecomName('phone');

// ooredoo
```

```php
// https://{domain}.com/{path}?phone=09790000000

$request->telecomName('phone');

// telenor
```

```php
// https://{domain}.com/{path}?phone=0930000000

$request->telecomName('phone');

// mec
```

```php
// https://{domain}.com/{path}?phone=09690000000

$request->telecomName('phone');

// mytel
```

### Get Telecom Network Type

```php
// https://{domain}.com/{path}?phone=09250000000

$request->telecomNetworkType('phone');

// gsm
```

```php
// https://{domain}.com/{path}?phone=09440000000

$request->telecomNetworkType('phone');

// wcdma
```

### Normalize Myanmar Phone Number

```php
// https://{domain}.com/{path}?phone=09250000000

$request->normalizeMyanmarPhoneNumber('phone');

// 09250000000
```

```php
// https://{domain}.com/{path}?phone=(၀၉)၂၅၀၀၀၀၀၀၀

$request->normalizeMyanmarPhoneNumber('phone');

// 09250000000
```

```php
// https://{domain}.com/{path}?phone=၀၉-၂၅၀၀၀၀၀၀၀

$request->normalizeMyanmarPhoneNumber('phone');

// 09250000000
```

```php
// https://{domain}.com/{path}?phone=+၉၅၉၂၅၀၀၀၀၀၀၀

$request->normalizeMyanmarPhoneNumber('phone');

// 09250000000
```

```php
// https://{domain}.com/{path}?phone=09-၂၅ဝရဝရဝရဝ

$request->normalizeMyanmarPhoneNumber('phone');

// 09250707070 (ဝလုံး နဲ့ ရကောက် ပါလျှင် 0 နဲ့ 7 လို့ပြောင်းလဲပါသည်)
```

### Extract Myanmar Phone Number

```php
// https://{domain}.com/{path}?message=မောင်မောင်ရဲ့ ဖုန်းနံပါတ်များမှာ ၀၉၂၅၀၀၀၀၀၀၀ နှင့် ၀၉၉၇၀၀၀၀၀၀၀ တို့ဖြစ်ပါသည်။

$request->extractMyanmarPhoneNumber('message');

// ["09250000000", "09970000000"]
```

### Extract MPT

```php
// https://{domain}.com/{path}?message=မောင်မောင်ရဲ့ ဖုန်းနံပါတ်မှာ 09250000000 ဖြစ်ပါသည်။

$request->extractMpt('message');

// ["09250000000"]
```

### Extract Ooredoo

```php
// https://{domain}.com/{path}?message=မောင်မောင်ရဲ့ ဖုန်းနံပါတ်မှာ 09970000000 ဖြစ်ပါသည်။

$request->extractOoredoo('message');

// ["09970000000"]
```

### Extract Telenor

```php
// https://{domain}.com/{path}?message=မောင်မောင်ရဲ့ ဖုန်းနံပါတ်မှာ 09790000000 ဖြစ်ပါသည်။

$request->extractTelenor('message');

// ["09790000000"]
```

### Extract MEC

```php
// https://{domain}.com/{path}?message=မောင်မောင်ရဲ့ ဖုန်းနံပါတ်မှာ 0930000000 ဖြစ်ပါသည်။

$request->extractMec('message');

// ["0930000000"]
```

### Extract Mytel

```php
// https://{domain}.com/{path}?message=မောင်မောင်ရဲ့ ဖုန်းနံပါတ်မှာ 09690000000 ဖြစ်ပါသည်။

$request->extractMytel('message');

// ["09690000000"]
```


## NRC

### Check NRC

```php
// https://{domain}.com/{path}?nrc=12/OUKAMA(N)123456

$request->isNrc('nrc');

// true
```

```php
// https://{domain}.com/{path}?nrc=12/OuKaMa(Naing)123456

$request->isNrc('nrc');

// true
```

```php
// https://{domain}.com/{path}?nrc=၁၂/ဥကမ(နိုင်)၁၂၃၄၅၆

$request->isNrc('nrc');

// true
```

### Normalize NRC

```php
// https://{domain}.com/{path}?nrc=12/OUKAMA(N)123456

$request->normalizeNrc('nrc');
// 12/OUKAMA(N)123456

$request->normalizeNrc('nrc', 'mm');
// ၁၂/ဥကမ(နိုင်)၁၂၃၄၅၆
```

```php
// https://{domain}.com/{path}?nrc=12/OuKaMa(Naing)123456

$request->normalizeNrc('nrc');
// 12/OUKAMA(N)123456

$request->normalizeNrc('nrc', 'mm');
// ၁၂/ဥကမ(နိုင်)၁၂၃၄၅၆
```

```php
// https://{domain}.com/{path}?nrc=၁၂/ဥကမ(နိုင်)၁၂၃၄၅၆

$request->normalizeNrc('nrc');
// 12/OUKAMA(N)123456

$request->normalizeNrc('nrc', 'mm');
// ၁၂/ဥကမ(နိုင်)၁၂၃၄၅၆
```