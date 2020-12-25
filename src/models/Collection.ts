import Axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch() {
    Axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.map((props: K) => {
        this.models.push(this.deserialize(props));
      });

      this.trigger('change');
    });
  }
}
