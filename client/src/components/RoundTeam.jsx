import { useGameContext } from "../context/GameContext";

const RoundTeam = ({ numberOfTeam }) => {
  const { setTeam1, setTeam2 } = useGameContext();
  const teams = [setTeam1, setTeam2];
  const currentTeam = teams[numberOfTeam - 1];
  const handleSetTeamChange = (e) => {
    currentTeam(e.target.value);
  };
  return (
    <div className="roundTeam">
      <h2>Team {numberOfTeam}</h2>
      <input type="text" onChange={handleSetTeamChange} />
    </div>
  );
};

export default RoundTeam;
