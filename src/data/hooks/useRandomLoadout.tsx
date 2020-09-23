import { Loadout as LoadoutType } from "../types/Loadout";
import { ApexData } from "../apex.data";

const useRandomLoadout = () => {
  const getRandomCharacterIndex = () =>
    Math.floor(Math.random() * ApexData.character.length);
  const getRandomCollectionIndex = () =>
    Math.floor(Math.random() * ApexData.collections.length);
  const getRandomCollectionWeaponIndex = (collectionIndex: number) =>
    Math.floor(
      Math.random() * ApexData.collections[collectionIndex].weapons.length
    );

  const createLoadout = () => {
    const newLoadout: LoadoutType = {
      character: getRandomCharacterIndex(),
      weapons: [[getRandomCollectionIndex()], [getRandomCollectionIndex()]],
    };
    newLoadout.weapons[0][1] = getRandomCollectionWeaponIndex(
      newLoadout.weapons[0][0]
    );
    const generateWeapon2 = () => {
      newLoadout.weapons[1][1] = getRandomCollectionWeaponIndex(
        newLoadout.weapons[1][0]
      );
      if (newLoadout.weapons[1][1] === newLoadout.weapons[0][1]) {
        console.log("IT MATCH");
        generateWeapon2();
      }
    };
    generateWeapon2();
    return newLoadout;
  };

  const rerollCharacter = (loadout: LoadoutType) => {
    const newLoadout: LoadoutType = {
      ...loadout,
      character: getRandomCharacterIndex(),
      weapons: loadout.weapons,
    };
    return newLoadout;
  };

  const rerollWeapon1 = (loadout: LoadoutType) => {
    const newLoadout: LoadoutType = {
      ...loadout,
    };
    newLoadout.weapons[0][1] = getRandomCollectionWeaponIndex(
      newLoadout.weapons[0][0]
    );
    return newLoadout;
  };

  const rerollWeapon2 = (loadout: LoadoutType) => {
    const newLoadout: LoadoutType = {
      ...loadout,
    };
    newLoadout.weapons[1][1] = getRandomCollectionWeaponIndex(
      newLoadout.weapons[1][0]
    );
    return newLoadout;
  };

  return {
    createLoadout,
    rerollCharacter,
    rerollWeapon1,
    rerollWeapon2,
  };
};

export { useRandomLoadout };
