# Font Case

Library to convert string font cases.

Converts a string between `Sentense case`, `camelCase`, `kebab-case` and `snake_case`, also have some useful string features.

## Usage
---

### Basic Conversion

Import any conversion method from `font-case` package.

```javascript
import { toKebabCase } from 'font-case';

const someString = 'some text to convert';

const convertedString = toKebabCase(someString);
// some-text-to-convert
```

## API Reference

| Method | Description |
| --------- | ----------- |
| toCamelCase() | spaced text to lower `camelCase` |
| fromCamelCase() | `camelCase` to spaced text |
| toKebabCase() | spaced text to `kebab-case` |
| fromKebabCase() | `kebab-case` to spaced text |
| toSnakeCase() | spaced text to `snake_case` |
| fromSnakeCase() | `snake_case` to spaced text |
| capitalize() | `Capitalize` first letter |
