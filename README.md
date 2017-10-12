# Font Case

Library to convert string font cases.

Converts a string between `Sentense case`, `camelCase`, `kebab-case` and `snake_case`, also have some useful string features.

## Usage

Import any conversion method from `font-case` package.

```javascript
import { toKebabCase } from 'font-case';

const someString = 'some text to convert';

const convertedString = toKebabCase(someString);
// some-text-to-convert
```

Also you can chain any method from this package with `font-case` default import, getting converted value with `value()` method.

```javascript
import fontCase from 'font-case';

const someString = 'some text to convert';

const convertedString =
    fontCase(someString)
        .toCamelCase()
        .capitalize()
        .value();

// SomeTextToConvert
```