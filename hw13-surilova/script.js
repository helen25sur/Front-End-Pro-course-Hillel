// Создание одного солдата
function Unit(type, health, maxHealth, maxDistance) {
  this.type = type;
  this.health = health;
  this.maxHealth = maxHealth;
  this.maxDistance = maxDistance;
}

Unit.prototype.isReadyToMove = function(distance) {
  if (distance <= this.maxDistance) {
    return true;
  }
  return false;
};

Unit.prototype.isReadyToFight = function() {
  if (this.health >= (this.maxHealth / 2)) {
    return true;
  }
  return false;
};

Unit.prototype.restore = function() {
  if (this.health < this.maxHealth) {
    this.health = this.maxHealth;
    return this.health;
  }
};

Unit.prototype.clone = function() {
  return {
    type: this.type,
    health: this.health,
    maxHealth: this.maxHealth,
    maxDistance: this.maxDistance
  };
};

// Создание армии солдатов

function Army(defaultUnits) {
  this.units = [];
  if (defaultUnits) {
    this.combineUnits(defaultUnits);
  }
}

Army.prototype.isReadyToMove = function(distance) {
  return this.units.every(item => item.maxDistance >= distance);
};

Army.prototype.isReadyToFight = function() {
  return this.units.every(item => item.health >= (item.maxHealth / 2));
};

Army.prototype.restore = function() {
  return this.units.map(item => item.health = item.maxHealth);
};

Army.prototype.getReadyToMoveUnits = function(distance) {
  return this.units.filter(item => item.maxDistance >= distance);
};

Army.prototype.combineUnits = function(arrUnits) {
  return arrUnits.forEach(item => this.units.push(item));
};

Army.prototype.cloneUnit = function(index) {
  return {
    type: this.units[index].type,
    health: this.units[index].health,
    maxHealth: this.units[index].maxHealth,
    maxDistance: this.units[index].maxDistance
  };
};

const u1 = new Unit('type1', '950', '950', '1000');
const u2 = new Unit('type2', '850', '1000', '900');
const u3 = new Unit('type3', '1050', '1100', '1200');
const u4 = new Unit('type2', '800', '1000', '900');

const unitArmy = [u1, u2, u3, u4];

const u5 = new Unit('type4', '700', '1150', '1500');
const u6 = new Unit('type4', '900', '1050', '1500');
const unitArmy2 = [u5, u6];

const newArmy = new Army(unitArmy);

// newArmy.combineUnits(unitArmy2);


// Животное -> Млекопитающее -> Енот

const animal = {
  name: 'Animal',
  gender: 'male',
  jumps() {
    console.log(`${this.name} jumps`);
    return true;
  },
  runs() {
    console.log(`${this.name} runs`);
    return true;
  }
};

const mammal = {
  name: 'Mammal',
  __proto__: animal,
  lactate() {
    if (this.gender === 'female') {
      return true;
    }
    return false;
  }
};

const raccoon = {
  name: 'Raccoon',
  __proto__: mammal,
  steal() {
    console.log(`${this.name} steals`);
    return true;
  }
};

console.log(raccoon);
