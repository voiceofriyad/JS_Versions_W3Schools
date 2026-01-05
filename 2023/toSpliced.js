const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(spliced); // ["Feb", "Mar", "Apr"]
console.log(months); // ["Jan", "Feb", "Mar", "Apr"]
// The original array remains unchanged

// We can also use toSpliced to insert elements
const splicedWithInsert = months.toSpliced(1, 0, "NewMonth");
console.log(splicedWithInsert); // ["Jan", "NewMonth", "Feb", "Mar", "Apr"]
console.log(months); // ["Jan", "Feb", "Mar", "Apr"]
// The original array remains unchanged

// We can use toSpliced to replace elements as well
const splicedWithReplace = months.toSpliced(2, 1, "ReplacedMonth");
console.log(splicedWithReplace); // ["Jan", "Feb", "ReplacedMonth", "Apr"]
console.log(months); // ["Jan", "Feb", "Mar", "Apr"]
// The original array remains unchanged
