const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
console.log(sorted); // ["Apr", "Feb", "Jan", "Mar"]
console.log(months); // ["Jan", "Feb", "Mar", "Apr"]
// The original array remains unchanged

let numbers = [4, 2, 5, 1, 3];
let sortedNumbers = numbers.toSorted((a, b) => a - b);
console.log(sortedNumbers); // [1, 2, 3, 4, 5]
console.log(numbers); // [4, 2, 5, 1, 3]
// The original array remains unchanged

// Custom sorting function to sort in descending order
let descSortedNumbers = numbers.toSorted((a, b) => b - a);
console.log(descSortedNumbers); // [5, 4, 3, 2, 1]
console.log(numbers); // [4, 2, 5, 1, 3]
// The original array remains unchanged
