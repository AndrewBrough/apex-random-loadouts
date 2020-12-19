import { Collection } from "./types/Collection";

type ApexDataType = {
  character: string[];
  collections: Collection[];
};

const ApexData: ApexDataType = {
  character: [
    "Bloodhound",
    "Gibraltar",
    "Lifeline",
    "Pathfinder",
    "Wraith",
    "Bangalore",
    "Caustic",
    "Mirage",
    "Octane",
    "Wattson",
    "Crypto",
    "Revenant",
    "Loba",
    "Rampart",
    "Horizon",
  ],
  collections: [
    {
      name: "Assault Rifles",
      weapons: [
        "VK-47 Flatline",
        "G7 Scout",
        "Hemlock Burst AR",
        "R-301 Carbine",
        "HAVOK Rifle",
      ],
    },
    {
      name: "Sub Machine Guns",
      weapons: ["Alternator SMG", "Prowler Burst PDW" /*"R-99"*/, "Volt SMG"],
    },
    {
      name: "Light Machine Guns",
      weapons: ["Devotion", "Spitfire", "L-Star"],
    },
    {
      name: "Sniper Rifles",
      weapons: [
        "Longbow DMR",
        "Triple Take",
        "Charge Rifle",
        "Sentinel",
        // "Kraber",
      ],
    },
    {
      name: "Shotguns",
      weapons: ["EVA-8 Auto", "Mastiff", "Mozambique" /*"Peacekeeper"*/],
    },
    {
      name: "Pistols",
      weapons: ["RE-45 Auto", "P2020", "Wingman"],
    },
  ],
};

export { ApexData };
