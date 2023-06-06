class Card {
    constructor (name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    showUnit() {
        console.log(`Name : ${this.name}, Cost : ${this.cost}, Power : ${this.power}, Resilience : ${this.resilience}`)
    }

    attack(target){
        if (target instanceof Unit){
            target.resilience -= this.power
        }
        else {
            throw new Error("Target must be a unit!");
        }
    }
}

class Effect extends Card {
    constructor (name, cost, text, stat, magnitude) {
        super(name, cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if( target instanceof Unit ) {
            this.stat == 'power'? target.power += this.magnitude : target.resilience += this.magnitude;
        } 
        else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

let red = new Unit ("Red Belt Ninja", 3, 3, 4)
let effect1 = new Effect ("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", +3)
let black = new Unit ("Black Belt Ninja", 4, 5, 4)
let effect2 = new Effect ("Unhandled Promise Rejection", 2, "reduce target's resiliencee by 2", "resilience", -2)
let effect3 = new Effect ("Pair Programming", 3, "increase target's power by 2", "power", +2)

red.showUnit()
// console.log("Hard Algorithm is played on Red Belt Ninja")
effect1.play(red)
red.showUnit()
black.showUnit()
// console.log("Unhandled Promise Rejection is played on Red Belt Ninja")
effect2.play(red)
red.showUnit()
// console.log("Pair Programming is played on Red Belt Ninja")
effect3.play(red)
red.showUnit()
// console.log("Red Belt Ninja attacks Black Belt Ninja")
red.attack(black)
black.showUnit()
