/**
 * Created by Amit Thakkar on 27/07/15.
 */
(function () {
    "use strict";
    /*
     * 1. "this" binding is a common source of error in JavaScript. So The value of this inside of the function is
     * determined by where the arrow function is defined not where it is used.
     *
     * 2. Arrow functions cannot be used a constructors and will throw an error when used with new.
     *
     * 3. The value of this inside of the function can’t be changed, it remains the same value throughout the entire
     * lifecycle of the function
     * */
    /*var getANumber = () => {
        return 1;
    };
    console.log("getANumber()", getANumber());*/

    var multiplyBy2 = n => n * 2;
    console.log("multiplyBy2(3)", multiplyBy2(3));

    /*let add_1 = (n1, n2) =>  n1 + n2;
    console.log("add_1(2, 3)", add_1(2, 3));

    let add_2 = (n1, n2) => {
        let sum = n1 + n2;
        conosle.log(arguments);
        return sum;
    };
    console.log("add_2(2, 3)", add_2(2, 3));*/

})();