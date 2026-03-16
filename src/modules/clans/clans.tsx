export type ClanId = "lion" | "crane" | "phoenix" | "crab" | "scorpion" | "unicorn" | "dragon";

export function isClanId(value: string): value is ClanId {
  return Object.keys(CLANS).includes(value);
}

export interface Clan {
  label: string;
  illustrationUrl: string;
}

export const CLANS: Record<ClanId, Clan> = {
  lion: {
    label: "Lion",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/lion.webp`,
  },
  crane: {
    label: "Grue",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/crane.webp`,
  },
  phoenix: {
    label: "Phénix",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/phoenix.webp`,
  },
  crab: {
    label: "Crabe",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/crab.webp`,
  },
  scorpion: {
    label: "Scorpion",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/scorpion.webp`,
  },
  unicorn: {
    label: "Licorne",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/unicorn.webp`,
  },
  dragon: {
    label: "Dragon",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/dragon.webp`,
  },
} as const;

export const CLAN_BACKGROUND_URLS: Record<ClanId, string> = {
  lion: `${import.meta.env.BASE_URL}/images/lion.webp`,
  crane: `${import.meta.env.BASE_URL}/images/crane.webp`,
  phoenix: `${import.meta.env.BASE_URL}/images/phoenix.webp`,
  crab: `${import.meta.env.BASE_URL}/images/crab.webp`,
  scorpion: `${import.meta.env.BASE_URL}/images/scorpion.webp`,
  unicorn: `${import.meta.env.BASE_URL}/images/unicorn.webp`,
  dragon: `${import.meta.env.BASE_URL}/images/dragon.webp`,
} as const;
