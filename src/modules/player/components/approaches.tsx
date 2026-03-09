import { RING_IULLUSTRATIONS_URLS, type RingType } from "./ring";

interface ApproachesProps {
  approaches: Record<RingType, string>;
}
export function Approaches({
  approaches,
}: ApproachesProps) {
  return (
    <div>
      <h3
        className={`
          mb-2
          rounded
          bg-olive-600
          px-2
          py-1
          text-gray-50
          uppercase
        `}
      >
        <span>Approches</span>
      </h3>
      <div
        className={`
          flex
          flex-col
          gap-1
        `}
      >
        {Object.entries(approaches).map(([ringType, approach]) => (
          <div
            key={ringType}
            className={`
              flex
              items-center
              gap-2
            `}
          >
            <img height={20} width={20} src={RING_IULLUSTRATIONS_URLS[ringType as RingType]} />
            <p className="text-olive-600">{approach}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
