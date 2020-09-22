import React, { FC } from "react";
import { Loadout as LoadoutType } from "../../data/types/Loadout";
import { ApexData } from "../../data/apex.data";

import "./Loadout.scss";

interface Props {
  loadout: LoadoutType;
}

const Loadout: FC<Props> = ({ loadout }) => {
  if (!loadout) {
    return null;
  }

  const getWeaponName = (collectionIndex: number, weaponIndex: number) => {
    return ApexData.collections[collectionIndex].weapons[weaponIndex];
  };

  return (
    <>
      <h1 className="character-name">
        <div>{ApexData.character[loadout.character]}</div>
      </h1>
      <h5>featuring...</h5>
      <h3>
        <small>the</small>
        {getWeaponName(loadout.weapons[0][0], loadout.weapons[0][1])}
      </h3>
      <h6>and</h6>
      <h3>
        <small>the</small>
        {getWeaponName(loadout.weapons[1][0], loadout.weapons[1][1])}
      </h3>
    </>
  );
};

export { Loadout };