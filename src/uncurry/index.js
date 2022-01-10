const uncurry =
  (fn) =>
  (...args) =>
    args.reduce((fn, arg) => fn(arg), fn);

export default uncurry;
