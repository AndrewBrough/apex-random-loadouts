import { useState } from "react";

import "./styles/index.scss";
import "./App.scss";

import { Loadout } from "@components/Loadout";
import { Rulebook } from "@components/Rulebook";
import { useRandomLoadout } from "@data/hooks/useRandomLoadout";
import { LoadoutType } from "@data/types/Loadout";

export default function App() {
  const { createLoadout } = useRandomLoadout();

  const [loadout, setLoadout] = useState<LoadoutType>(createLoadout());

  const onRerollClick = () => {
    setLoadout(createLoadout());
  };

  return (
    <div className="App">
      <div className="title-row">
        <div>
          <h1 className="app-name">Apex</h1>
          <h6 className="subtitle">Random Loadouts [S19 Edition]</h6>
        </div>
        <button onClick={onRerollClick}>Reroll</button>
      </div>
      <Loadout loadout={loadout} setLoadout={setLoadout} />
      <Rulebook />
    </div>
  );
}
