import { Card, CardContent } from "../../../shadcn/ui/card";
import { CLAN_BACKGROUND_URLS } from "../../clans/clans";
import { Confrontation } from "../components/confrontation";
import { Identity } from "../components/identity";
import { Skills } from "../components/skills";
import { Techniques } from "../components/techniques";
import { useCharacterStore } from "../stores/character.store";

export function CharacterPage() {
  const { clanId } = useCharacterStore();
  const clanBackgroundUrl = CLAN_BACKGROUND_URLS[clanId];

  return (
    <div
      className={`
        relative
        flex
        flex-col
        gap-4
      `}
    >
      <div
        className={`
          absolute
          inset-0
          bg-cover
          opacity-80
        `}
        style={{
          backgroundImage: `url(${clanBackgroundUrl})`,
          backgroundSize: "600px",
          backgroundPosition: "80% 20%",
          backgroundRepeat: "no-repeat",
        }}
      />
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
            <Techniques />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
