class Vehicle{

    #capacity = 4000;

    constructor(name,capacity){
        this.name = name;
        this.#capacity = capacity;
    }

    startEngine(){
        console.log(this.name + ' can start and has the capacity of ' + this.#capacity +'w');
    }

    stopEngine(){
        console.log(this.name + ' can stop and has the capacity of ' + this.#capacity+'w');
    }

    run(){
        console.log(this.name + ' can run on manual mode');
    }

    static brake(){
        console.log('We are calling static method');
    }

    callCapacity(){
        console.log(this.name + ' has ' + this.#capacity+'w capacity');
    }

    #fixCapacity(value){
        return value;
    }

    get capacity(){
        return this.#capacity;
    }
    set capacity(value){
        this.#capacity = this.#fixCapacity(value);
    }
}

class Two_W extends Vehicle{

    constructor(name,capacity,tyre,engine){
        super(name,capacity);
        this.tyre = tyre;
        this.engine = engine;
    }

    engine(){
        console.log(this.name+' has ' + this.engine + ' engine');
    }

    tyre(){
        console.log(this.name+' has '+ this.tyre + ' tyres');

    }
}

class Three_W extends Vehicle{

    constructor(name,capacity,tyre,engine){
        super(name,capacity);
        this.tyre = tyre;
        this.engine = engine;
    }

    engine(){
        console.log(this.name+' has ' + this.engine + ' engine');
    }

    tyre(){
        console.log(this.name+' has '+ this.tyre + ' tyres');

    }
}

const V1 = new Two_W('Honda',2000,2,3000);
console.log(V1.name);
V1.capacity = 5000;   // setter
console.log(V1.capacity);   // getter
console.log(V1.tyre);
console.log(V1.engine);

V1.startEngine();
V1.stopEngine();
V1.run();
Vehicle.brake();
V1.callCapacity();

const V2 = new Three_W('Auto',2500,3,3500);
console.log(V2.name);
V2.capacity = 7000;   // setter
console.log(V2.capacity);   // getter
console.log(V2.tyre);
console.log(V2.engine);

V2.startEngine();
V2.stopEngine();
V2.run();
Vehicle.brake();
V2.callCapacity();


