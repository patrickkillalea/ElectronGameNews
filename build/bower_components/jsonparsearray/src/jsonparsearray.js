// imports
// =======

var Parser = window['jsonparse'];

// from https://github.com/isaacs/inherits/blob/master/inherits_browser.js
var inherits = function (ctor, superCtor) {
  ctor.super_ = superCtor
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
};

// Parser
// ========

f = function () {
  Parser.call(this);

  this.res = [];
  this.onValue = function (value) {
    if (!this.stack.length) this.res.push(value);
  };
};
inherits(f, Parser);


f.prototype.get = function () {
  return this.res;
};

f.prototype.clear = function () {
  this.res = [];
};

// exports
// ======

window['jsonparsearray'] = f;
