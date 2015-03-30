/**
 * Created by Amit Thakkar on 07/03/15.
 */
function *loop(arr) {
  var index = 0;
  while(arr.length > index) {
    yield index++
  }
}

var l = loop([1,2,3]);
console.log(l.next());
console.log(l.next());
console.log(l.next());
console.log(l.next());
