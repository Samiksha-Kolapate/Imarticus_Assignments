var fruits = ["Apple","Orange","Pear","Kiwi","Banana","Melon","Strawberry","Mango","Chiku","Grapes","Small-grapes"];


// 1 ==>> even index fruits
console.log(fruits);
var[a, ,b, ,c, ,d, ,e, ,f, ,] = fruits;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

// 2 ==>> odd index fruits
console.log(fruits);
var[ ,a, ,b, ,c, ,d, ,e, ,] = fruits;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// 3 ==>> fruits multiple of 3 index
console.log(fruits);
var[ , , ,a, , ,b, , ,c, , ,] = fruits;
console.log(a);
console.log(b);
console.log(c);

// 4 ==>> 1st , 6th, last
console.log(fruits);
var[a, , , , ,b, , , , ,c] = fruits;
console.log(a);
console.log(b);
console.log(c);