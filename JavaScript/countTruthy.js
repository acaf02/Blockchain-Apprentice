
const array = ['red', 3 ,0, 5, undefined, ''];
console.log(countTruty(array));

function countTruty(array) {

    let count = 0;
    for(let value of array)
        if(value)
            count++;
    return count;

}