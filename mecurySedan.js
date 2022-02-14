import Vehicle from "vehicleBaseClass.js";

class Car extends Vehicle{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maximumPassengers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200
        this.fuel = 100
        this.scheduleService = false;
    }
    
    loadPassenger(num){
        if (this.passenger < this.maxPassengers){
            if ((num + this.passenger) <= this.maximumPassengers){
                this.passenger = num;
                return this.passenger:
            } else {
                console.log(this.model + " " + this.make + "does not have room for everyone.")
            }
        } else { 
            console.log(this.model + " " this.make + "is full of passengers.")
        }
    }
    start(){
        if (this.fuel > 0){
            console.log("start car.")
        }else{
            return this.started = false;
    
        }
    }
    scheduleService(mileage){
        if(this.mileage > 30000) {
            this.scheduleService == true
            return this.scheduleService
        }
    }
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)