import { User } from './models/User';

const user = new User({ name: 'second user', age: 1111 });

user.on('change', () => {
  console.log('something change!');
});

user.set({ name: 'new name' });
