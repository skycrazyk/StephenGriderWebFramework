import 'reflect-metadata';

const plane = {
  color: 'red',
};

Reflect.defineMetadata('size', 'big', plane);

console.log(Reflect.getMetadata('size', plane));

Reflect.defineMetadata('type', 'single color', plane, 'color');

console.log(Reflect.getMetadata('type', plane, 'color'));
