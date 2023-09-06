import 'reflect-metadata';

@controller
class Plane {
  color: string = 'red';

  @get('/login')
  fly(): void {
    console.log('vrrrrrrrr');
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
// console.log(secret);

// whenever we apply a decorator to a class, the type argument is going
// to be of type, constructor function and to refer to that,
// we use: typeof <ClassName> i.e typeof Plane
// that's a reference to the constructor function of the Plane Class
function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    const middlewar = Reflect.getMetadata('middleware', target.prototype, key);

    router.get(path, middleware, target.prototype[key]);
  }
}

/* ........................................................................ */


/* 
const plane = {
  color: 'red',
};

Reflect.defineMetadata('note', 'hi there', plane, 'color');

const note = Reflect.getMetadata('note', plane, 'color');

console.log(note);
*/

/* 
Reflect.defineMetadata('note', 'hi there', plane);
Reflect.defineMetadata('height', '10', plane);

const note = Reflect.getMetadata('note', plane);
const height = Reflect.getMetadata('height', plane);
console.log(note);
console.log(height); 
*/
