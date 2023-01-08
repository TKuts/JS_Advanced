const user1 = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false } = user1;

console.log(name);
console.log(age);
console.log(isAdmin);
