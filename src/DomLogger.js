import { COLOR, TAGNAME, MAX_LENGTH } from './config';

export default class DomLogger {
  constructor(target) {
    this.target = target;
  }

  push(type, ...message){
    switch(type) {
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

  clear() {
    this.target.innerHTML = '';
  }

  render(color, message) {
    const element = document.createElement(TAGNAME);
    element.style.background = color;
    element.style.color = COLOR.TEXT;
    element.style.border = `1px solid ${COLOR.TEXT}`;
    element.style.whiteSpace = 'pre-wrap';
    element.innerText = `${new Date().toLocaleString()}`;
    element.innerText += message.join('\n');
    this.target.appendChild(element);
    if (this.target.children.length > MAX_LENGTH) {
      for(let i = 0; i < MAX_LENGTH/10; i++){
        this.target.removeChild(this.target.children[0]);
      }
    }
  }

  trace(message) {
    const stack = new Error().stack;
    this.render(COLOR.DEFAULT, [...message, stack]);
  }

  error(message) {
    const stack = new Error().stack;
    this.render(COLOR.ERROR, [...message, stack]);
  }

  warn(message) {
    this.render(COLOR.WARN, message);
  }

  log(message) {
    this.render(COLOR.DEFAULT, message);
  }

  info(message) {
    this.render(COLOR.INFO, message);
  }

}