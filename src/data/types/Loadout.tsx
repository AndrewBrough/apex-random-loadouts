import { WeaponDefinition } from "./WeaponDefinition";

export type Loadout = {
  character: number;
  weapon1: WeaponDefinition;
  weapon2: WeaponDefinition;
};
