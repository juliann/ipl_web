import React from "react";
import { Link } from "react-router-dom";
import "./MatchDetailCard.scss";

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

export const MatchDetailCard = ({ match, teamName }: Idata) => {
  if (!match) return null;

  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = "/teams/" + otherTeam;
  const isMatchWon: boolean = teamName === match.matchWinner;
  return (
    <div
      className={
        isMatchWon ? "MatchDetailCard won-card" : "MatchDetailCard lost-card"
      }
    >
      <div>
        <span className="vs">vs</span>
        <h1>
          <Link to={otherTeamRoute}>{otherTeam}</Link>
        </h1>
        <h2 className="match-date">{match.date}</h2>
        <h3 className="match-venue">{match.venue}</h3>
        <h3 className="match-result">
          {match.matchWinner} won by {match.resultMargin} {match.result}
        </h3>
      </div>
      <div className="additional-detail">
        <h3>First Inning</h3>
        <p>{match.team1}</p>
        <h3>Second Inning</h3>
        <p>{match.team2}</p>
        <h3>Man of the Match</h3>
        <p>{match.playerOfMatch}</p>
        <h3>Umpire</h3>
        <p>
          {match.umpire1}, {match.umpire2}
        </p>
      </div>
    </div>
  );
};
