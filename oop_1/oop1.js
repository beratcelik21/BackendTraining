"use strict";
/*----------------------------------------
                 Objects
----------------------------------------*/
// Direkt obje tanımlamada PascalCase yada Camelcase kullanıla biliriz:
/*----------------------------------------*
const ExampleObject = {
  propertyName: "value", //attribute, field, property degiskendir.
  methodName: function () {
    return "methodName() is a method";
  },

  methodAlternative() {
    return "methodName() is a method";
  },
};
console.log(ExampleObject.propertyName);
console.log(ExampleObject.methodName());
/*----------------------------------------*
const Car = {
  brand: "Ford",
  model: "Mustang",
  year: "1967",
  isAutoGear: true,
  colors: ["white", "red"],
  details: {
    color1: "white",
    color2: "red",
    engineSize: 4900,
  },
  startEngine: function (param1) {
    console.log(param1);
    return "Engine runned";
  },
};
console.log(Car.brand);
console.log(Car.colors);
console.log(Car.colors[0]);
console.log(Car.details);
console.log(Car.details.color1);
console.log(Car.startEngine("value"));

//! Alternative Style:
console.log(Car["brand"]);
console.log(Car["colors"][0]);
console.log(Car["details"]["engineSize"]);
console.log(Car["startEngine"](0));


/*----------------------------------------*
//!"THIS" KEYWORD
const Car = {
  brand: "Ford",
  model: "Mustang",
  year: "1967",
  isAutoGear: true,
  colors: ["white", "red"],
  details: {
    color1: "white",
    color2: "red",
    engineSize: 4900,
  },
  startEngine: function (param1) {
    console.log(param1);
    return "Engine runned";
  },
  getDetails: function () {
    // return this;
    // return this.brand + " " + this.model + " " + this.year;
    return this.startEngine("selam");
  },
  arrowMethod: ()=> {
    //* Arrow function is globalScope.(Not working this keyword in here)
    return this
  }
};
console.log(Car.getDetails());
console.log(Car.arrowMethod())

/*----------------------------------------*
//! Array Destructuring

const testArray = ["value0", "value1", "value2", "value3", "value4"];

// const var0 = testArray[0];
// const var1 = testArray[1];
// const var2 = testArray[2];
// const var9 = testArray.slice(3, 5);
// console.log(var0, var1, var2, var9);

//?Sırlama onemlidir.!!
const [var0, var1, var2, var3, ...var9] = testArray;

console.log(var0, var1, var2, var3, var9);

//?Rest Opaerator (toplayıcı) (Esittirin sol tarafında) (En sonda olmak zorunda.)
const [firstItem, secondItem, ...others]=testArray
console.log(firstItem, secondItem, others)

//? Spread operator dgıtıcı esittirin sag tarafındadır.
const newArray = [ "value5", ...testArray, "value6"]
console.log(newArray)
/*----------------------------------------*
//! Object Destructurıng

const Car = {
  brand: "Ford",
  model: "Mustang",
  year: "1967",
  isAutoGear: true,
  colors: ["white", "red"],
  details: {
    color1: "white",
    color2: "red",
    engineSize: 4900,
  },
  startEngine: function () {
    return "Engine runned";
  },
};

//? Rest Operator (Key isimleri onemli)
// const { year, model, brand, ...others } = Car;
// console.log(year, model, brand, others);

//*isim degisikligi yapmak istersem
const { year, model: newName, brand, ...others } = Car;

console.log(year, newName, brand, others);
Car.model = "Abc";
console.log(Car.model);

//? Sread Operatoru
const newObj = {
  ...Car,
  newKey: "new-value",
};
console.log(newObj);

//? to JSON:(donusturme)
const json = JSON.stringify(Car);
console.log(typeof json, json);

//? JSON TO oBJECT:
const obj = JSON.parse(json);
console.log(typeof obj, obj, obj.brand);

//? Object to Array
// Keys:
const arrKey = Object.keys(Car);
console.log(arrKey);
//Values:
const arrValue = Object.values(Car);
console.log(arrValue);
//Entires:(key, value)
const arrEnt = Object.entries(Car);
console.log(arrEnt);

/*----------------------------------------*
//!Constructors

const constructorFunction = function () {
  this.property = "value";
};


/*----------------------------------------*/
//! New Keyword


const carConstructor = function (brand, model, year) {

    this.brand = brand
    this.model = model
    this.year = year

    this.startEngine = function() {
        return ('Engine started.')
    }
}

const newCar = new carConstructor('Ford', 'Mustang', 1967)
console.log(typeof newCar, newCar)
console.log( newCar.brand )
console.log( newCar.startEngine() )

const newCar2 = new carConstructor('Mersedes', 'CLK200', 2015)
console.log(typeof newCar2, newCar2)
console.log( newCar.brand )
console.log( newCar.startEngine() )

/*----------------------------------------*/
/*----------------------------------------*/
/*----------------------------------------*/
/*----------------------------------------*/
