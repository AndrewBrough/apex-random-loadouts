import { FC } from "react";

import "./Loadout.scss";

import { LoadoutType } from "@data/types/Loadout";
import { useRandomLoadout } from "@data/hooks/useRandomLoadout";
import { ApexData } from "@data/apex.data";
import { RerollButton } from "@components/RerollButton";

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
          <RerollButton onClick={() => setLoadout(rerollCharacter(loadout))} />
          {ApexData.character[loadout.character]}
        </div>
      </h3>
      <h6>featuring</h6>
      <h4>
        <RerollButton onClick={() => setLoadout(rerollWeapon1(loadout))} />
        <small>the</small>
        {getWeaponName(
          loadout.weapon1.collectionIndex,
          loadout.weapon1.weaponIndex
        )}
      </h4>
      <h6>and</h6>
      <h4>
        <RerollButton onClick={() => setLoadout(rerollWeapon2(loadout))} />
        <small>the</small>
        {getWeaponName(
          loadout.weapon2?.collectionIndex,
          loadout.weapon2?.weaponIndex
        )}
      </h4>
    </>
  );
};

export { Loadout };
