import React from 'react';

const NumberConverter = ({ num }) => {
  const convertNumber = (number) => {
    if (number >= 1000000000) {
      return (number / 1000000000).toFixed(1) + 'B';
    } else if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'k';
    } else {
      return number.toString();
    }
  };

  return (
    <div className='pr-1'>
      {convertNumber(num) }
    </div>
  );
};

export default NumberConverter;
