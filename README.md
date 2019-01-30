[![Version](https://badgen.net/npm/v/@sadbox/node-http-errors)](https://www.npmjs.com/package/@sadbox/walledator)

[![License](https://badgen.net/npm/license/@sadbox/node-http-errors)](https://www.npmjs.com/package/@sadbox/walledator)

[![Dependencies](https://badgen.net/david/dep/strayiker/node-http-errors)](https://www.npmjs.com/package/@sadbox/walledator)

# NodeJs HTTP Errors

Easy to use, class-based http errors. Supports all http statuses.

## Install

`yarn add @sadbox/node-http-errors`

or

`npm install -S @sadbox/node-http-errors`

## Usage

```javascript
import { HttpError, BadRequest } from '@sadbox/node-http-errors';

let err = HttpError({ code: 500, message: 'Internal Server Error.' });
err = BadRequest(); // code 400 and default message for bad request error
err = BadRequest('Bad User Input.'); // with custom message
err = BadRequest({ fieldErrors }); // with custom property
```
