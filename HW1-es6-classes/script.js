//1) Поясніть своїми словами, як ви розумієте, як працює прототипне наслідування в Javascript - прототипне наслідування потрібне для перепризначення
//батьківського об'єкту для подальшого його розширення/в новому об'єкті. (Прив'язування старого об'єкту до нового для повторного використання.)
//2) Для чого потрібно викликати super() у конструкторі класу-нащадка - дозволяє отримати доступ до методів базового/батьківського класу.

class Employee {
  constructor(name, age, salary) {
    this._name = name;
    this._age = age;
    this._salary = salary;
  }

  set name(value) {
    this._name = value;
  }
  get name() {
    return this._name;
  }
  set age(value) {
    this._agee = value;
  }
  get age() {
    return this._age;
  }

  set salary(value) {
    this._salary = value;
  }
  get salary() {
    return this._salary;
  }
}
class Programmer extends Employee {
  constructor(name, age, salary, lang) {
    super(name, age, salary);
    this._lang = lang;
  }
  set lang(value) {
    this._lang = value;
  }
  get lang() {
    return this._lang;
  }

  get salary() {
    return this._salary * 3;
  }
}
const firstProgrammer = new Programmer("Anton", 25, 20000, 3);
console.log(firstProgrammer.name);
console.log(firstProgrammer.age);
console.log(firstProgrammer.salary);
console.log(firstProgrammer.lang);
console.log(firstProgrammer);
const secondProgrammer = new Programmer("Roma", 19, 50000, 2);
console.log(secondProgrammer.name);
console.log(secondProgrammer.age);
console.log(secondProgrammer.salary);
console.log(secondProgrammer.lang);
console.log(secondProgrammer);
