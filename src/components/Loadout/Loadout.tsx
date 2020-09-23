import React, { FC, useState } from "react";

import { Loadout as LoadoutType } from "../../data/types/Loadout";
import { ApexData } from "../../data/apex.data";

import { RerollButton } from "../RerollButton";
import { useRandomLoadout } from "../../data/hooks/useRandomLoadout";

import "./Loadout.scss";

const Loadout: FC = () => {
  const {
    createLoadout,
    rerollCharacter,
    rerollWeapon1,
    rerollWeapon2,
  } = useRandomLoadout();
  const [loadout, setLoadout] = useState<LoadoutType>(createLoadout());

  const onRerollClick = () => {
    setLoadout(createLoadout());
  };

  if (!loadout) {
    return null;
  }

  const getWeaponName = (collectionIndex: number, weaponIndex: number) => {
    return ApexData.collections[collectionIndex].weapons[weaponIndex];
  };

  return (
    <>
      <h3 className="character-name">
        <div>
          {ApexData.character[loadout.character]}
          <RerollButton onClick={() => setLoadout(rerollCharacter(loadout))} />
        </div>
      </h3>
      <h6>featuring</h6>
      <h4>
        <small>the</small>
        {getWeaponName(loadout.weapons[0][0], loadout.weapons[0][1])}
        <RerollButton onClick={() => setLoadout(rerollWeapon1(loadout))} />
      </h4>
      <h6>and</h6>
      <h4>
        <small>the</small>
        {getWeaponName(loadout.weapons[1][0], loadout.weapons[1][1])}
        <RerollButton onClick={() => setLoadout(rerollWeapon2(loadout))} />
      </h4>
      <button onClick={onRerollClick}>Reroll</button>
    </>
  );
};

export { Loadout };
