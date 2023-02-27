
let address = new Address ('a', 'b', 'c');

console.log(address);

function createAddress (street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

function Address (street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
