import RawNumberInput from "../../../components/raw-number-input";
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
              <RawNumberInput
                id={`skill-${skill.id}`}
                value={skill.value}
                min={0}
                max={5}
                onChange={skill.updateValue}
                className={`
                  w-16
                  rounded-t
                  text-center
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
