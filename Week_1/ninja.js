class Ninja {
    constructor(name, health = 90, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(this.name)
    }
    showStats() {
        console.log(this.name, this.health, this.speed, this.strength)
    }
    drinkShake() {
        this.health += 10;
    }
}

let one = new Ninja("Diego", 100, 5, 10)
let two = new Ninja("Test")

one.sayName()
one.showStats()
two.sayName()
two.showStats()