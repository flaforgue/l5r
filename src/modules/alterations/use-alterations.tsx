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
      description: `La honte d'être mis à terre cause +1 Conflit (automatique)
  Se relever consomme le mouvement du prochain tour`,
      apply: () => {
        updateConflict(conflict + 1);
      },
    },
  ];
}
