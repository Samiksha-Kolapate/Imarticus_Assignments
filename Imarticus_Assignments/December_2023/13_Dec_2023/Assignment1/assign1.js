var normal = [200,300,250,120,400];
var premium = [100,400,550,100,400];
var golden = [300,370,350,130,450];

const tt = function(disc){
    this.disc = disc;    
    this.withDisc = function(arr){   
        let output = [];   
        arr.forEach(function(element){
            let withDisc = element - ((this.disc)/100) * element ;
            output.push(withDisc);
        },this);
        return output;
    };
};

const normalRate = new tt(5);
const premiumRate = new tt(15);
const goldenRate = new tt(20);

console.log(normalRate.withDisc(normal));
console.log(premiumRate.withDisc(premium));
console.log(goldenRate.withDisc(golden));