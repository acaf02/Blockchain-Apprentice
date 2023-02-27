console.log(sun(10));

function sun(limit) {
    let count = 0; 
    
    for(let i = 0; i <= limit; i++){
        if(i % 3 === 0 || i % 5 === 0){
            count += i;
        }
    }
    return count;
}