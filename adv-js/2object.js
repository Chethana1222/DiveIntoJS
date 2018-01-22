var i={};

console.log(i)
console.log(typeof(i));


var employee={};

employee.id=109;
employee["name"]="Chethana K";

console.log(employee.id);
console.log(employee["name"]); //Recommended way to retrive the value of the key

for (var eachProp in employee) {
   console.log(eachProp+" -> "+employee[eachProp]);
}