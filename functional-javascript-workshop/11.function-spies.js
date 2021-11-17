function Spy(target, method) {
    let result = {count: 0};

    let fn = target[method];

    target[method] = () => {
        result.count += 1;
        return fn.apply(this, arguments);
    }

    return result;
  }
  module.exports = Spy