// let x = 10;
// let y = x;
//
// x = 20

// let x = {value: 10};
// let y = x;
//
// x.value = 20

// *** PRIMITIVES ARE COPIED BY VALUE ***
// *** OBJECTS ARE COPIED BY THEIR REFERENCE ***

let number = 10

function increase(number) {
  number++
}

increase(number)
console.log(number)

// number is copied into the value of the argument but after the function it is out of the scope

let obj = { value : 10}

function increase(obj) {
  obj.value++
}

increase(obj)
console.log(obj)

/*
 VALUE TYPES      REFERENCE TYPES
 number           object
 string           function
 boolean          array
 undefined
 null
*/
