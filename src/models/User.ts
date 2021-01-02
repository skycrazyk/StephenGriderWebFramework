import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
import { Model } from './Model';
import { Collection } from './Collection';

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync(rootUrl)
    );
  }

  static buildUserCollection() {
    return new Collection<User, UserProps>(rootUrl, User.buildUser);
  }

  setRandomAge() {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
