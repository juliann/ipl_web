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
export const TeamPage: React.FC = () => {
  const [team, setTeam] = useState<ITeam>({
    id: 0,
    matches: [
      {
        id: 1216506,
        city: "Abu Dhabi",
        date: "2020-11-01",
        playerOfMatch: "RD Gaikwad",
        venue: "Sheikh Zayed Stadium",
        team1: "Kings XI Punjab",
        team2: "Chennai Super Kings",
        tossWinner: "Chennai Super Kings",
        tossDecision: "field",
        matchWinner: "Chennai Super Kings",
        result: "wickets",
        resultMargin: "9",
        umpire1: "PG Pathak",
        umpire2: "VK Sharma",
      },
    ],
    teamName: "",
    totalMatches: 0,
    totalWins: 0,
  });
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
    <div className="TeamPage">
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
