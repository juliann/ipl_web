import { useEffect, useState } from "react";
import { TeamTile } from "../components/TeamTile";
import { ITeam } from "./TeamPage";
import "./HomePage.scss";
import React from "react";

export const HomePage = () => {
  const [teams, setTeams] = useState<ITeam[]>([]);

  useEffect(() => {
    const fetchAllTeams = async () => {
      const response = await fetch(`http://localhost:8080/team/`);
      const data = await response.json();

      setTeams(data);
    };
    fetchAllTeams();
  }, []);

  return (
    <div className="Homepage">
      <div className="header-section">
        <h1 className="app-name">IPL Dashboard</h1>
      </div>
      <div className="team-grid">
        {teams.map((team) => (
          <TeamTile teamName={team.teamName} />
        ))}
      </div>
    </div>
  );
};
