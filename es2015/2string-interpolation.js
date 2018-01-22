var fname = "CK";
var lname = "achar";

var fullname = fname + " " + lname; //Earlier in ES5
//console.log(fullname);

//In ES2015

var fullname = `${fname} ${lname}`;

var multilinetxt = `Multi
Line
Text`;

console.log(fullname);
console.log(multilinetxt);