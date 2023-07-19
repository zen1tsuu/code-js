'use strict';

class Character {
    constructor(name, vision) {
        this.name = name;
        this.vision = vision;
    }
    useVision = () => console.log(`${this.name} hitting with the ${this.vision} element`);
}

// спільний предок класів Lawrance та Qixing 
class Friend extends Character {
    constructor(name, vision, age, phrase, ultimate) {
        super(name, vision);
        this.age = age;
        this.phrase = phrase;
        this.ultimate = ultimate;
    }
    introduction = () => console.log(`My name is ${this.name}`);
    useUltimate = () => console.log(`${this.name} uses ${this.ultimate} and saying "${this.phrase}"`);
    jump = () => console.log(`${this.name} jumped`);
}

// предок класу ElevenFatuiHarbringers
class Fatui extends Character {
    #clan = 'Fatui';
    constructor(name, vision, codename, status, rank) {
        super(name, vision);
        this.codename = codename;
        this.status = status;
        this.rank = rank;
    }
    sayCodename = () => console.log(`${this.name} codename is ${this.codename}`);
    statusReport = () => console.log(`${this.name} is ${this.status}`);
    sayRank = () => console.log(`${this.name}'s rank is ${this.rank}`);
}

class Lawrance extends Friend {
    // приватна влластивість, неможливо визвати ззовні та наслідувати
    #clan = 'Lawrence clan';
    constructor(name, vision, age, phrase, ultimate, fame) {
        super(name, vision, age, phrase, ultimate);
        // унікальна властивість класу Лоуренс
        this.fame = fame;
    }
    revenge = () => console.log(`Lawrence clan will remember your bad actions`);
    checkFame = () => console.log(`I have a ${this.fame}`);
}

class Qixing extends Friend {
    // приватна влластивість, неможливо визвати ззовні та наслідувати
    #clan = 'Liyue Qixing';
    constructor(name, vision, age, phrase, ultimate, willPower) {
        super(name, vision, age, phrase, ultimate);
        // унікальна властивість класу Цисін
        this.wildPower = willPower;
    }
    checkWillPower = () => console.log(`${this.name} has a ${this.wildPower}`);
}

class Archons extends Friend {
    // приватна влластивість, неможливо визвати ззовні та наслідувати
    #power = "God's powers";
    constructor(name, vision, age, phrase, ultimate, intelligence) {
        super(name, vision, age, phrase, ultimate);
        // унікальна властивість класу Archons
        this.intelligence = intelligence;
    }
    checkIntelligence = () => console.log(`I'm ${this.intelligence}`);
}

class ElevenFatuiHarbringers extends Fatui {
    // приватна влластивість, неможливо визвати ззовні та наслідувати
    #description = 'kind of bad guys';
    constructor (name, vision, codename, status, rank, weapon, birthDay) {
        super(name, vision, codename, status, rank);
        this.weapon = weapon;
        // унікальна властивість класу ElevenFatuiHarbringers
        this.birthDay = birthDay;
    } 
    yell = () => console.log('We are bad guys!');
    howOld = () => console.log(`My birthday is on ${this.birthDay}`);
}

const Lawrance1 = new Lawrance('Eula', 'cryo', 25, 'Vengance will be mine!', 'Glacial Illumination', 'bad fame');
const Qixing1 = new Qixing('Keqing', 'electro', 20, 'Nowhere to hide!', 'Starward Sword', 'high willpower');
const Archons1 = new Archons('Nahida', 'dendro', 500, 'The Temple of Wisdom', 'Illusory Heart', 'very smart');
const ElevenFatuiHarbringers1 = new ElevenFatuiHarbringers('Tartaglia', 'hydro', 'Young lord', 'alive', '11', 'bow', 'July 20th');

// Lawrance1.introduction();
// Lawrance1.useVision();
// Lawrance1.useUltimate();
// Lawrance1.jump();
// Lawrance1.checkFame();

// Qixing1.introduction();
// Qixing1.useVision();
// Qixing1.useUltimate();
// Qixing1.checkWillPower();

Archons1.introduction();
Archons1.useVision();
Archons1.useUltimate();
Archons1.checkIntelligence();

// ElevenFatuiHarbringers1.useVision();
// ElevenFatuiHarbringers1.sayCodename();
// ElevenFatuiHarbringers1.statusReport();
// ElevenFatuiHarbringers1.sayRank();
// ElevenFatuiHarbringers1.howOld();
// ElevenFatuiHarbringers1.yell();