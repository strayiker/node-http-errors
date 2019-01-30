import statuses from 'statuses';
import HttpError from './HttpError';
import toId from './toId';

statuses.codes.forEach(code => {
  const message = statuses[code];
  const name = toId(message);

  exports[name] = arg => {
    let obj = {};

    if (typeof arg === 'string') {
      obj = { message: arg };
    } else if (arg && typeof arg === 'object') {
      obj = arg;
    }

    return new HttpError({ code, message, ...obj });
  };
});

exports.HttpError = HttpError;
