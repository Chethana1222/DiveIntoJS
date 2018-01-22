var nums = [];
console.log("Initial Array");
console.log(nums)
console.log(typeof(nums))
console.log(nums.constructor.name)

//add items into array

nums.push(5);
nums.push(13);
nums.push(45);
nums.push(6);
nums.push(89);
nums.push(898);

console.log("After items Added")
console.log(nums)

//Remove Last item from the array

nums.pop();
console.log("After item Poped")
console.log(nums)

console.log("Usage of splice.. Remove the item 45")

nums.splice(nums.indexOf(45), 1);
console.log(nums)

console.log("Find the number of items in array using length property")
console.log(nums.length)


console.log("Usage of slice.. Returns a section of an array")

var ret = nums.slice(1);
console.log(ret)

var ret = nums.slice(0, 2);
console.log(ret)


console.log("Sort array values");
console.log("Before Sort array values");
console.log(nums);
console.log("After Sort array values:");
console.log("Using only sort function");
console.log(nums.sort());

console.log("Using sort where compare function is passed as an argument");
console.log("Ascending order");
console.log(nums.sort(function(a, b) { return a - b }));
console.log("Descending order");
console.log(nums.sort(function(a, b) { return b - a }));