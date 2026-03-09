import NumberInput from "../../../components/number-input";
import { useLocalStorageState } from "../../../hooks/useLocalStorageState";

export function VoidPoints() {
  const [voidPoints, setVoidPoints] = useLocalStorageState("voidPoints", 0);

  const [voidRingValue] = useLocalStorageState("voidValue", 0);
  const maxVoidPoints = Math.floor(voidRingValue / 2);

  return (
    <NumberInput
      label="Points de Vide"
      value={voidPoints}
      onChange={setVoidPoints}
      min={0}
      max={maxVoidPoints}
      className="w-34"
      labelClassName="text-olive-700"
    />
  );
}
