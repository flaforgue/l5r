import { useCharacterStore } from "../character/stores/character.store";

export interface Alteration {
  id: string;
  label: string;
  description: string;
  apply: () => void;
}

export function useAlterations(): Alteration[] {
  const { conflict, updateConflict } = useCharacterStore();

  return [
    {
      id: "none",
      label: "Aucun état",
      description: "",
      apply: () => { /* empty */ },
    },
    {
      id: "78a41f56-0331-4297-91e4-d113f8f1c890",
      label: "À terre",
      description: "La honte d'être mis à terre cause +1 Conflit (automatique) et se relever consomme le mouvement du prochain tour.",
      apply: () => {
        updateConflict(conflict + 1);
      },
    },
    {
      id: "66d27c30-5dcd-4a53-ac4f-dbfcf86b33e9",
      label: "Désorienté",
      description: "Les sens du personnage sont embrouillés ce qui augmente de 2 le ND de déplacement du personnage et des actions de soutien le ciblant.",
      apply: () => { /* empty */ },
    },
    {
      id: "ff62bde3-703f-4cdc-81f3-8466af5f9510",
      label: "Hébété",
      description: "Le personnage n'arrive plus à se concentrer sur sa tâche ou son environnement qui augmente de 1 le ND de ses tests d'attaque ou actions qui nécessitent de la concentration.",
      apply: () => { /* empty */ },
    },
    {
      id: "50656d18-d5af-4df9-ae94-bf8ee4f7a478",
      label: "Immobilisé",
      description: "Le personnage ne peut ni se déplacer ni changer d'arme ni de posture.",
      apply: () => { /* empty */ },
    },
    {
      id: "2aa82b90-11a2-44f9-a17b-829c2cc9eb5d",
      label: "Déterioré (⚔️)",
      description: "Les ND d'attaque avec cette arme augmentent de 1.",
      apply: () => { /* empty */ },
    },
    {
      id: "40a9206d-6c53-4b62-925f-0e619ee9ce28",
      label: "Déterioré (🛡️)",
      description: "La résistance de l'armure diminue de 1.",
      apply: () => { /* empty */ },
    },
  ];
}
