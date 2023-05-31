// Step 1: Constructor function for Car
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  // Step 2: Adding getDescription method to Car prototype
  Car.prototype.getDescription = function() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  }
  
  // Step 3: ElectricCar subclass
  function ElectricCar(make, model, year, range) {
    Car.call(this, make, model, year);
    this.range = range;
  }
  
  // Step 4: Overriding getDescription method for ElectricCar
  ElectricCar.prototype = Object.create(Car.prototype);
  ElectricCar.prototype.getDescription = function() {
    return `${Car.prototype.getDescription.call(this)}, Range: ${this.range} miles`;
  }
  
  // Step 5: Creating an instance of ElectricCar and calling getDescription
  const teslaModelS = new ElectricCar("Tesla", "Model S", 2019, 300);
  console.log(teslaModelS.getDescription()); // Output: Make: Tesla, Model: Model S, Year: 2019, Range: 300 miles  