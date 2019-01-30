export default class HttpError extends Error {
  constructor(props) {
    super();

    Object.keys(props).forEach(key =>
      Object.defineProperty(this, key, { value: props[key] })
    );
  }
}
