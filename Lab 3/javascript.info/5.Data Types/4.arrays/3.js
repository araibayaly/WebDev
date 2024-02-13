let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // a,b,function(){...}
// function arr[2] as an object method, it receives this referencing the object arr and outputs the array