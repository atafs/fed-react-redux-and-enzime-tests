class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    speak() {
        console.log(`I am ${this.name} and I am ${this.color}!!`);
    }
}

class Lion extends Animal {
    constructor(name, color, role, home) {
        super(name, color);
        this.role = role;
        this.home = home;
    }

    rore() {
        console.log(`I'm the ${this.role} of ${this.home}`);
    }
}

const lion = new Lion('Mufasa', 'golder', 'king', 'Pride rock')
console.log(lion);

lion.speak();
lion.rore();
