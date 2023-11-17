import { ApexData } from "@data/apex.data";
import { LoadoutType } from "@data/types/Loadout";
import { WeaponDefinition } from "@data/types/WeaponDefinition";

const useRandomLoadout = () => {
  const getRandomCharacterIndex = () =>
    Math.floor(Math.random() * ApexData.character.length);

  //gets one of weapon type (assault rifle, smg etc)
  const getRandomCollectionIndex = () =>
    Math.floor(Math.random() * ApexData.collections.length);

  //gets one random weapon from weapon type
  const getRandomCollectionWeaponIndex = (collectionIndex: number) =>
    Math.floor(
      Math.random() * ApexData.collections[collectionIndex].weapons.length
    );

  const getRandomWeapon = (): WeaponDefinition => {
    const collectionIndex = getRandomCollectionIndex();
    const weaponIndex = getRandomCollectionWeaponIndex(collectionIndex);
    const weapon: WeaponDefinition = {
      collectionIndex,
      weaponIndex,
    };
    return weapon;
  };

  const createLoadout = () => {
    const newLoadout: LoadoutType = {
      character: getRandomCharacterIndex(),
      weapon1: getRandomWeapon(),
      weapon2: getRandomWeapon(),
    };
    return newLoadout;
  };

  const rerollCharacter = (loadout: LoadoutType) => {
    const newLoadout: LoadoutType = {
      ...loadout,
      character: getRandomCharacterIndex(),
    };
    return newLoadout;
  };

  const rerollWeapon1 = (loadout: LoadoutType) => {
    const newLoadout: LoadoutType = {
      ...loadout,
    };
    newLoadout.weapon1 = getRandomWeapon();
    return newLoadout;
  };

  const rerollWeapon2 = (loadout: LoadoutType) => {
    const newLoadout: LoadoutType = {
      ...loadout,
    };
    newLoadout.weapon2 = getRandomWeapon();
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
