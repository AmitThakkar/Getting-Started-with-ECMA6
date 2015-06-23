/**
 * Created by Amit Thakkar on 23/06/15.
 */
(function () {
    "use strict";
    let uniqueValues1 = new Set();
    uniqueValues1.add(3);
    uniqueValues1.add(2);
    uniqueValues1.add(1);
    uniqueValues1.add(3); // 3 is already present so it will ignore.
    uniqueValues1.add('3'); // 3 is string here, so it will be added.
    console.log(uniqueValues1); // Set { 3, 2, 1, '3' }

    console.log(uniqueValues1.has(4)); // false
    console.log(uniqueValues1.has(1)); // true

    uniqueValues1.delete(1);
    console.log(uniqueValues1.has(1)); // false
    console.log(uniqueValues1); // Set {3, 2, '3'}

    uniqueValues1.clear();
    console.log(uniqueValues1); // Set {}

    let uniqueValues2 = new Set([1, 1, 2, 2, 3, 3]);
    console.log(uniqueValues2); // Set { 1, 2, 3 }

    for (let uniqueValue of uniqueValues2) {
        console.log(uniqueValue); // 1    // 2     // 3
    }
    uniqueValues2.forEach(function (value) {
        console.log("Value: ", value);
    });
})();