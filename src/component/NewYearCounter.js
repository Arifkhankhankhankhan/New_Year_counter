import React, { useState, useEffect } from 'react';
import './newyear.css'; // Import your CSS file

function NewYearCounter() {
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const nextYear = currentDate.getFullYear() + 1;
      const newYearDate = new Date(`January 01 ${nextYear} 00:00:00`);
      const totalSeconds = (newYearDate - currentDate) / 1000;

      const daysLeft = Math.floor(totalSeconds / 3600 / 24);
      const hoursLeft = Math.floor(totalSeconds / 3600) % 24;
      const minutesLeft = Math.floor(totalSeconds / 60) % 60;
      const secondsLeft = Math.floor(totalSeconds) % 60;

      setDays(formatTime(daysLeft));
      setHours(formatTime(hoursLeft));
      setMinutes(formatTime(minutesLeft));
      setSeconds(formatTime(secondsLeft));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Helper function to format time to always display two digits
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="container">
      <div className="header">
        <h1>New Year Counter</h1>
      </div>
      <div className="next-year">
        <h1 id="next-year">{new Date().getFullYear() + 1}</h1>
      </div>

      <div className="counter">
        <div className="days">
          <h1>{days}</h1>
          <h3>Days</h3>
        </div>
        <div className="hours">
          <h1>{hours}</h1>
          <h3>Hours</h3>
        </div>
        <div className="minutes">
          <h1>{minutes}</h1>
          <h3>Minutes</h3>
        </div>
        <div className="seconds">
          <h1>{seconds}</h1>
          <h3>Seconds</h3>
        </div>
      </div>
    </div>
  );
}

export default NewYearCounter;
