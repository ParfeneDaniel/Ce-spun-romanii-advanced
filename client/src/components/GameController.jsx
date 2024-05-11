import GameCentralController from "./GameCentralController";
import GameTeamController from "./GameTeamController";

const GameController = () => {
  return (
    <div className="gameController">
      <GameTeamController numberOfTeam={1} />
      <GameCentralController />
      <GameTeamController numberOfTeam={2} />
    </div>
  );
};

export default GameController;
