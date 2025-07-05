export class Observed {
  name: string;
  state: string;
  observers: Array<Observer>;

  constructor(name: string) {
    this.name = name;
    this.state = "走路";
    this.observers = [];
  }

  setObserver(observer: Observer) {
    this.observers.push(observer);
  }

  setState(state: any) {
    this.state = state;
    this.observers.forEach(observer => observer.update(this));
  }
}

export class Observer {
  update(observed: Observed) {
    console.log(observed.name + "正在" + observed.state);
  }
}