var utils = (function (exports) {
  'use strict';

  /**
   * Says hello.
   * @param  {String} name a name
   * @return {String}      a greeting for `name`
   */
  function sayHelloTo(name) {
    const toSay = `Hello, ${name}!`;

    return toSay;
  }

  /**
   * Says goodbye.
   * @param  {String} name a name
   * @return {String}      a farewell for `name`
   */
  function sayGoodbyeTo(name) {
    const toSay = `Later, ${name}!`;

    return toSay;
  }

  exports.sayGoodbyeTo = sayGoodbyeTo;
  exports.sayHelloTo = sayHelloTo;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
