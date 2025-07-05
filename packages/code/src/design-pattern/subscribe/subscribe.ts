export class EventEmitter {
  private subscriptions: Map<string, Set<(...args: any) => void>>;

  constructor() {
    this.subscriptions = new Map();
  }

  public on<DataType>(eventName: string, callback: (value: DataType) => void) {
    const set = this.subscriptions.get(eventName);
    if (!set) this.subscriptions.set(eventName, new Set());

    this.subscriptions.get(eventName)?.add(callback);
  }

  public emit(eventName: string) {
    const set = this.subscriptions.get(eventName);
    if (set) set.forEach(callback => callback());
  }
}