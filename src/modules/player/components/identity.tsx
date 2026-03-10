import { CenteredContainer } from "../../../components/centered-container";
import NumberInput from "../../../components/number-input";
import TextInput from "../../../components/text-input";
import TextareaInput from "../../../components/textarea-input";
import { useCharacterStore } from "../stores/character.store";
import { Attention } from "./attention";
import { Rings } from "./rings";
import { Vigilance } from "./vigilance";

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
    dilemma,
    updateDilemma,
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
          grid
          grid-cols-3
          gap-4
        `}
      >
        <TextInput
          label="族 CLAN"
          value={clanName}
          onChange={updateClanName}
        />
        <TextInput
          label="家 FAMILLE"
          value={familyName}
          onChange={updateFamilyName}
        />
        <TextInput
          label="名 PRÉNOM"
          value={characterName}
          onChange={updateCharacterName}
        />
      </div>
      <div>
        <TextareaInput
          label="Dilemme Personnel"
          value={dilemma}
          onChange={updateDilemma}
          rows={4}
        />
      </div>
      <div
        className={`
          grid
          grid-cols-3
          gap-4
        `}
      >
        <NumberInput
          label="光 GLOIRE"
          value={fame}
          onChange={updateFame}
          max={100}
        />
        <NumberInput
          label="誉 HONNEUR"
          value={honor}
          onChange={updateHonor}
          max={100}
        />
      </div>
      <CenteredContainer>
        <Rings />
      </CenteredContainer>
      <div
        className={`
          flex
          justify-center
          gap-8
        `}
      >
        <Attention />
        <Vigilance />
      </div>
    </div>
  );
}
