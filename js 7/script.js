'use strict';

function Character(name, vision){
    this.name = name;
    this.vision = vision;
}

Character.prototype.useVision = function() {
    return console.log(`${this.name} hitting with the ${this.vision} element`);
}

function Friend(name, vision, age, phrase, ultimate) {
    Character.call(this, name, vision);
    this.age = age;
    this.phrase = phrase;
    this.ultimate = ultimate;
}

Friend.prototype = Object.create(Character.prototype);

Friend.prototype.introduction = function() {
    return console.log(`My name is ${this.name}`);
}

Friend.prototype.useUltimate = function() {
    return console.log(`${this.name} uses ${this.ultimate} and saying "${this.phrase}"`);
}

Friend.prototype.jump = function() {
    return console.log(`${this.name} jumped`);
}

function Fatui(name, vision, codename, status, rank) {
    Character.call(this, name, vision);
    this.codename = codename;
    this.status = status;
    this.rank = rank;
}

Fatui.prototype = Object.create(Character.prototype);

Fatui.prototype.sayCodename = function() {
    return console.log(`${this.name} codename is ${this.codename}`);
}

Fatui.prototype.statusReport = function() {
    return console.log(`${this.name} is ${this.status}`);
}

Fatui.prototype.sayRank = function() {
    return console.log(`${this.name}'s rank is ${this.rank}`);
}

function Lawrance(name, vision, age, phrase, ultimate, fame) {
    Friend.call(this, name, vision, age, phrase, ultimate);
    // унікальна властивість класу Лоуренс
    this.fame = fame;
}

Lawrance.prototype = Object.create(Friend.prototype);

Lawrance.prototype.revenge = function() {
    return console.log(`Lawrence clan will remember your bad actions`);
}

Lawrance.prototype.checkFame = function() {
    return console.log(`I have a ${this.fame}`);
}

function Qixing(name, vision, age, phrase, ultimate, willPower) {
    Friend.call(this, name, vision, age, phrase, ultimate);
    // унікальна властивість класу Цисін
    this.willPower = willPower;
}

Qixing.prototype = Object.create(Friend.prototype);

Qixing.prototype.checkWillPower = function() {
    return console.log(`${this.name} has a ${this.willPower}`);
}

function Archons(name, vision, age, phrase, ultimate, intelligence) {
    Friend.call(this, name, vision, age, phrase, ultimate);
    // унікальна властивість класу Archons
    this.intelligence = intelligence;
}

Archons.prototype = Object.create(Friend.prototype);

Archons.prototype.checkIntelligence = function() {
    return console.log(`I'm ${this.intelligence}`);
}

function ElevenFatuiHarbringers(name, vision, codename, status, rank, weapon, birthDay) {
    Fatui.call(this, name, vision, codename, status, rank, weapon, birthDay);
    this.weapon = weapon;
    // унікальна властивість класу ElevenFatuiHarbringers
    this.birthDay = birthDay;
}

ElevenFatuiHarbringers.prototype = Object.create(Fatui.prototype);

ElevenFatuiHarbringers.prototype.yell = function() {
    return console.log('We are bad guys!');
}

ElevenFatuiHarbringers.prototype.howOld = function() {
    return console.log(`My birthday is on ${this.birthDay}`);
}

let Lawrance1 = new Lawrance('Eula', 'cryo', 25, 'Vengance will be mine!', 'Glacial Illumination', 'bad fame');
let Qixing1 = new Qixing('Keqing', 'electro', 20, 'Nowhere to hide!', 'Starward Sword', 'high willpower');
let Archons1 = new Archons('Nahida', 'dendro', 500, 'The Temple of Wisdom', 'Illusory Heart', 'very smart');
let ElevenFatuiHarbringers1 = new ElevenFatuiHarbringers('Tartaglia', 'hydro', 'Young lord', 'alive', '11', 'bow', 'July 20th');

// Lawrance1.useVision();
// Lawrance1.introduction();
// Lawrance1.useUltimate();
// Lawrance1.jump();
// Lawrance1.revenge();
// Lawrance1.checkFame();

// Qixing1.useVision();
// Qixing1.introduction();
// Qixing1.useUltimate();
// Qixing1.jump();
// Qixing1.checkWillPower();

// Archons1.useVision();
// Archons1.introduction();
// Archons1.useUltimate();
// Archons1.jump();
// Archons1.checkIntelligence();

ElevenFatuiHarbringers1.useVision();
ElevenFatuiHarbringers1.sayCodename();
ElevenFatuiHarbringers1.statusReport();
ElevenFatuiHarbringers1.sayRank();
ElevenFatuiHarbringers1.howOld();
ElevenFatuiHarbringers1.yell();
