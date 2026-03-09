import { Approaches } from "./approaches";
import type { RingType } from "./ring";

interface SkillsFamilyProps {
  label: string;
  skills: {
    id: string;
    label: string;
    value: number;
    updateValue: (value: number) => void;
  }[];
  approaches: Record<RingType, string>;
  className?: string;
}

export function SkillsFamily({ label, skills, approaches, className = "" }: SkillsFamilyProps) {
  const onChange = (value: unknown, updateValue: (value: number) => void) => {
    const castedValue = Number(value);
    const validCastedValue = isNaN(castedValue) ? 0 : castedValue;
    const validValue = Math.max(0, Math.min(validCastedValue, 5));
    updateValue(validValue);
  };

  return (
    <div
      className={`
        flex
        gap-2

        ${className}
      `}
    >
      <div className="flex-1">
        <h3
          className={`
            mb-2
            flex
            items-center
            justify-between
            rounded
            bg-olive-600
            px-2
            py-1
            text-gray-50
            uppercase
          `}
        >
          <span>{label}</span>
          <span>Rang</span>
        </h3>
        <div
          className={`
            flex
            flex-col
            gap-2
          `}
        >
          {skills.map((skill) => (
            <div
              key={skill.id}
              className={`
                flex
                items-center
                justify-between
                border-b
                border-olive-400
              `}
            >
              <p
                className={`
                  px-2
                  text-olive-600
                `}
              >
                {skill.label}
              </p>
              <input
                id={`skill-${skill.id}`}
                type="number"
                value={skill.value}
                min={0}
                max={5}
                onChange={(e) => {
                  onChange(e.target.value, skill.updateValue);
                }}
                className={`
                  w-16

                  [appearance:textfield]

                  rounded-t
                  text-center
                  outline-none

                  focus:bg-white/50

                  [&::-webkit-inner-spin-button]:appearance-none
                  [&::-webkit-outer-spin-button]:appearance-none
                `}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-38">
        <Approaches approaches={approaches} />
      </div>
    </div>
  );
}
