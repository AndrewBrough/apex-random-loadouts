import React, { FC } from "react";

import { Loadout as LoadoutType } from "../../data/types/Loadout";
import { ApexData } from "../../data/apex.data";

import { RerollButton } from "../RerollButton";
import { useRandomLoadout } from "../../data/hooks/useRandomLoadout";

import "./Loadout.scss";

interface Props {
  loadout: LoadoutType;
  setLoadout: (loadout: LoadoutType) => void;
}

const Loadout: FC<Props> = ({ loadout, setLoadout }) => {
  const { rerollCharacter, rerollWeapon1, rerollWeapon2 } = useRandomLoadout();

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
        {getWeaponName(
          loadout.weapon1.collectionIndex,
          loadout.weapon1.weaponIndex
        )}
        <RerollButton onClick={() => setLoadout(rerollWeapon1(loadout))} />
      </h4>
      <h6>and</h6>
      <h4>
        <small>the</small>
        {getWeaponName(
          loadout.weapon2?.collectionIndex,
          loadout.weapon2?.weaponIndex
        )}
        <RerollButton onClick={() => setLoadout(rerollWeapon2(loadout))} />
      </h4>
    </>
  );
};

export { Loadout };
