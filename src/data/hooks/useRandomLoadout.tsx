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

  const generate = () => {
    const newLoadout: LoadoutType = {
      character: getRandomCharacterIndex(),
      weapons: [[getRandomCollectionIndex()], [getRandomCollectionIndex()]]
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

  return { generate };
};

export { useRandomLoadout };
