import { DisplayPlayers } from "./lib/utilities";
import { players, teams} from "./lib/nba";


function Page() {
  return (
    <div>
      <DisplayPlayers
        team={teams}
        players={players}
      />
    </div>
  )
}

export default Page;