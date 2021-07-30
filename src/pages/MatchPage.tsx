import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MatchDetailCard } from "../components/MatchDetailCard";
import { IMatch, MatchSmallCard } from "../components/MatchSmallCard";
import "./MatchPage.scss";
import { YearSelector } from "../components/YearSelector";
interface ParamTypes {
  teamName: string;
  year: string;
}

export const MatchPage = () => {
  const [matches, setMatches] = useState<IMatch[] | undefined>([]);

  const { teamName, year } = useParams<ParamTypes>();

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(
        `http://localhost:8080/team/${teamName}/matches?year=${year}`
      );
      const data = await response.json();
      setMatches(data as IMatch[]);
    };

    fetchMatches();
    console.log(matches);
  }, []);

  return (
    <div className="MatchPage">
      <div className="year-selector">
        <YearSelector teamName={teamName} />
      </div>

      <div>
        <h1>Match Page</h1>
        {matches &&
          matches.map((match, index) => {
            return (
              <MatchDetailCard key={index} teamName={teamName} match={match} />
            );
          })}
      </div>
    </div>
  );
};
