import React, { useState, useEffect } from 'react';

const DateDifference = ({ dateString }) => {
  const [difference, setDifference] = useState(null);

  useEffect(() => {
    const calculateDifference = () => {
      const currentDate = new Date();
      const inputDate = new Date(dateString);
      const diffInMilliseconds = Math.abs(currentDate - inputDate);

      const millisecondsInDay = 1000 * 60 * 60 * 24;
      const days = Math.floor(diffInMilliseconds / millisecondsInDay);
      const hours = Math.floor((diffInMilliseconds % millisecondsInDay) / (1000 * 60 * 60));
      const minutes = Math.floor((diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffInMilliseconds % (1000 * 60)) / 1000);

      setDifference({ days, hours, minutes, seconds });
    };

    calculateDifference();
  }, [dateString]);

  if (!difference) {
    return <div>Loading...</div>;
  }

  let output = '';

  if (difference.days >= 365) {
    const years = Math.floor(difference.days / 365);
    output = `${years} year${years > 1 ? 's' : ''}`;
  } else if (difference.days >= 30) {
    const months = Math.floor(difference.days / 30);
    output = `${months} month${months > 1 ? 's' : ''}`;
  } else if (difference.days >= 1) {
    output = `${difference.days} day${difference.days > 1 ? 's' : ''}`;
  } else if (difference.hours >= 1) {
    output = `${difference.hours} hour${difference.hours > 1 ? 's' : ''}`;
  } else if (difference.minutes >= 1) {
    output = `${difference.minutes} minute${difference.minutes > 1 ? 's' : ''}`;
  } else {
    output = `${difference.seconds} second${difference.seconds > 1 ? 's' : ''}`;
  }

  return (
    <div>
      <p>{output}</p>
    </div>
  );
};

export default DateDifference;
