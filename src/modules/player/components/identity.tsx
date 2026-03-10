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
    schoolSkill,
    updateSchoolSkill,
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
      <TextareaInput
        label="Dilemme Personnel"
        value={dilemma}
        onChange={updateDilemma}
        rows={4}
      />
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
          helperText={(
            <div>
              <p>90+ : Légende célèbre dans tous l&apos;empire</p>
              <p>80+ : Héros exceptionnel reconnu par plusieurs clans</p>
              <p>65+ : Samouraï très réputé au sein de son clan</p>
              <p>50+ : Samouraï reconnu pour sa fiabilité</p>
              <p>40+ : Samouraï ordinaire</p>
              <p>30+ : Samouraï à la réputation entachée par l&apos;échec et la déception</p>
              <p>20+ : Individu connu pour ses mauvaises actions</p>
              <p>10+ : Individu connu pour ses actes odieux dans tout le pays</p>
              <p>0+ : L&apos;un des plus vils et des plus scandaleux individus de l&apos;Empire</p>
            </div>
          )}
        />
        <NumberInput
          label="誉 HONNEUR"
          value={honor}
          onChange={updateHonor}
          max={100}
          helperText={(
            <div>
              <p>80+ : Le bushido passe devant tout le reste, ce qui implique beaucoup de sacrifices</p>
              <p>60+ : Tente toujours de suivre le bushido et regrette durement ses rares échecs</p>
              <p>40+ : Garde le bushido à l&apos;espris et tente de le respecter lorsque c&apos;est possible</p>
              <p>20+ : Seules comptent les apparences</p>
              <p>0+ : Le bushido n&apos;est qu&apos;une fable.</p>
            </div>
          )}
        />
      </div>
      <div
        className={`
          flex
          justify-between
          px-4
        `}
      >
        <Rings />
        <div
          className={`
            flex
            flex-col
            items-center
            justify-start
            gap-8
          `}
        >
          <Attention />
          <Vigilance />
        </div>
      </div>
      <TextareaInput
        label="Capacité d'école"
        value={schoolSkill}
        onChange={updateSchoolSkill}
        rows={3}
      />
    </div>
  );
}
