import { Collection } from './models/Collection';
import { UserList } from './views/UserList';
import { User, UserProps } from './models/User';

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    const collection = new UserList(root, users);
    collection.render();
  }
});

users.fetch();
