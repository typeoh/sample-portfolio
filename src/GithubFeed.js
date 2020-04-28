import React, { useEffect, useState } from "react";
import { parseTimeStamp } from "./utils/formatters";
import "./GithubFeed.css";

export const GithubFeed = () => {
  const [activities, setActivities] = useState(null);

  useEffect(() => {
    async function getEvents() {
      const response = await fetch(
        "https://api.github.com/users/typeoh/events"
      );
      const data = await response.json();
      const createdActivities = data.filter(
        (activity) => activity.type === "CreateEvent"
      );
      setActivities(createdActivities);
    }
    getEvents();
  }, []);

  return activities ? (
    <div className="section--split">
      {activities.map((activity, index) => (
        <div className="card" key={index}>
          <div className="avatar--wrapper">
            <img
              className="avatar"
              src={activity.actor.avatar_url}
              alt="Really cool person"
            />
          </div>
          <div className="bio">
            <p>{activity.payload.description}</p>
            <p className="font--caption timestamp">
              {parseTimeStamp(activity.created_at)}
            </p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div>Github Feed goes here</div>
  );
};
