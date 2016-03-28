/**
 * Created by Amit Thakkar on 05/07/15.
 */
(() => {
    "use strict";
    const a = 10;
    console.log(a);
    //a++;
    //var a = 20;
    console.log(a);
    (() => {
        var a = 20;
        console.log(a);
    })();
})();