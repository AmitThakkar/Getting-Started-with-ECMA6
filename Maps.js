/**
 * Created by Amit Thakkar on 23/06/15.
 */
(function () {
    "use strict";
    let map1 = new Map();
    map1.set('name', 'Amit Thakkar');
    map1.set('age', 27);

    console.log(map1.has('name')); // true
    console.log(map1.get('name')); // Amit Thakkar
    console.log(map1.size); // 2
    console.log(map1); // Map { 'name' => 'Amit Thakkar', 'age' => 27 }

    map1.delete('name');
    console.log(map1); // Map { 'age' => 27 }
    console.log(map1.get('name')); // undefined
    console.log(map1.size); // 1

    map1.clear();
    console.log(map1.get('age')); // undefined
    console.log(map1.size); // 0
    console.log(map1); // Map {}

    let map2 = new Map([['name', 'Namita Malik'], ['age', '25'], ['address']]);
    console.log(map2); // Map { 'name' => 'Namita Malik', 'age' => '25', 'address' => undefined }
    console.log(map2.has('name')); // true
    console.log(map2.get('name')); // Namita Malik
    console.log(map2.size); // 3

    // Iterating over keys
    for (let key of map2.keys()) {
        console.log("Key", key); // Key name     // Key age     // Key address
    }

    // Iterating over values
    for (let value of map2.values()) {
        console.log("Value", value); // Value Namita Malik     // Value 25     // Value undefined
    }

    // Iterating over values
    map2.forEach(function (value, key) {
        console.log("Key:", key, "Value:", value); // Key: name Value: Namita Malik     // Key: age Value: 25 ....
    });
})();