import { RING_IULLUSTRATIONS_URLS } from "./ring";

export function ConfrontationStances() {
  return (
    <div
      className={`
        flex
        flex-col
        gap-3
      `}
    >
      <ConfrontationStance illustrationUrl={RING_IULLUSTRATIONS_URLS.water} label="Eau" description="vous pouvez réaliser une action supp. qui ne nécessite pas de test" />
      <ConfrontationStance illustrationUrl={RING_IULLUSTRATIONS_URLS.earth} label="Terre" description="les ennemis ne peuvent pas dépenser d'aubaine pour vous blesser" />
      <ConfrontationStance illustrationUrl={RING_IULLUSTRATIONS_URLS.air} label="Air" description="les ennemis ajoutent 1 au ND des tests effectués contre vous" />
      <ConfrontationStance illustrationUrl={RING_IULLUSTRATIONS_URLS.fire} label="Feu" description="Considérez les Conflits d’un test réussi comme des succès bonus" />
      <ConfrontationStance illustrationUrl={RING_IULLUSTRATIONS_URLS.void} label="Vide" description="ignorez les Conflits lors de vos tests" />
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function ConfrontationStance({
  illustrationUrl,
  label,
  description,
}: {
  illustrationUrl: string;
  label: string;
  description: string;
}) {
  return (
    <div
      className={`
        flex
        items-start
        gap-2
      `}
    >
      <img height={28} width={28} src={illustrationUrl} />
      <p>
        <span className="font-title">{label}</span>
          &nbsp;:&nbsp;
        {description}
      </p>
    </div>
  );
}
