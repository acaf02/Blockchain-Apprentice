
const numbers = [1, 2, 3, 4];

const count = countOccurrences(numbers, 1);

console.log(count);

function countOccurrences (array, serchElement) {
    let count = 0;
    for (let element of array)
        if(element === serchElement)
            count ++;   
        return count;
}