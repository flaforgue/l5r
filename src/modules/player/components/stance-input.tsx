import type { ReactNode } from "react";
import { PopoverPickerInput } from "../../../components/popover-picker-input";
import { useCharacterStore } from "../stores/character.store";
import { isRingType, RING_LABELS, RING_TYPES, type RingType } from "./ring";

export function StanceInput() {
  const { activeRing, updateActiveRing } = useCharacterStore();
  const options = RING_TYPES.map((ringType) => {
    return {
      value: ringType,
      label: RING_LABELS[ringType],
      description: ringDescriptions[ringType],
      shortDescription: RING_LABELS[ringType],
      illustration: <img height={80} width={80} src={`${import.meta.env.BASE_URL}/images/${ringType}.png`} />,
    };
  });

  return (
    <div>
      <PopoverPickerInput
        value={activeRing}
        onChange={(value) => {
          if (isRingType(value)) {
            updateActiveRing(value);
          }
        }}
        options={options}
      />
    </div>
  );
}

const ringDescriptions: Record<RingType, ReactNode> = {
  air: (
    <div>
      <p>Effet passif : les ennemis ajoutent 1 au ND des tests effectués contre vous</p>
      <p>2 aubaines : vous remarquez un point fort / faible chez un adversaire</p>
    </div>
  ),
  earth: (
    <div>
      <p>Effet passif : les ennemis ne peuvent pas dépenser d&apos;aubaine pour vous blesser</p>
      <p>2 aubaines : vous rassurez un autre personnage par votre présence (-2 Conflit)</p>
    </div>
  ),
  fire: (
    <div>
      <p>Effet passif : considérez les Conflits d’un test réussi comme des succès bonus</p>
      <p>2 aubaines : vous énervez un autre personnage par votre présence (+2 Conflit)</p>
    </div>
  ),
  water: (
    <div>
      <p>Effet passif : vous pouvez réaliser une action supp. qui ne nécessite pas de test</p>
      <p>2 aubaines : vous pouvez perdre 2 points de Conflit</p>
    </div>
  ),
  void: (
    <div>
      <p>Effet passif : ignorez les Conflits lors de vos tests</p>
      <p>2 aubaines : choisissez un anneau, -1 au ND du prochain test s’il l’utilise</p>
    </div>
  ),
};
