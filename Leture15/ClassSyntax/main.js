let carConfiguration = {
    name : "BMW",
    price : "$2000",
    color : "red",
    isDiskBrake: true
}

class car{
    constructor(carConfiguration){
        
        this.name = carConfiguration.name;
        this.price = carConfiguration.price;
        this.color = carConfiguration.color
        this.isDiskBrake = carConfiguration.isDiskBrake
    }

    // Normal function

    getCarName(){
        console.log(`the name of car is: ${this.name}`);
    }

    //getter function 
    get getPrice(){
        return this.price
    }

    //setter function

    set setPrice(newPrice){
        if(newPrice < 0){
            this.price = 0
        }
        else{
            this.price - newPrice
        }
    }

    static print(){
        console.log(`this is a static function working on the car class`)
    }
}

class RacingCar extends car{
    constructor(carConfiguration , maxSpeed, engine, weight){
        super(carConfiguration)

        this.maxSpeed = maxSpeed;
        this.engine = engine;
        this.weight = weight;
    }
    getCarName(){
        super.getCarName();
        console.log(this.name)
    }


}


// const c1 = new car(carConfiguration);


 const r1 = new RacingCar(carConfiguration, "400", "v8", "500kg")