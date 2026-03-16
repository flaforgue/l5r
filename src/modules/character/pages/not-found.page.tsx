import { CenteredContainer } from "../../../components/centered-container";
import { NotFoundImage } from "../../../components/images/not-found-image";

export function NotFoundPage() {
  return (
    <CenteredContainer
      className={`
        h-[calc(100vh-56px)]
        w-full
        flex-col
        gap-4
      `}
    >
      <h1 className="text-gray-700">Page non trouvée</h1>

      <div
        className={`
          h-1/2
          rounded-full
          bg-gray-200
        `}
      >
        <NotFoundImage />
      </div>

      <p
        className={`
          text-center
          text-gray-500
        `}
      >
        Se perdre en chemin ne veut pas toujours dire que l&apos;on se retrouve au mauvais endroit.
        <br />
        Mais c&apos;est le cas ici.
      </p>
    </CenteredContainer>
  );
}
