class Key {
  private signature: number;
  constructor() {
    this.signature = Math.floor(Math.random() * 20240413);
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Person entered the house.");
    } else console.log("First you need to open the door!");
  }
}

class MyHouse extends House {
  public openDoor(key: Key): void {
    // key matching check
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Door opened.");
    } else console.log("That not the right key!");

    // if (this.door) return;
    // if (key.getSignature() === this.key.getSignature()) this.door = true;
    // else console.log('That not the right key!');
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
