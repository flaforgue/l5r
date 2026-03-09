import TextareaInput from "../../../components/textarea-input";
import { useLocalStorageState } from "../../../hooks/useLocalStorageState";

export function Advantage() {
  const [advantage, setAdvantage] = useLocalStorageState("advantage", "");

  return (
    <TextareaInput
      label="Avantage"
      value={advantage}
      onChange={setAdvantage}
      labelClassName="text-olive-700"
    />
  );
}
