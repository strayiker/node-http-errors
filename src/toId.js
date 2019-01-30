export default value =>
  value
    .split(/\s/)
    .map(token => token.slice(0, 1).toUpperCase() + token.slice(1))
    .join()
    .replace(/[^ _0-9a-z]/gi, '');
