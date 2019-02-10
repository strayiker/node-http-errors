[![Version](https://badgen.net/npm/v/@sadbox/node-http-errors)](https://www.npmjs.com/package/@sadbox/node-http-errors) [![License](https://badgen.net/npm/license/@sadbox/node-http-errors)](https://www.npmjs.com/package/@sadbox/node-http-errors) [![Dependencies](https://badgen.net/david/dep/strayiker/node-http-errors)](https://www.npmjs.com/package/@sadbox/node-http-errors)

# NodeJs HTTP Errors

Easy to use, class-based http errors. Supports all http statuses.

## Install

`yarn add @sadbox/node-http-errors`

or

`npm install -S @sadbox/node-http-errors`

## Usage

```javascript
import { HttpError, BadRequest } from '@sadbox/node-http-errors';

let err = new HttpError({ status: 500, message: 'Internal Server Error.' });
err = new BadRequest(); // status 400 and default message for bad request error
err = new BadRequest('Bad User Input.'); // with custom message
err = new BadRequest({ fieldErrors }); // with custom property
```
