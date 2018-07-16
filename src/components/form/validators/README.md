# @mapbox/frontend-util-validators

Validators that work nicely with `@mapbox/react-form` and `@mapbox/react-control-*` components.

Every validator is its own module inside `@mapbox/frontend-util-validators/dist/`, which you should import individually:

```js
import validateRequired from '../utils/validators/dist/validate-required';
```

## Installation

```
npm install @mapbox/frontend-util-validators
```

## Usage

```
// Examples
import validateRequired from '../utils/validators/dist/validate-required';
import validateEmail from '../utils/validators/dist/validate-email';
```

The validator function signature is `(value) => string`, and the return value is an empty string if there is no error.

Some validator module are validator functions.
But some are functions that *return* validator functions.
This is necessary if the validator function varies from one case to another.
For example, the `validateRequired` module takes an argument, a string describing the required value, and returns a validator function.

```
// How to use validateRequired
import validateRequired from '../utils/validators/dist/validate-required';

const validateRequiredEmail = validateRequired('email');
// ... set value variable ...
const validationError = validateRequiredEmail(value);
```

All validator function except the one returned by `validateRequired` return no error if the value is empty.
They are intended to be used in tandem with `validateRequired` when the value is required.

## Validators

### validate-access-token

```
import validateAccessToken from '../utils/validators/dist/validate-access-token';
```

Validates that the value is a valid Mapbox access token.

Standard validator function signature.

### validate-bearing

```
import validateBearing from '../utils/validators/dist/validate-bearing';
```

Validates that the value is a number between `-180` and `180`.

Standard validator function signature.

### validate-date

```
import validateDate from '../utils/validators/dist/validate-date';
```

Validates that the value is a `Date` object.

Standard validator function signature.

### validate-email

```
import validateEmail from '../utils/validators/dist/validate-email';
```

Validates that the value is an email address according to the following criteria:

- Contains an `@`.

Standard validator function signature.

### validate-latitude

```
import validateLatitude from '../utils/validators/dist/validate-latitude';
```

Validates that the value is a number between `-90` and `90`.

Standard validator function signature.

### validate-longitude

```
import validateLongitude from '../utils/validators/dist/validate-longitude';
```

Validates that the value is a number between `-180` and `180`.

Standard validator function signature.

### validate-number-between

`validateNumberBetween(low: number, high: number): Validator`

```
import validateNumberBetween from '../utils/validators/dist/validate-number-between';

const validateNumberBetween10and30 = validateNumberBetween(10, 30);
// ... set value variable ...
const validationError = validateNumberBetween10and30(value);
```

Validates that the value is a number within a specified range, higher than (and not equal to) `low` and lower than (and not equal to) `high`.

### validate-number

```
import validateNumber from '../utils/validators/dist/validate-number';
```

Validates that the value is a number, or a string that can be coerced to a number.

Standard validator function signature.

### validate-password

```
import validatePassword from '../utils/validators/dist/validate-password';
```

Validates that the value is a password according to the following criteria:

- 8 or more characters.

Standard validator function signature.

### validate-pitch

```
import validatePitch from '../utils/validators/dist/validate-pitch';
```

Validates that the value is a number between `0` and `60`.

Standard validator function signature.

### validate-required

`validateRequired(partialMessage: ?string, fullMessage: ?string): Validator`

You must provide either a partial or full error message to show the user.
Typically, you can use a partial message.
It will be plugged into the sentence ``Please enter a/an ${partialMessage}``.
Provide a full  message if you need special language or face one of the situations where a computer might pick the wrong indefinite article, e.g. "Please enter an username".

```
import validateRequired from '../utils/validators/dist/validate-required';

const validateRequiredEmail = validateRequired('email');
// ... set value variable ...
const validationError = validateRequiredEmail(value);
// validationError will be "" or "Please enter an email.".

const validateRequiredUsername = validateRequired(null, 'Enter a username!');
// ... set value variable ...
const validationError = validateRequiredEmail(value);
// validationError will be "" or "Enter a username!".
```

Validates that the value is not empty. "Empty" values are `""`, `undefined`, and `null`.

### validate-start-date-before-end-date

```
import validateStartDateBeforeEndDate from '../utils/validators/dist/validate-start-date-before-end-date';
```

Value must be an object with a `date` property (the "start date") and an `endDate` property.
Validates that `endDate` is before `date`.

Standard validator function signature.

### validate-style-uri

```
import validateStyleUri from '../utils/validators/dist/validate-style-uri';
```

Validates that the value is a Mapbox style URI according to the following criteria:

- Looks like `mapbox://styles/{something}/{something}`.

Standard validator function signature.

### validate-zoom

```
import validatePitch from '../utils/validators/dist/validate-zoom';
```

Validates that the value is a number between `0` and `22`.

Standard validator function signature.
