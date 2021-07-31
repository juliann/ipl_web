import React from "react";
import "./YearSelector.scss";
import { Link } from "react-router-dom";

export interface ITeamName {
  teamName: string;
}

export const YearSelector = (teamName: ITeamName) => {
  let years = [];
  const startYear = process.env.REACT_APP_DATA_START_YEAR;
  const endYear = process.env.REACT_APP_DATA_END_YEAR;
  console.log(teamName);
  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }
  return (
    <ol className="YearSelector">
      {years.map((year) => (
        <li key={year}>
          <Link to={`/teams/${teamName.teamName}/matches/${year}`}>{year}</Link>
        </li>
      ))}
    </ol>
  );
};
