import type { ReactNode } from "react";
import type { FamilyId } from "../clans/families";

type TechniqueType = "kata" | "kiho" | "invocation" | "shuji";

interface FamilyAvailability {
  familyId: FamilyId;
  ranks: number[];
}

export interface Technique {
  id: string;
  type: TechniqueType;
  illustrationUrl: string;
  label: string;
  xpCost: number;
  description: ReactNode;
  activation: string;
  diceTest: string | null;
  effects: string;
  availableFor: FamilyAvailability[];
}

export const TECHNIQUES: Technique[] = [
  {
    id: "4d33dd58-81cf-4d13-96c8-def81d271eeb",
    type: "kata",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/kata.png`,
    label: "Détermination du Guerrier",
    xpCost: 3,
    description: "Vous prenez une profonde inspiration et vous concentrez sur votre objectif.",
    activation: "Une fois par scène, au prix d'une action.",
    diceTest: null,
    effects: "Éliminez un nombre de points de fatigue égale à votre rang d'honneur.",
    availableFor: [
      {
        familyId: "hida",
        ranks: [1, 2, 3, 4, 5, 6],
      },
      {
        familyId: "akodo",
        ranks: [1, 2, 3, 4, 5, 6],
      },
    ],
  },
  {
    id: "477ccddf-5da8-4da8-a16b-f2f1c4de8b3c",
    type: "kata",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/kata.png`,
    label: "Offensive de l'Air",
    xpCost: 3,
    description: "Vous profitez de votre attaque pour étudier l'armure de votre adversaire.",
    activation: "Aubaine d'un test d'Arts Martiaux Air.",
    diceTest: null,
    effects: "Réservez l'un des dés lancés (+ 1 dé par couple d'aubaines), vous pourrez l'utiliser à la place d'un dé lancé sur un lancé de même compétence (Air) à votre prochain tour.",
    availableFor: [
      {
        familyId: "hida",
        ranks: [1, 2, 3, 4, 5, 6],
      },
      {
        familyId: "akodo",
        ranks: [1, 2, 3, 4, 5, 6],
      },
      {
        familyId: "bayushi",
        ranks: [1, 2, 3, 4, 5, 6],
      },
    ],
  },
  {
    id: "ac6ed317-8ca5-4c74-8e17-a504647d3e61",
    type: "kata",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/kata.png`,
    label: "Offensive de l'Eau",
    xpCost: 3,
    description: "Vous profitez de votre attaque pour vous synchroniser sur les réactions de votre adversaire.",
    activation: "Aubaine(s) d'un test d'Arts Martiaux Eau.",
    diceTest: null,
    effects: "Votre prochaine attaque ignore 1 point de résistance de l'adversaire par aubaine dépensée.",
    availableFor: [
      {
        familyId: "hida",
        ranks: [1, 2, 3, 4, 5, 6],
      },
      {
        familyId: "akodo",
        ranks: [1, 2, 3, 4, 5, 6],
      },
    ],
  },
  {
    id: "c389de68-9c69-4945-8f22-db1e194abafa",
    type: "kata",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/kata.png`,
    label: "Offensive de la Terre",
    xpCost: 3,
    description: "Vous réalisez votre attaque de manière à la terminer en position défensive.",
    activation: "Aubaine(s) d'un test d'Arts Martiaux Terre.",
    diceTest: null,
    effects: "Chaque aubaine dépensée vous permet de gagner 1 point de résistance jusqu'au début de votre prochain tour.",
    availableFor: [
      {
        familyId: "hida",
        ranks: [1, 2, 3, 4, 5, 6],
      },
      {
        familyId: "akodo",
        ranks: [1, 2, 3, 4, 5, 6],
      },
      {
        familyId: "shinjo",
        ranks: [1, 2, 3, 4, 5, 6],
      },
    ],
  },
  {
    id: "a6f942dd-45f2-4bd8-a32f-eb14a2c28059",
    type: "kata",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/kata.png`,
    label: "Offensive du Feu",
    xpCost: 3,
    description: "Vous attaquez sans vous soucier des conséquences.",
    activation: "Aubaine(s) d'un test d'Arts Martiaux Feu.",
    diceTest: null,
    effects: "Chaque couple d'aubaines dépensé vous permet d'infliger un Coup Critique.",
    availableFor: [
      {
        familyId: "hida",
        ranks: [1, 2, 3, 4, 5, 6],
      },
      {
        familyId: "akodo",
        ranks: [1, 2, 3, 4, 5, 6],
      },
      {
        familyId: "shinjo",
        ranks: [1, 2, 3, 4, 5, 6],
      },
      {
        familyId: "bayushi",
        ranks: [1, 2, 3, 4, 5, 6],
      },
    ],
  },
  {
    id: "58c458c6-c56a-49c7-a8b6-a726ac499022",
    type: "kata",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/kata.png`,
    label: "Poigne de Sire Hida",
    xpCost: 3,
    description: "Une technique secrète de votre clan qui permet d'immobiliser sa cible.",
    activation: "Au prix d'une action.",
    diceTest: null,
    effects: "La cible est immobilisée pendant 1 tour et -1ND aux tests qui la ciblent.",
    availableFor: [
      {
        familyId: "hida",
        ranks: [1, 2, 3, 4, 5, 6],
      },
    ],
  },
  {
    id: "f9c1d9f0-5194-44b0-b9f3-290934734d2d",
    type: "kata",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/kata.png`,
    label: "Style de l'Avalanche Meurtrière",
    xpCost: 3,
    description: "Vous vous servez de l'élan de votre arme pour enchaîner les coups.",
    activation: "Aubaine(s) d'une attaque avec une arme contondante.",
    diceTest: null,
    effects: `S'il vous manque 1 ou 2 succès pour réussir l'attaque, vous pouvez dépenser une aubaine pour infliger un nombre de dégâts égal à votre rang en Forme.
Si vous réussissez votre attaque et que la cible est à terre, ajoutez votre rang de forme aux dégâts infligés.`,
    availableFor: [
      {
        familyId: "hida",
        ranks: [1, 2, 3, 4, 5, 6],
      },
    ],
  },
  {
    id: "be100edf-336c-41a3-8f24-4f5d7520722f",
    type: "kata",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/kata.png`,
    label: "Style de l'Averse de Grêle",
    xpCost: 3,
    description: "Vous envoyez une volée de flèches dissuasive.",
    activation: "Aubaines d'un test d'Arts Martiaux 🏹.",
    diceTest: null,
    effects: "Chaque aubaine dépensée permet d'influger un nombre de points de conflits égal aux dégâts de base de votre arme à un adversaire situé à une portée <= 2 de votre cible",
    availableFor: [
      {
        familyId: "shinjo",
        ranks: [1, 2, 3, 4, 5, 6],
      },
    ],
  },
  {
    id: "4e83dc6c-eb4b-43dd-83d8-eb9743557138",
    type: "kiho",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/kiho.png`,
    label: "La Terre voit sans Yeux",
    xpCost: 3,
    description: "Vous concentrez votre énergie sur le sol pour en ressentir les vibrations.",
    activation: "Au prix d'une action.",
    diceTest: "Méditation (Terre) ND1",
    effects: "Kiho actif : ajoutez votre valeur d'anneau à votre vigilance. Vous avez également conscience de tout mouvement au sol dans un rayon de portée égal à votre valeur d'anneau.",
    availableFor: [
      {
        familyId: "togashi",
        ranks: [1, 2, 3, 4, 5, 6],
      },
    ],
  },
  {
    id: "4acaf792-6bfc-4827-86ab-63a76ada547c",
    type: "kiho",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/kiho.png`,
    label: "Poing de Terre",
    xpCost: 3,
    description: "Vous plongez votre point dans le sol ce qui l'entoure d'une carapace minérale.",
    activation: "Au prix d'une action.",
    diceTest: "Art Martiaux 👊 (Terre) ND1",
    effects: `Si 2 succès bonus : Vous infligez un nombre de dégâts égal à votre valeur d'anneau et l'adversaire tombe à terre s'il échoue à un test de Forme ND4.

Kiho actif : ajoutez votre valeur d'anneau à vos dégâts à mains nues et votre résistance physique augmente de 1.`,
    availableFor: [
      {
        familyId: "togashi",
        ranks: [1, 2, 3, 4, 5, 6],
      },
    ],
  },
  {
    id: "8dec67ad-ec74-4ada-8c99-ac774f76ec00",
    type: "kiho",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/kiho.png`,
    label: "Ki Destructeur",
    xpCost: 3,
    description: "Vous concentrez votre ki dans vos mains pour l'insuffler dans les objets que vous touchez.",
    activation: "Au prix d'une action.",
    diceTest: "Art Martiaux 👊 (Feu) ND1",
    effects: `Si 2 succès bonus : l'effet déterioré s'applique immédiatement à un objet.

Kiho actif : chaque attaque à mains nues réussie permet de déteriorer une pièce d'équipement (-2 résistance aux armures ou +1ND aux attaques). L'adversaire peut annuler cet effet au prix de 2 points de Fatigue`,
    availableFor: [
      {
        familyId: "togashi",
        ranks: [1, 2, 3, 4, 5, 6],
      },
    ],
  },
  {
    id: "18324203-56e4-4eef-bd09-bbf5719d33dc",
    type: "kiho",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/kiho.png`,
    label: "Le Corps est une Enclume",
    xpCost: 3,
    description: "Vous concentrez votre énergie intérieure là où vous recevez des coups.",
    activation: "Au prix d'une action.",
    diceTest: "Méditation (Feu) ND3",
    effects: `Si 2 succès bonus : Réduisez les prochains dégâts reçus de la valeur de votre anneau de feu et l'arme sera déteriorée (+1ND aux attaques).
    
Kiho actif : les adversaires qui vous infligent des points de fatigue deviennent hébétés et reçoivent un nombre de dégâts égal à votre valeur d'anneau.`,
    availableFor: [
      {
        familyId: "togashi",
        ranks: [1, 2, 3, 4, 5, 6],
      },
    ],
  },
  {
    id: "a8f8edab-20b7-4b61-8e64-12f5a3f906c6",
    type: "kiho",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/kiho.png`,
    label: "Poing de flamme",
    xpCost: 3,
    description: "Vous entourez vos poings d'une aura enflammée.",
    activation: "Au prix d'une action.",
    diceTest: "Art Martiaux 👊 (Feu) ND1",
    effects: `Si 2 succès bonus : Vous infligez un nombre de dégâts égal à votre valeur d'anneau et l'adversaire est hébété s'il échoue à un test de Forme ND4.

Kiho actif : Vos attaques à mains nues ignorent la résistance adverse.`,
    availableFor: [
      {
        familyId: "togashi",
        ranks: [1, 2, 3, 4, 5, 6],
      },
    ],
  },
  {
    id: "a0c72ee3-1a69-4c0e-bd2a-d2fd1406157c",
    type: "shuji",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/shuji.png`,
    label: "Évaluation Honnête",
    xpCost: 3,
    description: "Vous jaugez les faiblesses d'un personnage et l'aidez à les compenser.",
    activation: "Au prix d'une action.",
    diceTest: "Courtoisie (Terre) ND2",
    effects: `Choisissez un désavantage que vous connaissez chez la cible et annulez-le jusqu'à la fin de la scène.
Si vous ne connaissez aucun avantage, vous pouvez dépenser une aubaine pour en découvrir un.`,
    availableFor: [
      {
        familyId: "hida",
        ranks: [1, 2, 3, 4, 5, 6],
      },
      {
        familyId: "akodo",
        ranks: [1, 2, 3, 4, 5, 6],
      },
      {
        familyId: "togashi",
        ranks: [1, 2, 3, 4, 5, 6],
      },
      {
        familyId: "shinjo",
        ranks: [1, 2, 3, 4, 5, 6],
      },
    ],
  },
  {
    id: "1c9f619b-8d7a-447a-9c81-7396b9f75ca1",
    type: "shuji",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/shuji.png`,
    label: "Le Fardeau du Devoir",
    xpCost: 3,
    description: "Vous faites appels à vos connaissances pour mieux comprendre le rôle de votre interlocuteur.",
    activation: "Lors d'un test de compétence sociale (Terre).",
    diceTest: null,
    effects: "Vous pouvez dépenser deux aubaines pour identifier la nature du serment qui rattache votre interlocuteur à son seigneur.",
    availableFor: [
      {
        familyId: "bayushi",
        ranks: [1, 2, 3, 4, 5, 6],
      },
      {
        familyId: "shinjo",
        ranks: [1, 2, 3, 4, 5, 6],
      },
    ],
  },
  {
    id: "7d96db8d-c45b-4004-bd3e-b2815f2d7627",
    type: "shuji",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/shuji.png`,
    label: "Rugissement de Sire Akodo",
    xpCost: 3,
    description: "Vous poussez le rugissement caractéristique de votre clan.",
    activation: "Au prix d'une action, une fois par scène.",
    diceTest: "Commandement (Vide) ND1",
    effects: "Les personnages hostiles dans un rayon de portée égal au rang d votre personnage deviennent Hébétés.",
    availableFor: [
      {
        familyId: "akodo",
        ranks: [1, 2, 3, 4, 5, 6],
      },
    ],
  },
  {
    id: "48384644-a321-4753-8328-dc22d8cc8469",
    type: "shuji",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/shuji.png`,
    label: "Discrétion",
    xpCost: 3,
    description: "Vous profitez de votre discrétion pour disparaître.",
    activation: "Aubaines d'un test d'Arts Martiaux (Air) lorsque vous pouvez vous cacher.",
    diceTest: null,
    effects: "Vous pouvez dépenser deux aubaines pour disparaître de la vue d'un adversaire.",
    availableFor: [
      {
        familyId: "bayushi",
        ranks: [1, 2, 3, 4, 5, 6],
      },
    ],
  },
  {
    id: "127ecc64-fd9f-4981-b235-79139593821d",
    type: "shuji",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/shuji.png`,
    label: "Distraction Sensationnelle",
    xpCost: 3,
    description: "Vous réalisez quelque chose qui attire l'attention sur vous.",
    activation: "Aubaines d'un test de compétence sociale (Feu).",
    diceTest: null,
    effects: "Chaque aubain dépensée réduit la vigilance de votre cible de 1 vis à vis de tous les autres personnages.",
    availableFor: [
      {
        familyId: "bayushi",
        ranks: [1, 2, 3, 4, 5, 6],
      },
    ],
  },
  {
    id: "b01e5ee1-933d-4808-b029-6842f63ea437",
    type: "shuji",
    illustrationUrl: `${import.meta.env.BASE_URL}/images/shuji.png`,
    label: "Ascendance Dévoilée",
    xpCost: 3,
    description: "Vous fouillez dans vos souvenirs pour retracer l'ascendance de votre interlocuteur.",
    activation: "Aubaines d'un test de compétence sociale ou savante (Terre).",
    diceTest: null,
    effects: `1 aubaine : vous prenez connaissance d'un serment prononcé par le personnage ou sa famille par le passé.
2 aubaines : vous savez également si le serment a été respecté ou non.`,
    availableFor: [
      {
        familyId: "bayushi",
        ranks: [1, 2, 3, 4, 5, 6],
      },
      {
        familyId: "shinjo",
        ranks: [1, 2, 3, 4, 5, 6],
      },
    ],
  },
];
