
const numbers = [1, 2, 3, 4];

console.log(includes(numbers,-2));

function includes (array, serachElement) {
    for (let element of array)
        if (element === serachElement)
        return true;

        return false;
}