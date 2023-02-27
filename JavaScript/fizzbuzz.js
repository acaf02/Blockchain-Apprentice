// divisivel por 3 = Fizz
// divisivel por 5 = Buzz
// divisivel pelos dois = FizzBuzz
// nenhum dos dois = imput
// not a number = 'not a number'

const output = fizzBuzz(30);
console.log(output);

function fizzBuzz(input) {
    if(typeof input !== 'number')
    return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz';

    if (input % 3 === 0)
    return 'Fizz';

    if (input % 5 === 0)
    return 'Buzz';

    else 
    return input;

   
}