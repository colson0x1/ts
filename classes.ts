class Vehicle {
  drive(): void {
    console.log('vrr vrrr');
  }

  honk(): void {
    console.log('beep')
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk()