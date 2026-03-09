import { Card, CardContent } from "../../../shadcn/ui/card";
import { Identity } from "../components/identity";
import { Skills } from "../components/skills";

export function CharacterPage() {
  return (
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
  );
}
