interface UserProps {
  name?: string
  age?: number
}

type Callback = () => void;

export class User {
  events: Record<string, Callback[]> = {};

  constructor(private data: UserProps) {}

  get(propName: string): (string| number) {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update)
  }

  on(eventName: string, callback: Callback ) {
    const callbacks = this.events[eventName] || [];
    callbacks.push(callback);
    this.events[eventName] = callbacks;
  }

  trigger(eventName: string) {
    if(!this.events[eventName]) {
      return;
    }

    this.events[eventName].forEach(callback => callback())
  }
}