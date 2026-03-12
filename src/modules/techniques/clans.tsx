export type ClanId = "lion" | "crane" | "phoenix" | "crab" | "scorpion" | "unicorn" | "dragon";

export function isClanId(value: string): value is ClanId {
  return ["lion", "crane", "phoenix", "crab", "scorpion", "unicorn", "dragon"].includes(value);
}

export interface Clan {
  id: ClanId;
  label: string;
  illustrationUrl: string;
}

export const CLANS: Record<ClanId, Clan> = {
  lion: {
    id: "lion",
    label: "Lion",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/lion.webp`,
  },
  crane: {
    id: "crane",
    label: "Grue",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/crane.webp`,
  },
  phoenix: {
    id: "phoenix",
    label: "Phénix",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/phoenix.webp`,
  },
  crab: {
    id: "crab",
    label: "Crabe",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/crab.webp`,
  },
  scorpion: {
    id: "scorpion",
    label: "Scorpion",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/scorpion.webp`,
  },
  unicorn: {
    id: "unicorn",
    label: "Licorne",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/unicorn.webp`,
  },
  dragon: {
    id: "dragon",
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
