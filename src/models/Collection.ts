import Axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';
import { User, UserProps } from './User';

export class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch() {
    Axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.map((props: UserProps) => {
        const user = User.buildUser(props);
        this.models.push(user);
      });

      this.trigger('change');
    });
  }
}
