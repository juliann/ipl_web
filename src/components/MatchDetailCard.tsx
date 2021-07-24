import React from "react";
import { Link } from "react-router-dom";

interface IMatch {
  id: number;
  city: string;
  date: string;
  playerOfMatch: string;
  venue: string;
  team1: string;
  team2: string;
  tossDecision: string;
  tossWinner: string;
  matchWinner: string;
  result: string;
  resultMargin: string;
  umpire1: string;
  umpire2: string;
}
interface Idata {
  match: IMatch;
  teamName: string;
}

export const MatchDetailCard: React.FC<Idata> = ({ match, teamName }) => {
  if (!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = "/teams/" + otherTeam;
  return (
    <div className="MatchDetailCard">
      <h3>latest Matches</h3>
      <h1>
        vs <Link to={otherTeamRoute}>{otherTeam}</Link>
      </h1>
      <h2>{match.date}</h2>
      <h3>{match.venue}</h3>
      <h3>
        {match.matchWinner} won by {match.resultMargin} {match.result}
      </h3>
    </div>
  );
};
