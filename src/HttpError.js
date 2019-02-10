export default class HttpError extends Error {
  constructor(props) {
    super();
    Object.assign(this, props);
  }
}
