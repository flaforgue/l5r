import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { RingType } from "../components/ring";
import { ARMORS, WEAPONS } from "../../items/items";
import type { ClanId } from "../../techniques/clans";
import type { Alteration } from "../../alterations/use-alterations";

interface Store {
  // Identity
  clanId: ClanId;
  updateClanId: (clanId: ClanId) => void;
  familyName: string;
  updateFamilyName: (familyName: string) => void;
  characterName: string;
  updateCharacterName: (characterName: string) => void;
  honor: number;
  updateHonor: (honor: number) => void;
  fame: number;
  updateFame: (fame: number) => void;
  advantage: string;
  updateAdvantage: (advantage: string) => void;
  schoolSkill: string;
  updateSchoolSkill: (schoolSkill: string) => void;
  dilemma: string;
  updateDilemma: (dilemma: string) => void;
  loseControlAttitude: string;
  updateLoseControlAttitude: (loseControlAttitude: string) => void;

  // Physical State
  activeRing: RingType;
  updateActiveRing: (activeRing: RingType) => void;
  exhaustion: number;
  updateExhaustion: (exhaustion: number) => void;
  alterationId: string;
  updateAlteration: (alteration: Alteration) => void;
  criticalHits: number;
  updateCriticalHits: (criticalHits: number) => void;

  // Psycological State
  conflict: number;
  updateConflict: (conflict: number) => void;
  voidPoints: number;
  updateVoidPoints: (voidPoints: number) => void;

  // Armors
  armorIds: string[];
  updateArmorIds: (armorIds: string[]) => void;
  equippedArmorId: string | null;
  updateEquippedArmorId: (equippedArmorId: string | null) => void;

  // Weapons
  weaponIds: string[];
  updateWeaponIds: (weaponIds: string[]) => void;
  equippedWeaponId: string | null;
  updateEquippedWeaponId: (equippedWeaponId: string | null) => void;

  // Inventory
  zeni: number;
  updateZeni: (zeni: number) => void;
  itemIds: string[];
  updateItemIds: (itemIds: string[]) => void;
  specialItems: string;
  updateSpecialItems: (specialItems: string) => void;

  // Ring values
  airValue: number;
  updateAirValue: (airValue: number) => void;
  earthValue: number;
  updateEarthValue: (earthValue: number) => void;
  fireValue: number;
  updateFireValue: (fireValue: number) => void;
  waterValue: number;
  updateWaterValue: (waterValue: number) => void;
  voidValue: number;
  updateVoidValue: (voidValue: number) => void;

  // Experience
  experience: number;
  updateExperience: (experience: number) => void;
  spentExperience: number;
  spendExperience: (amount: number) => void;

  // Skills
  aestheticValue: number;
  updateAestheticValue: (aestheticValue: number) => void;
  compositionValue: number;
  updateCompositionValue: (compositionValue: number) => void;
  stylismValue: number;
  updateStylismValue: (stylismValue: number) => void;
  forgeValue: number;
  updateForgeValue: (forgeValue: number) => void;
  physicalConditionValue: number;
  updatePhysicalConditionValue: (physicalConditionValue: number) => void;
  armedFightingValue: number;
  updateArmedFightingValue: (armedFightingValue: number) => void;
  distantFightingValue: number;
  updateDistantFightingValue: (distantFightingValue: number) => void;
  unarmedFightingValue: number;
  updateUnarmedFightingValue: (unarmedFightingValue: number) => void;
  meditationValue: number;
  updateMeditationValue: (meditationValue: number) => void;
  tacticsValue: number;
  updateTacticsValue: (tacticsValue: number) => void;
  cultureValue: number;
  updateCultureValue: (cultureValue: number) => void;
  governmentValue: number;
  updateGovernmentValue: (governmentValue: number) => void;
  medicineValue: number;
  updateMedicineValue: (medicineValue: number) => void;
  emotionsValue: number;
  updateEmotionsValue: (emotionsValue: number) => void;
  theologyValue: number;
  updateTheologyValue: (theologyValue: number) => void;
  commandValue: number;
  updateCommandValue: (commandValue: number) => void;
  courtesyValue: number;
  updateCourtesyValue: (courtesyValue: number) => void;
  gamesValue: number;
  updateGamesValue: (gamesValue: number) => void;
  representationValue: number;
  updateRepresentationValue: (representationValue: number) => void;
  commerceValue: number;
  updateCommerceValue: (commerceValue: number) => void;
  manualWorkValue: number;
  updateManualWorkValue: (manualWorkValue: number) => void;
  navigationValue: number;
  updateNavigationValue: (navigationValue: number) => void;
  tricksValue: number;
  updateTricksValue: (tricksValue: number) => void;
  survivalValue: number;
  updateSurvivalValue: (survivalValue: number) => void;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const useCharacterStore = create<Store>()(
  persist(
    (set, get) => ({
      clanId: "lion",
      updateClanId: (clanId) => {
        set({ clanId });
      },
      familyName: "",
      updateFamilyName: (familyName) => {
        set({ familyName });
      },
      characterName: "",
      updateCharacterName: (characterName) => {
        set({ characterName });
      },
      honor: 0,
      updateHonor: (honor) => {
        set({ honor });
      },
      fame: 0,
      updateFame: (fame) => {
        set({ fame });
      },

      activeRing: "void",
      updateActiveRing: (activeRing) => {
        set({ activeRing });
      },
      exhaustion: 0,
      updateExhaustion: (exhaustion) => {
        set({ exhaustion });
      },
      alterationId: "none",
      updateAlteration: (alteration) => {
        set({ alterationId: alteration.id });
        alteration.apply();
      },
      criticalHits: 0,
      updateCriticalHits: (criticalHits) => {
        if (get().criticalHits === 0 && criticalHits > 0) {
          set({ conflict: get().conflict + 3 });
        }

        set({ criticalHits });
      },

      armorIds: [ARMORS[0].id],
      updateArmorIds: (armorIds) => {
        set({ armorIds });
      },
      equippedArmorId: null,
      updateEquippedArmorId: (equippedArmorId) => {
        set({ equippedArmorId });
      },

      weaponIds: [WEAPONS[0].id, WEAPONS[1].id],
      updateWeaponIds: (weaponIds) => {
        set({ weaponIds });
      },
      equippedWeaponId: null,
      updateEquippedWeaponId: (equippedWeaponId) => {
        set({ equippedWeaponId });
      },

      zeni: 0,
      updateZeni: (zeni) => {
        set({ zeni });
      },
      itemIds: [],
      updateItemIds: (itemIds) => {
        set({ itemIds });
      },
      specialItems: "",
      updateSpecialItems: (specialItems) => {
        set({ specialItems });
      },

      conflict: 0,
      updateConflict: (conflict) => {
        set({ conflict });
      },
      loseControlAttitude: "",
      updateLoseControlAttitude: (loseControlAttitude) => {
        set({ loseControlAttitude });
      },

      airValue: 1,
      updateAirValue: (airValue) => {
        set({ airValue });
      },
      earthValue: 1,
      updateEarthValue: (earthValue) => {
        set({ earthValue });
      },
      fireValue: 1,
      updateFireValue: (fireValue) => {
        set({ fireValue });
      },
      waterValue: 1,
      updateWaterValue: (waterValue) => {
        set({ waterValue });
      },
      voidValue: 1,
      updateVoidValue: (voidValue) => {
        set({ voidValue });
      },

      experience: 0,
      updateExperience: (experience: number) => {
        set({ experience });
      },
      spentExperience: 0,
      spendExperience: (amount: number) => {
        set({
          experience: Math.max(0, get().experience - amount),
          spentExperience: Math.max(0, get().spentExperience + amount),
        });
      },

      voidPoints: 0,
      updateVoidPoints: (voidPoints: number) => {
        set({ voidPoints });
      },

      advantage: "",
      updateAdvantage: (advantage: string) => {
        set({ advantage });
      },

      schoolSkill: "",
      updateSchoolSkill: (schoolSkill: string) => {
        set({ schoolSkill });
      },

      dilemma: "",
      updateDilemma: (dilemma: string) => {
        set({ dilemma });
      },

      aestheticValue: 0,
      updateAestheticValue: (aestheticValue: number) => {
        set({ aestheticValue });
      },
      compositionValue: 0,
      updateCompositionValue: (compositionValue: number) => {
        set({ compositionValue });
      },
      stylismValue: 0,
      updateStylismValue: (stylismValue: number) => {
        set({ stylismValue });
      },
      forgeValue: 0,
      updateForgeValue: (forgeValue: number) => {
        set({ forgeValue });
      },
      physicalConditionValue: 0,
      updatePhysicalConditionValue: (physicalConditionValue: number) => {
        set({ physicalConditionValue });
      },
      armedFightingValue: 0,
      updateArmedFightingValue: (armedFightingValue: number) => {
        set({ armedFightingValue });
      },
      distantFightingValue: 0,
      updateDistantFightingValue: (distantFightingValue: number) => {
        set({ distantFightingValue });
      },
      unarmedFightingValue: 0,
      updateUnarmedFightingValue: (unarmedFightingValue: number) => {
        set({ unarmedFightingValue });
      },
      meditationValue: 0,
      updateMeditationValue: (meditationValue: number) => {
        set({ meditationValue });
      },
      tacticsValue: 0,
      updateTacticsValue: (tacticsValue: number) => {
        set({ tacticsValue });
      },
      cultureValue: 0,
      updateCultureValue: (cultureValue: number) => {
        set({ cultureValue });
      },
      governmentValue: 0,
      updateGovernmentValue: (governmentValue: number) => {
        set({ governmentValue });
      },
      medicineValue: 0,
      updateMedicineValue: (medicineValue: number) => {
        set({ medicineValue });
      },
      emotionsValue: 0,
      updateEmotionsValue: (emotionsValue: number) => {
        set({ emotionsValue });
      },
      theologyValue: 0,
      updateTheologyValue: (theologyValue: number) => {
        set({ theologyValue });
      },
      commandValue: 0,
      updateCommandValue: (commandValue: number) => {
        set({ commandValue });
      },
      courtesyValue: 0,
      updateCourtesyValue: (courtesyValue: number) => {
        set({ courtesyValue });
      },
      gamesValue: 0,
      updateGamesValue: (gamesValue: number) => {
        set({ gamesValue });
      },
      representationValue: 0,
      updateRepresentationValue: (representationValue: number) => {
        set({ representationValue });
      },
      commerceValue: 0,
      updateCommerceValue: (commerceValue: number) => {
        set({ commerceValue });
      },
      manualWorkValue: 0,
      updateManualWorkValue: (manualWorkValue: number) => {
        set({ manualWorkValue });
      },
      navigationValue: 0,
      updateNavigationValue: (navigationValue: number) => {
        set({ navigationValue });
      },
      tricksValue: 0,
      updateTricksValue: (tricksValue: number) => {
        set({ tricksValue });
      },
      survivalValue: 0,
      updateSurvivalValue: (survivalValue: number) => {
        set({ survivalValue });
      },
    }),
    {
      name: "store.character",
    },
  ),
);
