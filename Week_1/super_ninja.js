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
        console.log(this.name, this.strength, this.speed, this.health)
    }
    drinkShake() {
        this.health += 10;
    }
}

class Sensei {
    constructor(name, health = 90, speed = 3, strength = 3, wisdom = 10) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
        this.wisdom = wisdom;
    }
    sayName() {
        console.log(this.name)
    }
    showStats() {
        console.log(this.name, this.strength, this.speed, this.health, this.wisdom)
    }
    speakWisdom() {
        Ninja.drinkShake()
    }
}