class SI{
    constructor(principal,rate,time){
        this.p = principal;
        this.r = rate;
        this.t = time;
    }

    calculate(){
        return (this.p * this.r * this.t)/100;
    }

    get interest(){
        return this.calculate()
    }

    set interest_principal(principal){
        this.p = principal;
    }

    set interest_rate(rate){
        this.r = rate;
    }

    set interest_time(time){
        this.t = time;
    }
}

const s1 = new SI(1000,5,1);
console.log(s1.interest);

//s1.interest_principal = 1000;
s1.interest_rate = 3;
s1.interest_time = 3;
console.log(s1.interest);


