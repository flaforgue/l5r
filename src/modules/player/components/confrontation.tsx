import { PhysicalState } from "./physical-state";
import { PsycologicalState } from "./psycological-state";

export function Confrontation() {
  return (
    <div
      className={`
        flex
        flex-col
        gap-8
      `}
    >
      <PhysicalState />
      <PsycologicalState />
    </div>
  );
}
