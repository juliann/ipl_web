import React from "react";
import { Idata } from "./MatchSmallCard";
export const MatchDetailCard: React.FC<Idata> = (match) => {
  if (!match) return null;
  return (
    <div className="MatchDetailCard">
      <h1>
        {match.match.team1} vs {match.match.team2}{" "}
      </h1>
    </div>
  );
};
