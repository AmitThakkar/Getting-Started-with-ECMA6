/**
 * Created by Amit Thakkar on 06/07/15.
 */
(function () {
    "use strict";
    let weakMap = new Map();
    let amit = {
        name: {
            fname: 'Amit',
            lname: 'Thakkar'
        }
    };
    let name = amit.name;
    weakMap.set(name, {fount:'Yes'});
    console.log(weakMap.has(name), amit);
    delete amit.name;
    console.log(weakMap.has(name), amit);
})();