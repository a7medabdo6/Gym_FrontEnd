import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Svg, Circle } from 'react-native-svg';

const CountdownTimer = ({ duration, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(interval);
      onComplete();
    }

    return () => clearInterval(interval);
  }, [timeLeft]);

  const calculateProgress = () => {
    const progress = (timeLeft / duration) * 100;
    return progress;
  };

  return (
    <View>
      <Svg height="200" width="200">
        <Circle
          cx="100"
          cy="100"
          r="80"
          stroke="#ccc"
          strokeWidth="10"
          fill="transparent"
        />
        <Circle
          cx="100"
          cy="100"
          r="80"
          stroke="#ff0000"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={`${calculateProgress()}, 100`}
          strokeLinecap="round"
        />
        <Text x="100" y="100" textAnchor="middle" fontSize="20">
          {timeLeft}
        </Text>
      </Svg>
    </View>
  );
};

export default CountdownTimer;

