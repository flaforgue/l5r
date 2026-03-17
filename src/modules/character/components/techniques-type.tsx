import type { ReactNode } from "react";
import type { Technique, TechniqueType } from "../../techniques/techniques";
import { renderToStaticMarkup } from "react-dom/server";

interface TechniquesTypeProps {
  technique: Technique;
}

export function TechniquesType({ technique }: TechniquesTypeProps) {
  return (
    <img
      height={32}
      width={32}
      src={technique.illustrationUrl}
      data-tooltip-id="global"
      data-tooltip-html={renderToStaticMarkup(
        <div
          className={`
            flex
            flex-col
            gap-2
            text-gray-400
          `}
        >
          <p className="text-white">{techniqueTypesInfos[technique.type].label}</p>
          {techniqueTypesInfos[technique.type].description}
        </div>,
      )}
      className={`
        rounded-full
        border-2
        border-[#9e8060]
        bg-white
        p-0.25
      `}
    />
  );
}

interface TechniqueTypeInfo {
  label: string;
  description: null | ReactNode;
}
const techniqueTypesInfos: Record<TechniqueType, TechniqueTypeInfo> = {
  kata: {
    label: "Kata",
    description: "Une technique de combat maîtrisée au prix d'un long entraînement.",
  },
  kiho: {
    label: "Kiho",
    description: (
      <div
        className={`
          flex
          flex-col
          gap-2
          text-gray-400
        `}
      >
        <p>
          Un Kiho a souvent un effet à son
          {" "}
          <span className="text-white">activation</span>
          {" "}
          sous condition de
          {" "}
          <span className="text-white">succès bonus</span>
          .
        </p>
        <p>
          Une fois un Kiho utilisé, son
          {" "}
          <span className="text-white">effet passif</span>
          {" "}
          s&apos;applique jusqu&apos;à la fin de la scène.
        </p>
        <p>
          <span className="text-white">Un seul Kiho</span>
          {" "}
          peut être actif à la fois.
        </p>
      </div>
    ),
  },
  invocation: {
    label: "Invocation",
    description: (
      <div
        className={`
          flex
          flex-col
          gap-1
          text-gray-400
        `}
      >
        <p>
          Une
          {" "}
          <span className="text-white">invocation</span>
          {" "}
          permet de faire appel à un
          {" "}
          <span className="text-white">esprit</span>
          {" "}
          de l&apos;une des manières suivantes&nbsp;:
        </p>
        <ul
          className={`
            list-disc
            pl-8
          `}
        >
          <li>
            <span className="text-white">Consommer une offrande</span>
            {" "}
            qui permettra de
            {" "}
            <span className="text-white">relancer 1 à 3 dés</span>
            {" "}
            lors du test&nbsp;:&nbsp;quelque chose de minéral pour la Terre,
            de léger pour l&apos;Air, d&apos;inflammable pour le Feu,
            de liquide, précieux ou venant de l&apos;eau pour l&apos;Eau.
          </li>
          <li>
            <span className="text-white">Canaliser l&apos;énergie</span>
            {" "}
            au lieu de résoudre votre test, vous pouvez
            {" "}
            <span className="text-white">garder</span>
            {" "}
            autant de dés que vous le souhaitez
            afin d&apos;utiliser leur résultat à votre
            {" "}
            <span className="text-white">prochain lancé</span>
            {" "}
            (le nombre de dés que vous pourrez garder ne change pas).
            Si vous effectuez une autre action, les dés canalisés sont perdus.
          </li>
          <li>
            <span className="text-white">Préparer une invocation</span>
            {" "}
            au prix d&apos;une activité de
            {" "}
            <span className="text-white">temps mort</span>
            {" "}
            et d&apos;un test de
            {" "}
            <span className="text-white">Composition</span>
            {" "}
            dont l&apos;élément et le ND sont ceux de l&apos;Invocation.
            {" "}
            <span className="text-white">Une seule</span>
            {" "}
            invocation préparée à la fois.
          </li>
        </ul>
        <div>
          <p>
            <span className="text-white">Aubaines</span>
            {" "}
            spécifiques aux invocations
          </p>
          <p>
            <span className="text-white">Air</span>
            &nbsp;:&nbsp;vous pouvez
            {" "}
            <span className="text-white">cibler</span>
            {" "}
            un personnage supplémentaire
            ou
            {" "}
            <span className="text-white">protéger</span>
            {" "}
            l&apos;une des cibles.
          </p>
          <p>
            <span className="text-white">Terre</span>
            &nbsp;:&nbsp;
            votre
            {" "}
            <span className="text-white">résistance</span>
            {" "}
            augmente de
            {" "}
            <span className="text-white">1</span>
            {" "}
            jusqu&apos;à votre prochain tour.
          </p>
          <p>
            <span className="text-white">Feu</span>
            &nbsp;:&nbsp;
            le
            {" "}
            <span className="text-white">ND</span>
            {" "}
            de votre prochain test d&apos;attaque
            {" "}
            diminue de
            {" "}
            <span className="text-white">1</span>
            .
          </p>
          <p>
            <span className="text-white">Eau</span>
            &nbsp;:&nbsp;
            le
            {" "}
            <span className="text-white">ND</span>
            {" "}
            de votre prochain test de soutien
            {" "}
            diminue de
            {" "}
            <span className="text-white">1</span>
            .
          </p>
        </div>
      </div>
    ),
  },
  shuji: {
    label: "Shuji",
    description: "Une technique sociale apprise auprès d'un mentor aguerri.",
  },
};
