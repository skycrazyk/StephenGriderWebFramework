import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

const rootUrl = 'http://localhost:1234/user';

export class User {
  events: Eventing = new Eventing();
  sync: Sync<UserProps> = new Sync(rootUrl);
  attrs: Attributes<UserProps>;

  constructor(data: UserProps) {
    this.attrs = new Attributes(data);
  }
}
