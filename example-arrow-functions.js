var names = ['Andrew', 'Julie', 'Jen'];

var returnMe = (name) => name + '!';
console.log(returnMe('Andrew'));

var person = {
  name: 'Andrew',
  greet: function (){
    names.forEach(function (name){
      console.log(this.name + ' says hi to ' + name)
    })
  }
}

person.greet()
// undefined says hi to Andrew
// undefined says hi to Julie
// undefined says hi to Jen
// This is because, anonymous functions doesn't have the `this` reference set to its parent context.

var person2 = {
  name: 'Andrew',
  greet: function (){
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name)
    })
  }
}

person2.greet()
// Andrew says hi to Andrew
// Andrew says hi to Julie
// Andrew says hi to Jen
// Arrow function(lambda expression) refers to the parent context via `this`

// Arrow functions are a neat way to preserve the `this` reference
