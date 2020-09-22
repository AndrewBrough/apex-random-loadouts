import React, { useState } from "react";

import "./styles/index.scss";
import "./App.scss";

import { Loadout as LoadoutType } from "./data/types/Loadout";
import { Loadout } from "./components/Loadout";
import { useRandomLoadout } from "./data/hooks/useRandomLoadout";

export default function App() {
  const { generate } = useRandomLoadout();
  const [loadout, setLoadout] = useState<LoadoutType>(generate());

  const onRandomize = () => {
    setLoadout(generate());
  };

  return (
    <div className="App">
      <div className="title-row">
        <div>
          <h1 className="app-name">Apex</h1>
          <h2 className="subtitle">Random Loadouts</h2>
        </div>
        <button className="randomize-btn outline" onClick={onRandomize}>
          New Loadout
        </button>
      </div>
      <Loadout loadout={loadout} />
    </div>
  );
}
