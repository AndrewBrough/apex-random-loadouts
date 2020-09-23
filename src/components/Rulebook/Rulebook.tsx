import React, { FC } from "react";

import "./Rulebook.scss";

const Rulebook: FC = () => {
  return (
    <section className="rulebook">
      <h2 className="underline">Rulebook</h2>
      <ol>
        <li>You get a new loadout at the start of every game.</li>
        <li>
          You can only use the first two guns you see on drop until you find one
          of your two assigned guns.
        </li>
        <li>
          <strong>Bonus</strong> - If you can't find your assigned gun after
          looting one full area, you can use one of the same type (eg. You
          rolled a Triple Take, you may use a sentinel, longbow or charge rifle)
          but you MUST switch when you find your assigned gun
        </li>
      </ol>
    </section>
  );
};

export { Rulebook };
