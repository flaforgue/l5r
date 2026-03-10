import { Card, CardContent } from "../../../shadcn/ui/card";
import { Confrontation } from "../components/confrontation";
import { ConfrontationStances } from "../components/confrontation-stances";
import { Identity } from "../components/identity";
import { Skills } from "../components/skills";

export function CharacterPage() {
  return (
    <div
      className={`
        flex
        flex-col
        gap-4
      `}
    >
      <div
        className={`
          flex
          gap-4
        `}
      >
        <Card className="w-1/3">
          <CardContent>
            <Identity />
          </CardContent>
        </Card>
        <Card
          className="w-2/3"
        >
          <CardContent>
            <Skills />
          </CardContent>
        </Card>
      </div>
      <div
        className={`
          flex
          gap-4
        `}
      >
        <Card className="w-1/2">
          <CardContent>
            <Confrontation />
          </CardContent>
        </Card>
        <Card className="w-1/2">
          <CardContent>
            <ConfrontationStances />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
