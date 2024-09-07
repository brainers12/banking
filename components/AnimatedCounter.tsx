"use client";

import React from 'react';
import CountUp from 'react-countup';

type AnimatedCounterProps = {
  amount: number;
};

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ amount }) => {
  return (
    <div className="w-full">
      <CountUp
        decimals={2}
        decimal=","
        prefix="$"
        end={amount}
        duration={2.0} // Adjust duration as needed for the animation effect
      />
    </div>
  );
};

export default AnimatedCounter;
