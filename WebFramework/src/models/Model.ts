import { AxiosPromise, AxiosResponse } from 'axios';

interface ModelAttributes<T> {
  set(update: T): void;
  get<K extends keyof T>(key: K): T[K];
  getAll(): T;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    public attrs: ModelAttributes<T>,
    public events: Events,
    public sync: Sync<T>
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attrs.get;
  }

  set(data: T): void {
    this.attrs.set(data);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.attrs.get('id');

    if (!id) {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then((res: AxiosResponse) => {
      this.set(res.data);
    });
  }

  save(): void {
    const data = this.attrs.getAll();

    this.sync
      .save(data)
      .then(() => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('save error');
      });
  }
}
