"use strict";

/* -------------------------------------------------------
    OOP & CLASSES
------------------------------------------------------- *
//? OOP: Object Oriented Programming
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
//? CLASS: Obje türetmek için kullanılacak şablon.

//! cLASS DECLARATION:

// class PascalCaseClassName {...}

//! Class Expression:
const PascalCaseClassName = class {
  undefinedProperty; // only definition. (undefinedProperty==undefined)
  properyName = "value"; // attribute, field
  //? "new class" ile obje olustururken parametre gondermek icin "constructor" isminde bir method kullanırız.

  constructor(parameter1, parameter2 = "default-value") {
    this.parameter1 = parameter1;
    this.parameter2 = parameter2;
  }
  methodName1() {
    return this;
  }
};

//!INSTANCE =
//Bir classtan turetilen objedir.

const PascalCaseInstanceName = new PascalCaseClassName(0, 1);
console.log(PascalCaseInstanceName);
console.log(PascalCaseInstanceName.properyName);
console.log(PascalCaseInstanceName.parameter1);
console.log(PascalCaseInstanceName.methodName1());
console.log(typeof PascalCaseClassName);
/*----------------------------------------------------------------*
class Car {
  isRunning = false;
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  runEngine() {
    this.isRunning = true;
    console.log("Engine runned");
    return this.isRunning;
  }
}
const Ford = new Car("Ford", "Mustang", 1967);
console.log(Ford);
// Ford.isRunning = true;
// console.log(Ford);
Ford.runEngine();
console.log(Ford);

const Mersedes = new Car("Mersedes", "clk200", 2010);
console.log(Mersedes);

const Renault = new Car("Renault", "Megane", 2010);
Renault.runEngine();
console.log(Renault);

/*--------------------------------------------------------------*

//!Inheritance:
//? MirasAlma. Başka bir class'ın tüm özelliklerini/metodlarını devralma. (parent-child ilişkisi kurulur.)
//? THIS: Child Class - SUPER: Parent Class

class Vehicle {
  vehicleIsActive = false;

  constructor(vehicleType) {
    this.vehicleType = vehicleType;
  }
}

class Car extends Vehicle {

  isRunning = false;

  constructor(brand, model, year, vehicleType ="Car") {
//? Super paremetresi en tepede olmalı.
    super(vehicleType);
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  runEngine() {
    this.isRunning = true;
    console.log("Engine runned");
    return this.isRunning;
  }
}
// const Ford = new Car("Ford", "Mustang", 1967);
// console.log(Ford);

class Accessory extends Car {
    constructor  (accessoryName, brand, model, year, vehicleType ) {
        super(brand, model, year)
        this.accessoryName = accessoryName
    }
}

const FordClimate = new Accessory("Bosh Climate", "Ford", "Mustang", 1967, "Car")
console.log(FordClimate)


/*----------------------------------------------------------------*
//! Polymorphism:
//? Miras aldığımız sınıfın özellik/methodlarını yeniden yazabilme.
//! - Override:
//? Üst metodla aynı isim ve yapıda yeni bir metod yazma. (ezme / iptal etme / önceliğini alma)
//?! - Overload:
//? Üst metodla aynı isimde ama farklı yapıda (farklı adet/tip) yeni method oluşturma. (aynı anda ikisi de aktif) (JS desteklemez)

class Vehicle {
  vehicleIsActive = false;

  constructor(vehicleType) {
    this.vehicleType = vehicleType;
  }
  getDetails() {
    console.log("Vehicle.getDetails runned.");
    return this.vehicleType;
  }
}

class Car extends Vehicle {
  isRunning = false;

  constructor(brand, model, year, vehicleType = "Car") {
    //? Super paremetresi en tepede olmalı.
    super(vehicleType);
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  runEngine() {
    this.isRunning = true;
    console.log("Engine runned");
    return this.isRunning;
  }

  //! Override:
  //?Parent classdaki method ezildi. Artık bu gecerli.
  //? Usteki method ismi ile aynen yeniden tanımlanmasıdır.

  getDetails() {
    console.log("Car.getDetails runned.");
    return this;  // burada super.getDetails() kullanılırsa ezilen parametre kullanılır.
  }
//! Overload:
//? Ustedi metodun aynı isim farklı parametre adet/tip yeniden tanımlanmasıdır.
//? jsdesteklemez. Type Script destekler.
//? Cagırıldıgı zaman parametreye gore ilgili method calısır.

 getDetails(parameter1, parameter2) {
    return this
 }

}

const Ford = new Car("Ford", "Mustang", 1967);
console.log(Ford.getDetails());
/*--------------------------------------------------------------*
//! Access Modifiers:
//! - PUBLIC:
//? Genel erişime açık. (Parent: Yes, Child: Yes, Instance: Yes)
//! - PROTECTED:
//? Sadece tanımlı olduğu class ve Inherit edilen child-class erişebilir. (Parent: Yes, Child: Yes, Instance: No) (JS Desteklemez.)
//! - PRIVATE:
//? Sadece tanımlı olduğu class içinde erişim var. (Parent: Yes, Child: No, Instance: No)

class Vehicle {
  vehicleIsActive = false; // Public Property
  #privateProperty = "private-value"; //Private Property
  #privateMethod() {
    return this;
  } //? Private Method
  constructor(vehicleType) {
    this.vehicleType = vehicleType;
    console.log("privateProperty", this.#privateProperty);
  }
  getDetails() {
    console.log("Vehicle.getDetails runned.");
    return this.vehicleType;
  }
}

class Car extends Vehicle {
  isRunning = false;

  constructor(brand, model, year, vehicleType = "Car") {
    super(vehicleType);
    this.brand = brand;
    this.model = model;
    this.year = year;
    //   console.log("privateProperty", this.privateProperty)
  }

  runEngine() {
    this.isRunning = true;
    console.log("Engine runned");
    return this.isRunning;
  }

  getDetails() {
    console.log("Car.getDetails runned.");
    return this;
  }

  getDetails(parameter1, parameter2) {
    return this;
  }
}

const Ford = new Car("Ford", "Mustang", 1967);
console.log(Ford);

/*----------------------------------------------------------------*/
//! GETTER & SETTER METHODS:
//? Görevi veri getirme (getter) ve veri güncelleme (setter) olan metodlardır.
//! "STATIC" KEYWORD:
//? Class'dan direkt erişim. (Instance erişemez.)
class Car {
  isRunning = false;
  #price;
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  runEngine() {
    this.isRunning = true;
    console.log("Engine runned");
    return this.isRunning;
  }
  get getPrice() {
    console.log("Fiyat goruntulendi.");
    return this.#price;
  }

  set setPrice(newPrice) {
    console.log("Fiyat guncellendi.");
    this.#price = newPrice;
  }
  //? Direkt class ile erişmek istediklerimizi static ile işaretleriz.
    //? Statik property veya methodlara intance ile erişilmez.
    // static staticProp = 'static-value'

    //? Static methodlarda this ifadesi sadece statikleri çağırır
  static staticProp = "Static-value"
static staticMethod () {
    console.log("Static method calıstı.")
    return this
}
  
}
const Ford = new Car("Ford", "Mustang", 1967);
console.log(Ford);
//? Getter ve Setter methodlar bir property gibi kullanılabilir.
console.log(Ford.getPrice);
//? Ford.setPrice(5000) // Setter method normal method gibi çağrılmaz.

Ford.setPrice = 5000;
console.log(Ford.getPrice);

console.log(Car);
//? Bir class icine dogrudan erisim olmaz.
//?console.log(Car.runEngine)

//* Static olanlara erisebilirim.
console.log(Car.staticProp)// Static erisilebilir.
console.log(Ford.staticProp)// Instance den static erisilemez.
console.log(Car.staticMethod())

/* ------------------------------------------------------- */
//? ABSTRACTION: Soyutlama/Modelleme (Class ile obje üretebilme. Aynı amaç için kullanılan değişken ve methodların bir class içinde yazıyor olması)
//? ENCAPCULLATION: Kapsülleme/Ayrıştırma (Kodların gizliliği, private değişkenlere erişilemiyor olması ve birbirinden bağımsız çalışmaları.)
/* ------------------------------------------------------- */

//* HAPPY CODDING :)

/*--------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*--------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*--------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*--------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*--------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*--------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*--------------------------------------------------------------*/
/*----------------------------------------------------------------*/
