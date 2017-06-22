import ConsoleReplacer from './ConsoleReplacer';
import DomLogger from './DomLogger';
import util from 'util';

export default function create(buttonContainer) {
  if (typeof buttonContainer === 'string'){
    buttonContainer = document.querySelector(buttonContainer);
  }
  if (!(buttonContainer instanceof HTMLElement)) return;

  let isOpen = false;
  const button = document.createElement('button');
  const div = document.createElement('div');
  const target = document.createElement('pre');
  const CLOSE_TEXT = 'CLOSE';
  const OPEN_TEXT = 'OPEN';

  buttonContainer.appendChild(button);
  div.appendChild(target);

  button.style.flexShrink = 0;
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
      buttonContainer.appendChild(div);
      div.scrollTop = div.scrollHeight;
    } else {
      button.innerText = OPEN_TEXT;
      buttonContainer.removeChild(div);
    }
  });


  const logger = new DomLogger(target);
  const replacer = new ConsoleReplacer(console, util.inspect, logger);
  window.console = replacer;
  return replacer;
}