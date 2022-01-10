const curry =
  (fn, ...args) =>
  (...moreArgs) =>
    fn(...args, ...moreArgs);

export default curry;
