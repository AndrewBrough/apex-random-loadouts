import React, { FC } from "react";

import "./RerollButton.scss";

const RerollButton: FC<React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>> = ({ ...rest }) => {
  return (
    <button className="icon small reroll-button" {...rest}>
      <i className="material-icons">refresh</i>
    </button>
  );
};

export { RerollButton };
