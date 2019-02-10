import statuses from 'statuses';
import HttpError from './HttpError';
import toId from './toId';

statuses.codes.forEach(status => {
  const message = statuses[status];
  const id = toId(message);

  const Error = class extends HttpError {
    constructor(arg) {
      let obj = {};

      if (typeof arg === 'string') {
        obj = { message: arg };
      } else if (arg && typeof arg === 'object') {
        obj = arg;
      }

      super({ status, message, ...obj });
    }
  };

  exports[id] = Error;
  exports[status] = Error;
});

exports.HttpError = HttpError;
