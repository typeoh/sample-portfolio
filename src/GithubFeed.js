import React, { useEffect, useState, Fragment } from "react";
import { parseTimeStamp } from "./utils/formatters";
import "./GithubFeed.css";

const EVENT_TYPE = {
  push: "PushEvent",
  create: "CreateEvent",
};

export const GithubFeed = () => {
  const [activities, setActivities] = useState(null);

  useEffect(() => {
    async function getEvents() {
      const response = await fetch(
        "https://api.github.com/users/typeoh/events"
      );
      const data = await response.json();
      const createdActivities = data.filter(
        (activity) =>
          activity.type === EVENT_TYPE.push ||
          activity.type === EVENT_TYPE.create
      );
      setActivities(createdActivities.splice(0, 6)); // Limit number to most recent 6
    }
    getEvents();
  }, []);

  return activities ? (
    <div className="section--split">
      {activities.map(({ actor, payload, created_at, type }, index) => (
        <div className="card" key={index}>
          <div className="avatar--wrapper">
            <img
              className="avatar"
              src={actor.avatar_url}
              alt="Really cool person"
            />
          </div>
          <div className="bio">
            {type === EVENT_TYPE.create ? (
              <p> {payload.description}</p>
            ) : (
              payload.commits.map((commit) => <p>{commit.message}</p>)
            )}
            <p className="font--caption timestamp">
              {parseTimeStamp(created_at)}
            </p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div>Github Feed goes here</div>
  );
};
