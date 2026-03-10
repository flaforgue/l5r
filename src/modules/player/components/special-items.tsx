import TextareaInput from "../../../components/textarea-input";
import { Card, CardContent } from "../../../shadcn/ui/card";
import { useCharacterStore } from "../stores/character.store";

export function SpecialItems({ className = "" }: { className?: string }) {
  const { specialItems, updateSpecialItems } = useCharacterStore();

  return (
    <Card>
      <CardContent className={className}>
        <h2>
          特 Objets spéciaux
        </h2>
        <TextareaInput
          value={specialItems}
          onChange={updateSpecialItems}
          rows={5}
          placeholder="Objets particuliers, de quête, etc."
          className="text-olive-700"
        />
      </CardContent>
    </Card>
  );
}
