import React, { useState, useEffect } from "react";
import moment from "moment";

const TimeComponent = (props) => {
  const { initialTime } = props;
  const [currentTime, setCurrentTime] = useState(parseTime(initialTime));

  function parseTime(timeValue) {
    const seconds = parseInt(timeValue, 10);
    const duration = moment.duration(seconds, "seconds");
    const hours = duration.hours();
    const minutes = duration.minutes();
    const remainingSeconds = duration.seconds();
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime((prevTime) => {
        const newTime = moment(prevTime, "HH:mm:ss")
          .subtract(2, "seconds")
          .format("HH:mm:ss");
        return newTime;
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return <>{currentTime}</>;
};

export default TimeComponent;
