'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConsoleReplacer = function () {
  function ConsoleReplacer(realConsole, transform, outer) {
    _classCallCheck(this, ConsoleReplacer);

    this.realConsole = realConsole;
    this.transform = transform;
    this.outer = outer;
    this.timers = new Map();
  }

  _createClass(ConsoleReplacer, [{
    key: 'log',
    value: function log() {
      var _realConsole,
          _outer,
          _this = this;

      for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
        rest[_key] = arguments[_key];
      }

      (_realConsole = this.realConsole).log.apply(_realConsole, rest);
      (_outer = this.outer).push.apply(_outer, ['log'].concat(_toConsumableArray(rest.map(function (part) {
        return _this.transform(part);
      }))));
    }
  }, {
    key: 'info',
    value: function info() {
      var _realConsole2,
          _outer2,
          _this2 = this;

      for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        rest[_key2] = arguments[_key2];
      }

      (_realConsole2 = this.realConsole).info.apply(_realConsole2, rest);
      (_outer2 = this.outer).push.apply(_outer2, ['info'].concat(_toConsumableArray(rest.map(function (part) {
        return _this2.transform(part);
      }))));
    }
  }, {
    key: 'warn',
    value: function warn() {
      var _realConsole3,
          _outer3,
          _this3 = this;

      for (var _len3 = arguments.length, rest = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        rest[_key3] = arguments[_key3];
      }

      (_realConsole3 = this.realConsole).warn.apply(_realConsole3, rest);
      (_outer3 = this.outer).push.apply(_outer3, ['warn'].concat(_toConsumableArray(rest.map(function (part) {
        return _this3.transform(part);
      }))));
    }
  }, {
    key: 'error',
    value: function error() {
      var _realConsole4,
          _outer4,
          _this4 = this;

      for (var _len4 = arguments.length, rest = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        rest[_key4] = arguments[_key4];
      }

      (_realConsole4 = this.realConsole).error.apply(_realConsole4, rest);
      (_outer4 = this.outer).push.apply(_outer4, ['error'].concat(_toConsumableArray(rest.map(function (part) {
        return _this4.transform(part);
      }))));
    }
  }, {
    key: 'exception',
    value: function exception() {
      var _realConsole5;

      // deprecated
      (_realConsole5 = this.realConsole).exception.apply(_realConsole5, arguments);
    }
  }, {
    key: 'debug',
    value: function debug() {
      var _realConsole6,
          _outer5,
          _this5 = this;

      for (var _len5 = arguments.length, rest = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        rest[_key5] = arguments[_key5];
      }

      (_realConsole6 = this.realConsole).debug.apply(_realConsole6, rest);
      (_outer5 = this.outer).push.apply(_outer5, ['log'].concat(_toConsumableArray(rest.map(function (part) {
        return _this5.transform(part);
      }))));
    }
  }, {
    key: 'table',
    value: function table() {
      var _realConsole7,
          _outer6,
          _this6 = this;

      for (var _len6 = arguments.length, rest = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        rest[_key6] = arguments[_key6];
      }

      (_realConsole7 = this.realConsole).table.apply(_realConsole7, rest);
      (_outer6 = this.outer).push.apply(_outer6, ['log'].concat(_toConsumableArray(rest.map(function (part) {
        return _this6.transform(part);
      }))));
    }
  }, {
    key: 'trace',
    value: function trace() {
      var _realConsole8,
          _outer7,
          _this7 = this;

      for (var _len7 = arguments.length, rest = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        rest[_key7] = arguments[_key7];
      }

      (_realConsole8 = this.realConsole).trace.apply(_realConsole8, rest);
      (_outer7 = this.outer).push.apply(_outer7, ['trace'].concat(_toConsumableArray(rest.map(function (part) {
        return _this7.transform(part);
      }))));
    }
  }, {
    key: 'dir',
    value: function dir() {
      var _realConsole9,
          _outer8,
          _this8 = this;

      for (var _len8 = arguments.length, rest = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        rest[_key8] = arguments[_key8];
      }

      (_realConsole9 = this.realConsole).dir.apply(_realConsole9, rest);
      (_outer8 = this.outer).push.apply(_outer8, ['dir'].concat(_toConsumableArray(rest.map(function (part) {
        return _this8.transform(part);
      }))));
    }
  }, {
    key: 'dirxml',
    value: function dirxml() {
      var _realConsole10,
          _outer9,
          _this9 = this;

      for (var _len9 = arguments.length, rest = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        rest[_key9] = arguments[_key9];
      }

      (_realConsole10 = this.realConsole).dirxml.apply(_realConsole10, rest);
      (_outer9 = this.outer).push.apply(_outer9, ['dirxml'].concat(_toConsumableArray(rest.map(function (part) {
        return _this9.transform(part);
      }))));
    }
  }, {
    key: 'group',
    value: function group() {
      var _realConsole11,
          _outer10,
          _this10 = this;

      for (var _len10 = arguments.length, rest = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        rest[_key10] = arguments[_key10];
      }

      (_realConsole11 = this.realConsole).group.apply(_realConsole11, rest);
      (_outer10 = this.outer).push.apply(_outer10, ['log'].concat(_toConsumableArray(rest.map(function (part) {
        return _this10.transform(part);
      }))));
    }
  }, {
    key: 'groupCollapsed',
    value: function groupCollapsed() {
      var _realConsole12,
          _outer11,
          _this11 = this;

      for (var _len11 = arguments.length, rest = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        rest[_key11] = arguments[_key11];
      }

      (_realConsole12 = this.realConsole).groupCollapsed.apply(_realConsole12, rest);
      (_outer11 = this.outer).push.apply(_outer11, ['log'].concat(_toConsumableArray(rest.map(function (part) {
        return _this11.transform(part);
      }))));
    }
  }, {
    key: 'groupEnd',
    value: function groupEnd() {
      var _realConsole13,
          _outer12,
          _this12 = this;

      for (var _len12 = arguments.length, rest = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        rest[_key12] = arguments[_key12];
      }

      (_realConsole13 = this.realConsole).groupEnd.apply(_realConsole13, rest);
      (_outer12 = this.outer).push.apply(_outer12, ['log'].concat(_toConsumableArray(rest.map(function (part) {
        return _this12.transform(part);
      }))));
    }
  }, {
    key: 'time',
    value: function time(mark) {
      this.realConsole.time(mark);
      this.timers.set(mark, performance.now());
    }
  }, {
    key: 'timeEnd',
    value: function timeEnd(mark) {
      this.realConsole.timeEnd(mark);
      var old = this.timers.get(mark) || 0;
      this.timers.delete(mark);
      this.outer.push('log', mark + ': ' + (old - performance.now()) + 'ms');
    }
  }, {
    key: 'timeStamp',
    value: function timeStamp() {
      var _realConsole14;

      (_realConsole14 = this.realConsole).timeStamp.apply(_realConsole14, arguments);
    }
  }, {
    key: 'clear',
    value: function clear() {
      var _realConsole15;

      (_realConsole15 = this.realConsole).clear.apply(_realConsole15, arguments);
      this.outer.push('clear');
    }
  }, {
    key: 'profile',
    value: function profile() {
      var _realConsole16;

      (_realConsole16 = this.realConsole).profile.apply(_realConsole16, arguments);
    }
  }, {
    key: 'profileEnd',
    value: function profileEnd() {
      var _realConsole17;

      (_realConsole17 = this.realConsole).profileEnd.apply(_realConsole17, arguments);
    }
  }, {
    key: 'assert',
    value: function assert() {
      var _realConsole18,
          _outer13,
          _this13 = this;

      for (var _len13 = arguments.length, rest = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        rest[_key13] = arguments[_key13];
      }

      (_realConsole18 = this.realConsole).assert.apply(_realConsole18, rest);
      if (!rest[0]) (_outer13 = this.outer).push.apply(_outer13, ['log'].concat(_toConsumableArray(rest.map(function (part) {
        return _this13.transform(part);
      }))));
    }
  }, {
    key: 'count',
    value: function count() {
      var _realConsole19;

      (_realConsole19 = this.realConsole).count.apply(_realConsole19, arguments);
    }
  }, {
    key: 'markTimeline',
    value: function markTimeline() {
      var _realConsole20;

      (_realConsole20 = this.realConsole).markTimeline.apply(_realConsole20, arguments);
    }
  }, {
    key: 'timeline',
    value: function timeline() {
      var _realConsole21;

      (_realConsole21 = this.realConsole).timeline.apply(_realConsole21, arguments);
    }
  }, {
    key: 'timelineEnd',
    value: function timelineEnd() {
      var _realConsole22;

      (_realConsole22 = this.realConsole).timelineEnd.apply(_realConsole22, arguments);
    }
  }, {
    key: 'show',
    value: function show() {
      var _realConsole23;

      (_realConsole23 = this.realConsole).show.apply(_realConsole23, arguments);
    }
  }]);

  return ConsoleReplacer;
}();

exports.default = ConsoleReplacer;