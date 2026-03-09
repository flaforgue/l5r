import { CenteredContainer } from "../../../components/centered-container";
import NumberInput from "../../../components/number-input";
import TextInput from "../../../components/text-input";
import { useCharacterStore } from "../stores/character.store";
import { Rings } from "./rings";

export function Identity() {
  const {
    clanName,
    updateClanName,
    familyName,
    updateFamilyName,
    characterName,
    updateCharacterName,
    honor,
    updateHonor,
    fame,
    updateFame,
  } = useCharacterStore();

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
          onChange={updateClanName}
          className="w-32"
        />
        <TextInput
          label="家 FAMILLE"
          value={familyName}
          onChange={updateFamilyName}
          className="w-32"
        />
        <TextInput
          label="名 PRÉNOM"
          value={characterName}
          onChange={updateCharacterName}
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
          onChange={updateFame}
          className="w-32"
          max={100}
        />
        <NumberInput
          label="誉 HONNEUR"
          value={honor}
          onChange={updateHonor}
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
