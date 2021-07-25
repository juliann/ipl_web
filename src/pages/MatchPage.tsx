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
  const [team, setTeam] = useState<ITeam>();
  const { teamName } = useParams<{ teamName: string }>();
  useEffect(() => {
    console.log("hi");

    const fetchMatches = async () => {
      const response = await fetch(`http://localhost:8080/team/${teamName}`);
      const data = await response.json();
      setTeam(data);
      console.log(team);
    };
    fetchMatches();
  }, [teamName]);

  if (!team || !team.teamName) return <h1>not found</h1>;
  return (
    <div className="MatchPage">
      <h1>{team.teamName}</h1>
      <MatchDetailCard match={team.matches[0]} teamName={teamName} />
      {team.matches.slice(1).map((match, index) => {
        return (
          <MatchSmallCard key={index} teamName={team.teamName} match={match} />
        );
      })}
    </div>
  );
};
