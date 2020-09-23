import React, { useState } from "react";

import { Loadout as LoadoutType } from "./data/types/Loadout";

import { Loadout } from "./components/Loadout";
import { useRandomLoadout } from "./data/hooks/useRandomLoadout";

import "./styles/index.scss";
import "./App.scss";

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
          <h6 className="subtitle">Random Loadouts</h6>
        </div>
        <button className="randomize-btn" onClick={onRerollClick}>
          Reroll
        </button>
      </div>
      <Loadout loadout={loadout} setLoadout={setLoadout} />
    </div>
  );
}
