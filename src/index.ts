import { User } from './models/User';

const user = new User({ name: 'second user', age: 1111 });

user.on('change', () => {
  console.log('change!');
});

user.trigger('change');

console.log(user.get('age'));
