/**
 * Created by Amit Thakkar on 05/07/15.
 */
(function () {
    "use strict";
    var bool = true;
    if (bool) {
        var a = 10;
    }
    for (var b = 11; b < 11; b++) {
        console.log(b);
    }
    console.log(a);
    console.log(b);

    if (bool) {
        let c = 10;
    }
    for (let d = 11; d < 11; d++) {
        console.log(d);
    }
    console.log(c);
    console.log(d);
})();