import { useCharacterStore } from "../stores/character.store";

export function useCharacterRank() {
  const { spentExperience } = useCharacterStore();
  const characterRank = getCharacterRank(spentExperience);

  return {
    characterRank,
    experienceToNextRank: getExperienceToNextRank(characterRank, spentExperience),
  };
}

export const RANK_XP_THRESHOLDS: [number, number, number, number, number, number] = [
  0,
  20,
  44,
  76,
  120,
  180,
];

function getCharacterRank(spentExperience: number): number {
  if (spentExperience >= RANK_XP_THRESHOLDS[5]) {
    return 6;
  }

  if (spentExperience >= RANK_XP_THRESHOLDS[4]) {
    return 5;
  }

  if (spentExperience >= RANK_XP_THRESHOLDS[3]) {
    return 4;
  }

  if (spentExperience >= RANK_XP_THRESHOLDS[2]) {
    return 3;
  }

  if (spentExperience >= RANK_XP_THRESHOLDS[1]) {
    return 2;
  }

  return 1;
}

function getExperienceToNextRank(characterRank: number, spentExperience: number): number {
  const nextRankThreshold = RANK_XP_THRESHOLDS[characterRank];
  if (nextRankThreshold === undefined) {
    return 0;
  }

  return nextRankThreshold - spentExperience;
}
