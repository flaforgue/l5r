import { HelperText } from "../../../components/helper-text";
import { TECHNIQUES } from "../../techniques/techniques";
import { useCharacterStore } from "../stores/character.store";
import { TechniquesType } from "./techniques-type";

export function Techniques() {
  const { techniqueIds } = useCharacterStore();

  const techniques = TECHNIQUES.filter((technique) => {
    return techniqueIds.includes(technique.id);
  });

  return (
    <div>
      <h2
        className={`
          flex
          items-center
          gap-1
          text-olive-600!
        `}
      >
        る Techniques
      </h2>
      <div
        className={`
          grid
          grid-cols-2
          gap-4
        `}
      >
        {
          techniques.map((technique) => {
            return (
              <div
                key={technique.id}
                className={`
                  rounded
                  bg-white/60
                  px-4
                  py-2
                  shadow
                `}
              >
                <div
                  className={`
                    flex
                    justify-between
                    gap-2
                  `}
                >
                  <div
                    className={`
                      flex
                      items-center
                      gap-2
                    `}
                  >
                    <TechniquesType technique={technique} />
                    <p>{technique.label}</p>
                  </div>
                  <HelperText
                    helperText={(
                      <div
                        className={`
                          flex
                          flex-col
                          gap-4
                          text-white
                        `}
                      >
                        <p>
                          Description
                          <br />
                          <span className="text-gray-400">{technique.description}</span>
                        </p>
                        <p>
                          Activation
                          <br />
                          <span className="text-gray-400">{technique.activation}</span>
                        </p>
                        {technique.diceTest !== null && (
                          <p>
                            Test
                            <br />
                            <span className="text-gray-400">{technique.diceTest}</span>
                          </p>
                        )}
                        <p>
                          Effets
                          <br />
                          <span
                            className={`
                              whitespace-pre-line
                              text-gray-400
                            `}
                          >
                            {technique.effects}
                          </span>
                        </p>
                      </div>
                    )}
                  />
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
