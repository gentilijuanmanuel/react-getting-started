import React, { useState, useEffect } from 'react';
import './Clock.css';

// Class component version of 'Clock' available in:
// clock/src/Clock.js :)
const Clock = () => {
  const [clockState, setClockState] = useState({
    date: new Date()
  });

  const tick = () => {
    setClockState({
      date: new Date()
    });
  };

  useEffect(() => {
    const timerId = setInterval(
      () => tick(),
      1000
    );

    return (() => {
      clearInterval(timerId);
    });
  });

  return (
    <h1 className="clock">
      {
        clockState.date.toLocaleTimeString(
          navigator.language,
          {
            hour: '2-digit',
            minute: '2-digit'
          }
        )
      }
    </h1>
  );
};

export default Clock;
