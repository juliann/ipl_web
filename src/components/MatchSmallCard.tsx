import React from "react";

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
}
export const MatchSmallCard: React.FC<Idata> = ({ match }) => {
  return (
    <div className="MatchSmallCard">
      <p>
        {match.team1} vs {match.team2}
      </p>
    </div>
  );
};
