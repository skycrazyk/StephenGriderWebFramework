type Callback = () => void;

export class Eventing {
  events: Record<string, Callback[]> = {};

  on = (eventName: string, callback: Callback) => {
    const callbacks = this.events[eventName] || [];
    callbacks.push(callback);
    this.events[eventName] = callbacks;
  };

  trigger = (eventName: string) => {
    if (!this.events[eventName]) {
      return;
    }

    this.events[eventName].forEach((callback) => callback());
  };
}
