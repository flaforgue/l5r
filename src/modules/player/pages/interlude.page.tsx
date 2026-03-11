import NumberInput from "../../../components/number-input";
import { Card, CardContent } from "../../../shadcn/ui/card";
import { useCharacterStore } from "../stores/character.store";

export function InterludePage() {
  const { experience, updateExperience } = useCharacterStore();

  return (
    <div
      className={`
        flex
        flex-col
        gap-4
      `}
    >
      <h2>壊 Interlude</h2>
      <NumberInput
        label="Expérience"
        value={experience}
        onChange={updateExperience}
        min={0}
      />
      <div
        className={`
          grid
          grid-cols-2
          gap-4
        `}
      >
        <Card className="w-80">
          <CardContent>
            <h3
              className={`
                mb-6
                text-olive-700
                uppercase
              `}
            >
              Améliorer un Anneau
            </h3>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
