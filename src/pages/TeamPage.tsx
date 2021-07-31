import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./TeamPage.scss";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";
import { PieChart } from "react-minimal-pie-chart";
export interface ITeam {
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
export const TeamPage = () => {
  const [team, setTeam] = useState<ITeam | undefined>();
  const { teamName } = useParams<{ teamName: string }>();
  useEffect(() => {
    console.log("hi");

    const fetchTeams = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`
      );
      const data = await response.json();
      setTeam(data);
    };
    fetchTeams();
  }, [teamName]);

  if (!team || !team.teamName) return <h1>not found</h1>;
  return (
    <div className="TeamPage">
      <div className="team-name-section">
        <h1 className="team-name">{team.teamName}</h1>
      </div>
      <div className="win-loss-section">
        Wins/Losses
        <PieChart
          data={[
            {
              title: "Losses",
              value: team.totalMatches - team.totalWins,
              color: "#a34d5d",
            },
            { title: "Wins", value: team.totalWins, color: "#4da375" },
          ]}
        />
      </div>
      <div className="match-detail-section">
        <h3>latest Matches</h3>
        <MatchDetailCard match={team.matches[0]} teamName={teamName} />
      </div>

      {team.matches.slice(1).map((match, index) => {
        return (
          <MatchSmallCard key={index} teamName={team.teamName} match={match} />
        );
      })}
      <div className="more-button">
        <Link
          to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}
        >
          more &gt;
        </Link>
      </div>
    </div>
  );
};
