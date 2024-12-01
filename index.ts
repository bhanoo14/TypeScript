console.log("Hello World");

type bhanoo = {
    name : string,
    age :number;
    email: string
};

function sayHello(name: string = 'Bhanoo'): string{
    return `Hello ${name}`;
}

let myName = (name: string):string =>{
    return `Hello ${name}`;
}

myName("temba");


let myMyNumber: number = 1000.123456;
console.log(
 myMyNumber.toPrecision(3));


export {}