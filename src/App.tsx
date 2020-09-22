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
        <h1>Apex</h1>
        <button className="randomize-btn" onClick={onRandomize}>Just Fuck Me Up</button>
      </div>
      <Loadout loadout={loadout} />
    </div>
  );
}
