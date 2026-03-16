import type { ClanId } from "./clans";

export type FamilyId
  = "hida" | "hiruma" | "kaiu" | "kuni" | "yasuki"
    | "asahina" | "daidoji" | "doji" | "kakita"
    | "agasha" | "kitsuki" | "mirumoto" | "togashi"
    | "akodo" | "ikoma" | "kitsu" | "matsu"
    | "asako" | "isawa" | "kaito" | "shiba"
    | "bayushi" | "shosuro" | "soshi" | "yogo"
    | "ide" | "iuchi" | "moto" | "shinjo" | "utaku";

export function isFamilyId(value: string): value is FamilyId {
  return Object.keys(FAMILIES).includes(value);
}

export interface Family {
  clanId: ClanId;
  label: string;
}

export const FAMILIES: Record<FamilyId, Family> = {
  hida: {
    label: "Hida",
    clanId: "crab",
  },
  hiruma: {
    label: "Hiruma",
    clanId: "crab",
  },
  kaiu: {
    label: "Kaiu",
    clanId: "crab",
  },
  kuni: {
    label: "Kuni",
    clanId: "crab",
  },
  yasuki: {
    label: "Yasuki",
    clanId: "crab",
  },
  asahina: {
    label: "Asahina",
    clanId: "crane",
  },
  daidoji: {
    label: "Daidoji",
    clanId: "crane",
  },
  doji: {
    label: "Doji",
    clanId: "crane",
  },
  kakita: {
    label: "Kakita",
    clanId: "crane",
  },
  agasha: {
    label: "Agasha",
    clanId: "dragon",
  },
  kitsuki: {
    label: "Kitsuki",
    clanId: "dragon",
  },
  mirumoto: {
    label: "Mirumoto",
    clanId: "dragon",
  },
  togashi: {
    label: "Togashi",
    clanId: "dragon",
  },
  akodo: {
    label: "Akodo",
    clanId: "lion",
  },
  ikoma: {
    label: "Ikoma",
    clanId: "lion",
  },
  kitsu: {
    label: "Kitsu",
    clanId: "lion",
  },
  matsu: {
    label: "Matsu",
    clanId: "lion",
  },
  asako: {
    label: "Asako",
    clanId: "phoenix",
  },
  isawa: {
    label: "Isawa",
    clanId: "phoenix",
  },
  kaito: {
    label: "Kaito",
    clanId: "phoenix",
  },
  shiba: {
    label: "Shiba",
    clanId: "phoenix",
  },
  bayushi: {
    label: "Bayushi",
    clanId: "scorpion",
  },
  shosuro: {
    label: "Shosuro",
    clanId: "scorpion",
  },
  soshi: {
    label: "Soshi",
    clanId: "scorpion",
  },
  yogo: {
    label: "Yogo",
    clanId: "scorpion",
  },
  ide: {
    label: "Ide",
    clanId: "unicorn",
  },
  iuchi: {
    label: "Iuchi",
    clanId: "unicorn",
  },
  moto: {
    label: "Moto",
    clanId: "unicorn",
  },
  shinjo: {
    label: "Shinjo",
    clanId: "unicorn",
  },
  utaku: {
    label: "Utaku",
    clanId: "unicorn",
  },
} as const;
