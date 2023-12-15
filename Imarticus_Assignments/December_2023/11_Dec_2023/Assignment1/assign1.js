// 1.Using simple function
function simpleInterest1(p,r,t){
    let res = (p*r*t)/100;
    console.log('The S.I. is '+ res);
}
simpleInterest1(10,20,30);

//----------------------------------------------------------------------------------------------------------------------//
// 2.Using function expression
let simpleInterest2 = function (p,r,t){
    return (p*r*t)/100;
}
console.log('The S.I. is '+ simpleInterest2(10,20,30));

//----------------------------------------------------------------------------------------------------------------------//
// 3.Using Arrow function 
let simpleInterest3 = (p,r,t) => {
    return (p*r*t)/100;
}
console.log('The S.I. is '+ simpleInterest3(10,20,30));

