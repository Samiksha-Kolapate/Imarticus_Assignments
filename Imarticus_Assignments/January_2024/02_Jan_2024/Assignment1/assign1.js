const book1 = {
    name : "Tommorw Land",
    id: 'B01',
    price: 56.50
};

const author ={ 
    auth_name : "John",
    auth_id : 'AU01',
    age : 56
};

const distribution = {
    d_id: 'D01',
    copies: 100
};

book1.pages = '500' ;
author.gender = 'Male';

let library = {
    ...book1,
    ...author,
    ...distribution,
    location: 'India',
    city: 'Ratnagiri'
};

console.log(library);

