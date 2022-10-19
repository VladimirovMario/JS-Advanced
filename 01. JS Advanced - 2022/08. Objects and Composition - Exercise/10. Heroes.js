function heroes() {
  // Аt this stage i can't solve this alone
  const canCast = (state) => ({
    cast: (spell) => {
      console.log(`${state.name} cast ${spell}`);
      state.mana--;
    },
  });

  const mage = (name) => {
    let state = {
      name,
      health: 100,
      mana: 100,
    };
    return Object.assign(state, canCast(state));
  };

  const canFight = (state) => ({
    fight: () => {
      console.log(`${state.name} slashes at the foe!`);
      state.stamina--;
    },
  });
  const fighter = (name) => {
    let state = {
      name,
      health: 100,
      stamina: 100,
    };
    return Object.assign(state, canFight(state));
  };

  return { mage, fighter };
}

let create = heroes();
const scorcher = create.mage("Peter Anderson");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("John Hendrix");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);

/*
Peter Anderson cast fireball
Peter Anderson cast thunder
Peter Anderson cast light
John Hendrix slashes at the foe!
99
97
*/
