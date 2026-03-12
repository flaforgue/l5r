import { CircleValue } from "../../../components/circle-value";
import { HelperText } from "../../../components/helper-text";
import { Label } from "../../../components/label";
import { useCharacterRank } from "../hooks/use-character-rank";

export function CharacterRank() {
  const { characterRank } = useCharacterRank();

  return (
    <div
      className={`
        flex
        flex-col
        items-center
      `}
    >
      <Label
        className={`
          mb-1
          flex
          items-center
          gap-1
        `}
      >
        <HelperText
          helperText="Représente le niveau de compétence global du personnage (Max. 6)"
          className="text-olive-700"
        />
        Rang
      </Label>
      <CircleValue
        value={characterRank}
        iconClassName="size-10 text-sky-600"
        textClassName="text-sky-600 text-base"
      />
    </div>
  );
}
