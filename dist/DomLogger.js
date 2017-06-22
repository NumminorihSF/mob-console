'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require('./config');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DomLogger = function () {
  function DomLogger(target) {
    _classCallCheck(this, DomLogger);

    this.target = target;
  }

  _createClass(DomLogger, [{
    key: 'push',
    value: function push(type) {
      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        message[_key - 1] = arguments[_key];
      }

      switch (type) {
        case 'error':
          return this.error(message);
        case 'trace':
          return this.trace(message);
        case 'info':
          return this.info(message);
        case 'warn':
          return this.warn(message);
        case 'clear':
          return this.clear();
        case 'log':
        default:
          return this.log(message);
      }
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.target.innerHTML = '';
    }
  }, {
    key: 'render',
    value: function render(color, message) {
      var element = document.createElement(_config.TAGNAME);
      element.style.background = color;
      element.style.color = _config.COLOR.TEXT;
      element.style.border = '1px solid ' + _config.COLOR.TEXT;
      element.style.whiteSpace = 'pre-wrap';
      element.innerText = '' + new Date().toLocaleString();
      element.innerText += message.join('\n');
      this.target.appendChild(element);
      if (this.target.children.length > _config.MAX_LENGTH) {
        for (var i = 0; i < _config.MAX_LENGTH / 10; i++) {
          this.target.removeChild(this.target.children[0]);
        }
      }
    }
  }, {
    key: 'trace',
    value: function trace(message) {
      var stack = new Error().stack;
      this.render(_config.COLOR.DEFAULT, [].concat(_toConsumableArray(message), [stack]));
    }
  }, {
    key: 'error',
    value: function error(message) {
      var stack = new Error().stack;
      this.render(_config.COLOR.ERROR, [].concat(_toConsumableArray(message), [stack]));
    }
  }, {
    key: 'warn',
    value: function warn(message) {
      this.render(_config.COLOR.WARN, message);
    }
  }, {
    key: 'log',
    value: function log(message) {
      this.render(_config.COLOR.DEFAULT, message);
    }
  }, {
    key: 'info',
    value: function info(message) {
      this.render(_config.COLOR.INFO, message);
    }
  }]);

  return DomLogger;
}();

exports.default = DomLogger;