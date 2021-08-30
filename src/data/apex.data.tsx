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
    "Fuse",
    "Valkyrie",
    "Seer",
  ],
  collections: [
    {
      name: "Assault Rifles",
      weapons: [
        "VK-47 Flatline",
        "Hemlock Burst AR",
        "R-301 Carbine",
        "HAVOK Rifle",
      ],
    },
    {
      name: "Marksman Weapons",
      weapons: ["G7 Scout", "30-30 Repeater", "Bocek Compound Bow"],
    },
    {
      name: "Sub Machine Guns",
      weapons: [
        // "Alternator SMG",
        "Prowler Burst PDW",
        "R-99",
        "Volt SMG",
      ],
    },
    {
      name: "Light Machine Guns",
      weapons: [
        "Devotion LMG",
        //"M600 Spitfire",
        "L-Star EMG",
        "Rampage",
      ],
    },
    {
      name: "Sniper Rifles",
      weapons: [
        "Longbow DMR",
        // "Triple Take",
        "Charge Rifle",
        "Sentinel",
        // "Kraber",
      ],
    },
    {
      name: "Shotguns",
      weapons: ["EVA-8 Auto", "Mastiff", "Mozambique", "Peacekeeper"],
    },
    {
      name: "Pistols",
      weapons: ["RE-45 Auto", "P2020", "Wingman"],
    },
  ],
};

export { ApexData };
