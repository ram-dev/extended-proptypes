[![Build Status](https://travis-ci.org/peterkhayes/extended-proptypes.svg?branch=master)](https://travis-ci.org/peterkhayes/extended-proptypes)  [![Coverage Status](https://coveralls.io/repos/github/peterkhayes/extended-proptypes/badge.svg?branch=master)](https://coveralls.io/github/peterkhayes/extended-proptypes?branch=master)
# Extended Prop Types

Useful proptypes for React components.  Developed for and tested on ClassDojo's web app.

## Usage
Individual validators can be imported under `/validators`.
```js
import keyedObject from "extended-proptypes/validators/keyedObject";

class MyComponent extends Component {

  static propTypes = {
    mySpecialObject: keyedObject(/keyregex/).isRequired,
  };
}
```

If you want to extend React's `PropTypes` with all included validators, you can
import `extended-proptypes/lib/extend`.
```js
import {PropTypes} from "react";
import `extended-proptypes/lib/extend`;

class MyComponent extends Component {

  static propTypes = {
    myEmailAddress: PropTypes.emailAddress.isRequired,
    myArrayOrObject: PropTypes.collectionOf(PropTypes.bool),
  };
}
```


Or, you can also import the whole module and call it on `React.PropTypes`.
```js
import {PropTypes} from "react";
import ExtendedPropTypes from "extended-proptypes";

// New options will now be available on React's `PropTypes` export.
ExtendedPropTypes(PropTypes);

class MyComponent extends Component {

  static propTypes = {
    myDate: PropTypes.date.isRequired,
    mySatanicString: PropTypes.stringMatching(/^6+$/).isRequired,
  };
}
```

## New Prop Types

All validators expose basic and `isRequired` versions.

### React:
- `elementWithType(Type)`: A react element matching the provided type, which may be a class or a function.

### Collections
- `collection`: An array or a plain object.
- `collectionOf(validator)`: An array or a plain object whose values match the provided validator.
- `keyedObject(regex)`: An object whose keys match the provided regex.
- `keyedObjectOf(regex, validator)`: An object whose keys match the provided regex and whose values match the provided validator.
- `iterable`: An iterable. Errors if enviroment does not support symbols.

### General Primatives
- `constant(val)`: The provided val, only.
- `primative`: a number, a string, or a boolean.
- `stringMatching(regex)`: A string that matches the provided regex.
- `stringWithLength(min, max=Infinity)`: A string with length between min and max, inclusive. If only one argument is provided, requires exactly that length.
- `hex`: A string consisting of hex characters, with an optional 0x at the beginning.
- `date`: A date object.
- `dateBetween(min, max=Infinity)`: A date object which is within the provided interval.
- `time`: A value parsable by `new Date()`.
- `timeBetween(min, max=Infinity)`: A value parsable by `new Date()` which is within the provided interval.
- `uuid`: A uuid string (e.g. `123e4567-e89b-12d3-a456-426655440000`).
- `locale`: A locale string, like `en-US` or `jp`.
- `emailAddress`: An email address (regex taken from the highest-upvoted SO answer).

### CSS
- `percent`: A percentage.
- `cssLength`: A single css length, like `24px`, `43%` or `4rem`.
- `cssSize`: Between 1 and 4 css lengths.
- `color`: A hex or rgb(a) string

### MongoDB-specific
- `mongoId`: A 24-character hex string.
- `mongoIdKeyedObject`: An object whose keys are mongo ids.
- `mongoIdKeyedObjectOf(validator)`: An object whose keys are mongo ids and whose values match the provided validator.