import React from "react";
import { Link } from "react-router-dom";
import "./MatchSmallCard.scss";
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

  const otherTeam: string =
    match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute: string = "/teams/" + otherTeam;
  const isMatchWon: boolean = teamName === match.matchWinner;
  return (
    <div
      className={
        isMatchWon ? "MatchSmallCard won-card" : "MatchSmallCard lost-card"
      }
    >
      <span className="vs">vs</span>
      <h1>
        <Link to={otherTeamRoute}>{otherTeam}</Link>
      </h1>
      <p className="match-result">
        {match.matchWinner} won by {match.resultMargin} {match.result}
      </p>
    </div>
  );
};
