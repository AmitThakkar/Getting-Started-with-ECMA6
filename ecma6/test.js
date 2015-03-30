/**
 * Created by Amit Thakkar on 06/03/15.
 */
"use strict";
let a = 23;
console.log(a);
var map = new Map;
console.log(map)
function *naturalNumbers() {
  var n = 10;
  while (true) {
    yield n++
  }
}
var gen = naturalNumbers()
console.log(gen.next());
console.log(gen.next())
