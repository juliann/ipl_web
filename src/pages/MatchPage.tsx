import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

interface ITeam {
  id: number;
  teamName: string;
  totalMatches: number;
  totalWins: number;
  matches: {
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
  }[];
}
export const MatchPage = () => {
  return (
    <div className="MatchPage">
      <h1>Match Page</h1>
    </div>
  );
};
