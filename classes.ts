class Vehicle {
  drive(): void {
    console.log('vrr vrrr');
  }

  honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('hurrrrr..');
  }
}

const car = new Car();
car.drive();
car.honk();
