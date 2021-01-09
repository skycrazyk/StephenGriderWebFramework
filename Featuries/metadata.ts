import 'reflect-metadata';

const plane = {
  color: 'red',
};

Reflect.defineMetadata('size', 'big', plane);

console.log(Reflect.getMetadata('size', plane));

Reflect.defineMetadata('type', 'single color', plane, 'color');

console.log(Reflect.getMetadata('type', plane, 'color'));

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('hi there')
  fly(): void {
    console.log('vrrrr');
  }
}

function markFunction(secretInfo: string) {
  return function (target: any, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}
