
function sum(...items) {
    return items.reduce((a, b) => a + b);
}

console.log(sum(3, 5, 6));
console.log(sum1(3, 5, 6));

function sum1 (...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];
        return items.reduce((a, b) => a + b);


}