export default class ConsoleReplacer {
  constructor(realConsole, transform, outer) {
    this.realConsole = realConsole;
    this.transform = transform;
    this.outer = outer;
    this.timers = new Map();
  }

  log(...rest){
    this.realConsole.log(...rest);
    this.outer.push('log', ...rest.map(part => this.transform(part)));
  }
  info(...rest){
    this.realConsole.info(...rest);
    this.outer.push('info', ...rest.map(part => this.transform(part)));
  }
  warn(...rest){
    this.realConsole.warn(...rest);
    this.outer.push('warn', ...rest.map(part => this.transform(part)));
  }
  error(...rest){
    this.realConsole.error(...rest);
    this.outer.push('error', ...rest.map(part => this.transform(part)));
  }
  exception(...rest){ // deprecated
    this.realConsole.exception(...rest);
  }
  debug(...rest){
    this.realConsole.debug(...rest);
    this.outer.push('log', ...rest.map(part => this.transform(part)));
  }
  table(...rest){
    this.realConsole.table(...rest);
    this.outer.push('log', ...rest.map(part => this.transform(part)));
  }
  trace(...rest){
    this.realConsole.trace(...rest);
    this.outer.push('trace', ...rest.map(part => this.transform(part)));
  }
  dir(...rest){
    this.realConsole.dir(...rest);
    this.outer.push('dir', ...rest.map(part => this.transform(part)));
  }
  dirxml(...rest){
    this.realConsole.dirxml(...rest);
    this.outer.push('dirxml', ...rest.map(part => this.transform(part)));
  }
  group(...rest){
    this.realConsole.group(...rest);
    this.outer.push('log', ...rest.map(part => this.transform(part)));
  }
  groupCollapsed(...rest){
    this.realConsole.groupCollapsed(...rest);
    this.outer.push('log', ...rest.map(part => this.transform(part)));
  }
  groupEnd(...rest){
    this.realConsole.groupEnd(...rest);
    this.outer.push('log', ...rest.map(part => this.transform(part)));
  }
  time(mark){
    this.realConsole.time(mark);
    this.timers.set(mark, performance.now());
  }
  timeEnd(mark){
    this.realConsole.timeEnd(mark);
    const old = this.timers.get(mark) || 0;
    this.timers.delete(mark);
    this.outer.push('log', `${mark}: ${old - performance.now()}ms`);
  }
  timeStamp(...rest){
    this.realConsole.timeStamp(...rest);
  }
  clear(...rest){
    this.realConsole.clear(...rest);
    this.outer.push('clear');
  }
  profile(...rest){
    this.realConsole.profile(...rest);
  }
  profileEnd(...rest){
    this.realConsole.profileEnd(...rest);
  }
  assert(...rest){
    this.realConsole.assert(...rest);
    if (!rest[0]) this.outer.push('log', ...rest.map(part => this.transform(part)));
  }
  count(...rest){
    this.realConsole.count(...rest);
  }
  markTimeline(...rest){
    this.realConsole.markTimeline(...rest);
  }
  timeline(...rest){
    this.realConsole.timeline(...rest);
  }
  timelineEnd(...rest){
    this.realConsole.timelineEnd(...rest);
  }
  show(...rest){
    this.realConsole.show(...rest);
  }

}

