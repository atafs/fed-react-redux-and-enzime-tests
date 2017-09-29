class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    speak() {
        console.log(`I am ${this.name} and I am ${this.color}!!`);
    }
}

const lion = new Animal('Mufasa', 'golder')
console.log(lion);

lion.speak();
