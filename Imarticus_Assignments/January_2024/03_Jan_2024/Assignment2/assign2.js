const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('The p1 promise is resolved ');
        resolve(10);
    },4000);
});

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('The p2 promise is resolved ');
        resolve(20);
    },2000);
});

const p3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('The p3 promise is resolved ');
        resolve(30);
    },3000);
});

const p4 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('The p4 promise is rejected ');
        reject(40);
    },6000);
});

const p5 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('The p5 promise is resolved ');
        resolve(50);
    },1000);
});

const p6 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('The p6 promise is rejected ');
        reject(60);
    },5000);
});

/* Promise.all([p1,p2,p3,p4,p5,p6]).then((result) => {    
    console.log('result is '+result);
}) */

/* Promise.race([p1,p2,p3,p4,p5,p6]).then((result) => {    
    console.log('result is '+result);
}) */

Promise.any([p1,p2,p3,p4,p5,p6]).then((result) => {    
    console.log('result is '+result);
})

.catch((result) => {   // reject
    console.log(result);
})