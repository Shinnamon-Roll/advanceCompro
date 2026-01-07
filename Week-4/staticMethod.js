class Dog {
    constructor(name) {
        this._name = name;
    }

    introduce() {
        console.log(`woof! My name is ${this._name}`);
    }

    static bark() {
        console.log("woof woof")
    }
}

const dog1 = new Dog("Buster");
dog1.introduce();
Dog.bark();