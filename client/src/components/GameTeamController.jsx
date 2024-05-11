const GameTeamController = ({ numberOfTeam }) => {
  return (
    <div className="gameTeamController">
      <button>Red Team {numberOfTeam}</button>
      <button>Add points to team {numberOfTeam}</button>
    </div>
  );
};

export default GameTeamController;
