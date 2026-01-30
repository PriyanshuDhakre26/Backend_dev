const emp = {
  id: 1,
  name: "ram",
  salary: "123456",
  address: "agra",
  age: 25,
  department: "HR",
};
const empCopy = { ...emp };
const { id, name, salary, ...otherinfo } = emp;
console.log(otherinfo);


let updateemp = {...emp,address:"bangalore"}
console.log(updateemp);