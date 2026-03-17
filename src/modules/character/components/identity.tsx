import NumberInput from "../../../components/number-input";
import { SelectInput } from "../../../components/select-input";
import TextInput from "../../../components/text-input";
import TextareaInput from "../../../components/textarea-input";
import { CLANS, isClanId } from "../../clans/clans";
import { FAMILIES, isFamilyId } from "../../clans/families";
import { useCharacterStore } from "../stores/character.store";
import { Attention } from "./attention";
import { CharacterRank } from "./character-rank";
import { Rings } from "./rings";
import { Vigilance } from "./vigilance";

export function Identity() {
  const {
    clanId,
    updateClanId,
    familyId,
    updateFamilyId,
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
  const clanFamilies = Object.entries(FAMILIES)
    .map(([familyId, family]) => ({
      id: familyId,
      label: family.label,
      clanId: family.clanId,
    }))
    .filter((family) => family.clanId === clanId);

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
          gap-4
        `}
      >
        <SelectInput
          label="族 CLAN"
          value={clanId}
          className="w-34"
          onChange={(value) => {
            if (isClanId(value)) {
              updateClanId(value);
            }
          }}
          options={Object.entries(CLANS).map(([clanId, clan]) => ({
            value: clanId,
            displayContent: (
              <div
                className={`
                  flex
                  items-center
                  gap-1
                `}
              >
                <img
                  src={clan.illustrationUrl}
                  alt={clan.label}
                  className="size-4"
                />
                {clan.label}
              </div>
            ),
          }))}
        />
        <SelectInput
          label="家 FAMILLE"
          value={familyId}
          className="w-34"
          onChange={(value) => {
            if (isFamilyId(value)) {
              updateFamilyId(value);
            }
          }}
          options={clanFamilies.map((family) => ({
            value: family.id,
            displayContent: family.label,
          }))}
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
              <p>
                <span className="text-white">90+ :</span>
                {" "}
                <span className="text-gray-400">Légende célèbre dans tous l&apos;empire</span>
              </p>
              <p>
                <span className="text-white">80+ :</span>
                {" "}
                <span className="text-gray-400">Héros exceptionnel reconnu par plusieurs clans</span>
              </p>
              <p>
                <span className="text-white">65+ :</span>
                {" "}
                <span className="text-gray-400">Samouraï très réputé au sein de son clan</span>
              </p>
              <p>
                <span className="text-white">50+ :</span>
                {" "}
                <span className="text-gray-400">Samouraï reconnu pour sa fiabilité</span>
              </p>
              <p>
                <span className="text-white">40+ :</span>
                {" "}
                <span className="text-gray-400">Samouraï ordinaire</span>
              </p>
              <p>
                <span className="text-white">30+ :</span>
                {" "}
                <span className="text-gray-400">Samouraï à la réputation entachée par l&apos;échec et la déception</span>
              </p>
              <p>
                <span className="text-white">20+ :</span>
                {" "}
                <span className="text-gray-400">Individu connu pour ses mauvaises actions</span>
              </p>
              <p>
                <span className="text-white">10+ :</span>
                {" "}
                <span className="text-gray-400">Individu connu pour ses actes odieux dans tout le pays</span>
              </p>
              <p>
                <span className="text-white">&nbsp;&nbsp;0+ : </span>
                <span className="text-gray-400">L&apos;un des plus vils et des plus scandaleux individus de l&apos;Empire</span>
              </p>
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
              <p>
                <span className="text-white">80+ :</span>
                {" "}
                <span className="text-gray-400">Le bushido passe devant tout le reste, ce qui implique beaucoup de sacrifices</span>
              </p>
              <p>
                <span className="text-white">60+ :</span>
                {" "}
                <span className="text-gray-400">Tente toujours de suivre le bushido et regrette durement ses rares échecs</span>
              </p>
              <p>
                <span className="text-white">40+ :</span>
                {" "}
                <span className="text-gray-400">Garde le bushido à l&apos;espris et tente de le respecter lorsque c&apos;est possible</span>
              </p>
              <p>
                <span className="text-white">20+ :</span>
                {" "}
                <span className="text-gray-400">Seules comptent les apparences</span>
              </p>
              <p>
                <span className="text-white">&nbsp;&nbsp;0+ :</span>
                {" "}
                <span className="text-gray-400">Le bushido n&apos;est qu&apos;une fable.</span>
              </p>
            </div>
          )}
        />

        <CharacterRank />
      </div>
      <div
        className={`
          flex
          justify-between
          px-4
        `}
      >

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
        <Rings />
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
