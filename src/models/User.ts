import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { AxiosResponse } from 'axios';

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  events: Eventing = new Eventing();
  sync: Sync<UserProps> = new Sync(rootUrl);
  attrs: Attributes<UserProps>;

  constructor(data: UserProps) {
    this.attrs = new Attributes(data);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attrs.get;
  }

  set(data: UserProps): void {
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
