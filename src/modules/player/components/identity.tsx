import { CenteredContainer } from "../../../components/centered-container";
import NumberInput from "../../../components/number-input";
import TextInput from "../../../components/text-input";
import { useLocalStorageState } from "../../../hooks/useLocalStorageState";
import { Rings } from "./rings";

export function Identity() {
  const [clanName, setClanName] = useLocalStorageState("clanName", "");
  const [familyName, setFamilyName] = useLocalStorageState("familyName", "");
  const [characterName, setCharacterName] = useLocalStorageState("characterName", "");
  const [honor, setHonor] = useLocalStorageState("honor", 0);
  const [fame, setFame] = useLocalStorageState("fame", 0);

  return (
    <div
      className={`
        flex
        flex-col
        gap-4
      `}
    >
      <div
        className={`
          flex
          gap-8
        `}
      >
        <TextInput
          label="族 CLAN"
          value={clanName}
          onChange={setClanName}
          className="w-32"
        />
        <TextInput
          label="家 FAMILLE"
          value={familyName}
          onChange={setFamilyName}
          className="w-32"
        />
        <TextInput
          label="名 PRÉNOM"
          value={characterName}
          onChange={setCharacterName}
          className="w-32"
        />
      </div>

      <div
        className={`
          flex
          gap-8
        `}
      >
        <NumberInput
          label="光 GLOIRE"
          value={fame}
          onChange={setFame}
          className="w-32"
          max={100}
        />
        <NumberInput
          label="誉 HONNEUR"
          value={honor}
          onChange={setHonor}
          className="w-32"
          max={100}
        />
      </div>
      <CenteredContainer className="py-4">
        <Rings />
      </CenteredContainer>
    </div>
  );
}
