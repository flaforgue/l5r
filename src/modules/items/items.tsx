import type { ReactNode } from "react";
import { Armor0Image } from "../../components/images/armor-0-image";
import { Armor1Image } from "../../components/images/armor-1-image";
import { Armor2Image } from "../../components/images/armor-2-image";
import { Armor3Image } from "../../components/images/armor-3-image";
import { Bokken1Image } from "../../components/images/bokken-1-image";
import { FistsImage } from "../../components/images/fists-image";
import { Katana1Image } from "../../components/images/katana-1-image";
import { Mace1Image } from "../../components/images/mace-1-image";
import { Bow1Image } from "../../components/images/bow-1-image";
import { PoisonImage } from "../../components/images/poison-image";

export interface Item {
  id: string;
  label: string;
  description: string;
  shortDescription: string;
  illustration: ReactNode;
}

export const ARMORS: Item[] = [
  {
    id: "7cb1a34b-fac5-44f2-b7b9-3f7c40b91d06",
    label: "Tenue ordinaire",
    description: `Parfaite pour se mêler à la foule.
    Résistance : 0
  `,
    shortDescription: "R. 0",
    illustration: (<Armor0Image />),
  },
  {
    id: "97f64425-6399-49a5-8084-0110b9c64368",
    label: "Armure discrète",
    description: `Permet de se protéger sans attirer l'attention.
    Résistance : 1
  `,
    shortDescription: "R. 1",
    illustration: (<Armor1Image />),
  },
  {
    id: "6bb64b1d-9a75-457e-a891-cb82c811ea29",
    label: "Armure de Samouraï",
    description: `Une armure qui protège efficacement et affiche votre statut.
    Résistance : 2
  `,
    shortDescription: "R. 2",
    illustration: (<Armor2Image />),
  },
  {
    id: "976d98b7-15c4-4fe3-84da-44d310cdb605",
    label: "Armure de Commandant",
    description: `Une armure de qualité offerte aux officiers.
    Résistance : 3
  `,
    shortDescription: "R. 3",
    illustration: (<Armor3Image />),
  },
];

export const WEAPONS: Item[] = [
  {
    id: "d93ffc13-b97f-4667-890b-e0357c139f9b",
    label: "Poings",
    description: `Il n'est pas toujours nécessaire d'être armé pour se défendre.
    Arts Martiaux (👊)
    Portée : 0
    Dégâts : 1
  `,
    shortDescription: "D: 1",
    illustration: (<FistsImage />),
  },
  {
    id: "103067ba-0606-4219-83c0-f23baf4cfa45",
    label: "Bokken",
    description: `Un katana de bois utilisé à l'entraînement.
    Arts Martiaux (⚔️)
    Portée : 1
    Dégâts : 2
  `,
    shortDescription: "D: 2",
    illustration: (<Bokken1Image />),
  },
  {
    id: "41ca8bc6-74f9-4943-abae-b18048fbb6e5",
    label: "Katana",
    description: `Un katana de bonne facture.
    Arts Martiaux (⚔️)
    Portée : 1
    Dégâts : 4
  `,
    shortDescription: "D: 4",
    illustration: (<Katana1Image />),
  },
  {
    id: "0e94bd61-f85a-4160-be06-91630df47c3a",
    label: "Masse",
    description: `Une masse, aussi simple qu'efficace.
    Arts Martiaux (⚔️)
    Portée : 1
    Dégâts : 4 (contondants)
    Si tenu à 2 mains : +1 dégât
  `,
    shortDescription: "D: 4+1",
    illustration: (<Mace1Image />),
  },
  {
    id: "418e07e5-0edc-4cee-a7dd-3626a0a52e0e",
    label: "Arc",
    description: `Un arc polyvalent qui peut s'utilier à la chasse ou sur le champ de bataille.
    Arts Martiaux (🏹)
    Portée : 2 - 4
    Dégâts : 4
  `,
    shortDescription: "D: 5+1",
    illustration: (<Bow1Image />),
  },
];

export const ITEMS = [
  ...ARMORS,
  ...WEAPONS,
  {
    id: "49f17ad7-31f4-4edc-8056-219183072c35",
    label: "Poison léger",
    description: `Un poison léger qui embrouille sa cible pendant quelques minutes.
    Inflige 2 coups critiques.
  `,
    shortDescription: "",
    illustration: (<PoisonImage />),
  },
  {
    id: "58858283-0e6c-4a98-bb81-a66d94171230",
    label: "Poison puissant",
    description: `Un poison qui affaiblit sa cible de manière prolongée.
    Inflige 3 coups critiques.
  `,
    shortDescription: "",
    illustration: (<PoisonImage />),
  },
];

export function getItemById(id: string): Item | undefined {
  return ITEMS.find((item) => item.id === id);
}

export function removeItemById(itemIds: string[], itemToRemoveId: string) {
  const newItemIds = [...itemIds];
  const index = newItemIds.findIndex((itemId) => itemId === itemToRemoveId);
  if (index !== -1) {
    newItemIds.splice(index, 1);
  }

  return newItemIds;
}
