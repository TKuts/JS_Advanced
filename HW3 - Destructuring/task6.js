const employee = {
  name: "Vitalii",
  surname: "Klichko",
};

function addNewValues(oldValees) {
  let newPerson = {
    ...oldValees,
    age: "51",
    salary: "100000",
  };
  return newPerson;
}
console.log(addNewValues(employee));
