
try {
    const numbers = [1, 2, 3, 4];
    const count = countOccurrences(null, 1);
    console.log(count);
    }
    catch (e) {
        console.log(e.message);
    }
    function countOccurrences (array, serchElement) {
        if(!Array.isArray(array))
        throw new Error('invalid array');
    
        let count = 0;
        for (let element of array)
            if(element === serchElement)
                count ++;   
            return count;
    }