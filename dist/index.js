'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = create;

var _ConsoleReplacer = require('./ConsoleReplacer');

var _ConsoleReplacer2 = _interopRequireDefault(_ConsoleReplacer);

var _DomLogger = require('./DomLogger');

var _DomLogger2 = _interopRequireDefault(_DomLogger);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function create(buttonContainer) {
  if (typeof buttonContainer === 'string') {
    buttonContainer = document.querySelector(buttonContainer);
  }
  if (!(buttonContainer instanceof HTMLElement)) return;

  var isOpen = false;
  var button = document.createElement('button');
  var div = document.createElement('div');
  var target = document.createElement('pre');
  var CLOSE_TEXT = 'CLOSE';
  var OPEN_TEXT = 'OPEN';

  buttonContainer.appendChild(button);
  buttonContainer.appendChild(div);
  div.style.flex = '1';
  div.style.overflow = 'auto';
  target.style.background = 'rgba(255,255,255,0.9)';

  button.style.alignSelf = 'flex-start';
  button.type = 'button';
  button.innerText = OPEN_TEXT;

  button.addEventListener('click', function onButtonClick() {
    isOpen = !isOpen;
    if (isOpen) {
      button.innerText = CLOSE_TEXT;
      div.appendChild(target);
      div.scrollTop = div.scrollHeight;
    } else {
      button.innerText = OPEN_TEXT;
      div.removeChild(target);
    }
  });

  var logger = new _DomLogger2.default(target);
  var replacer = new _ConsoleReplacer2.default(console, _util2.default.inspect, logger);
  window.console = replacer;
  return replacer;
}