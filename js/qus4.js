class UberPriceCalculator {
    constructor(distance, duration) {
        this.distance = distance; 
        this.duration = duration; 
    }

    calculatePrice() {
        const BASE_FARE = 2.50;
        const PER_MILE_RATE = 1.50;
        const PER_MINUTE_RATE = 0.20;
        const MIN_FARE = 6.00;

        const totalDistanceCost = this.distance * PER_MILE_RATE;
        const totalDurationCost = this.duration * PER_MINUTE_RATE;

        const totalFare = BASE_FARE + totalDistanceCost + totalDurationCost;

        return Math.max(totalFare, MIN_FARE); 
    }
}


const distance = 5; 
const duration = 15; 

const calculator = new UberPriceCalculator(distance, duration);
const price = calculator.calculatePrice();
console.log("Total Price:", price);
