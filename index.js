// Factory Function
// function createCircle(radius){
//   return {
//     radius,
//     draw: function() {
//       console.log('draw')
//     }
//   }
// }
//
// const circle = createCircle(1)


// let x = {}
// js engine does this
// let x = new Object()

// Constructor Function
function Circle(radius){
  this.radius = radius;
  this.draw = function(){
    console.log('draw')
  }
}

const circle = new Circle(1)

const Circle1 = new Function('radius',`
  this.radius = radius;
  this.draw = function(){
  console.log('draw')
}
`)

const another = new Circle1
