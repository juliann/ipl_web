import React from "react";
import { Link } from "react-router-dom";
export interface IMatch {
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
export interface Idata {
  match: IMatch;
  teamName: string;
}

export const MatchSmallCard = ({ match, teamName }: Idata) => {
  if (!match) return null;

  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = "/teams/" + otherTeam;
  return (
    <div className="MatchSmallCard">
      <p>
        vs <Link to={otherTeamRoute}>{otherTeam}</Link>
      </p>
      <h3>
        {match.matchWinner} won by {match.resultMargin} {match.result}
      </h3>
    </div>
  );
};
