const number = -56;    // tc2 => 45 tc3 => 22

let Number_check = new Promise((resolve,reject) => {
    if(number>0 && number%2 == 0){
        resolve("The number is even");
    }
    else if(number>0 && number%2 != 0){
        resolve("The number is odd");
    }
    else{
        reject(number);
    }
});

Number_check.then(function successValue(result){
    console.log(result);
})

.catch(function errorValue(result){
    console.log("The number is negative");
})

.finally(function always()
{
    console.log('Bye');
})