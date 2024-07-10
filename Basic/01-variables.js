/*
Las variables nos ofrecen la posibilidad de poder almacenar valores en memoria para poder después trabajar con ellos.

Una variable es una referencia al objeto. Hay 3 formas de declararla:
*/

// var (se desaconseja): con palabra reservada "var" + variable en LowerCammelCase "=" valor

var helloWorld = "¡Hello, JavaScript!"
console.log(helloWorld)

helloWorld = "¡Hola de nuevo, JavaScript!"
console.log (helloWorld) //se puede reasignar

// let: es una variable de bloque.

let helloWorld2 = "¡Hello, JavaScript 2!"
console.log(helloWorld2)

helloWorld2 = "¡Hola de nuevo, JavaScript 2!"
console.log(helloWorld2) //se puede reasignar

// const: no reasignable.

const helloWorld3 = "¡Hello, JavaScript 3!"
console.log(helloWorld3)

/*const helloWorld3 = "¡Hola de nuevo, JavaScript 3!"
console.log(helloWorld3)*/