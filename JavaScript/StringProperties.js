const series = {
    title: 'The Last of Us',
    releaseYear : 2023,
    rating: 9.2,
    genre: 'Action'
};

showProperties(series);

function showProperties(obj) {
    for (let key in obj)
    if(typeof obj[key] === 'string')
    console.log(key, obj[key]);
}