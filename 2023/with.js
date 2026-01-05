// We can use with to change elements in the middle as well
const months = ["Januar", "Februar", "Mar", "April"];
const update = months.with(2, "March");
console.log(update); // ["Januar", "Februar", "March", "April"]
const spliced = months.toSpliced(2, 1, "March");
console.log(spliced); // ["Januar", "Februar", "March", "April"]
console.log(months); // ["Januar", "Februar", "Mar", "April"]
// The original array remains unchanged

// We can also use with to add elements at the end
const addEnd = months.with(months.length - 1, "May");
console.log(addEnd); // ["Januar", "Februar", "Mar", "May"]
console.log(months); // ["Januar", "Februar", "Mar", "April"]
// The original array remains unchanged

// We can use with to add, change, and add elements by chaining as well
const addChangeAdd = months
  .with(0, "December")
  .with(1, "January")
  .with(months.length - 1, "May");
console.log(addChangeAdd); // ["December", "January", "Mar", "May"]
console.log(months); // ["Januar", "Februar", "Mar", "April"]
// The original array remains unchanged
