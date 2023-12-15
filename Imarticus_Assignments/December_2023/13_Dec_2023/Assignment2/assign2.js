var cities = ['Mumbai','Pune','Hyderabad'];
console.log('The cities are: '+ cities);

cities.push('Ratnagiri');
cities.push('Kerala');
console.log('The first updated cities are: '+ cities);

console.log('The length of the cities is: '+ cities.length); 
console.log('The first updated cities are: '+ cities);

cities.unshift('Chennai');
cities.unshift('Delhi');
cities.push('Kolkata');
console.log('The second updated cities are: '+ cities);

cities.pop();
cities.pop();
console.log('The third updated cities are: '+ cities);

console.log('The length of the cities is: '+ cities.length); 
console.log('The last updated cities are: '+ cities);

//----------------Using spread operator-------------------------------------//
var arr1 = ["Hello","World"];
var arr2 = [1,3,9,5,4,9,6];
var arr3 = [...arr1,...arr2];
console.log('arr1+arr2: '+arr3);

var arr4 = ['a','j','t','r','f'];
var arr5 = [...arr3,...arr4];
console.log('arr3+arr4: '+arr5);

