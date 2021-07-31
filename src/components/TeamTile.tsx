import { ITeamName } from "./YearSelector";
import React from "react";
import "./TeamTile.scss";
import { Link } from "react-router-dom";
export const TeamTile = (teamName: ITeamName) => {
  return (
    <div className="TeamTile">
      <h1>
        <Link to={`/teams/${teamName.teamName}`}>{teamName.teamName}</Link>
      </h1>
    </div>
  );
};
