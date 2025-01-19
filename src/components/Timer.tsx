import React, { useState, useEffect } from 'react';
import './Timer.css'; 

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(60); // Set initial time in seconds
  const [isActive, setIsActive] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<number>(60); // Input for custom duration

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, seconds]);

  const startTimer = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(60); // Reset to initial time
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };

  const setCustomTimer = () => {
    setSeconds(inputValue);
  };

  return (
    <div className="timer-container">
      <h1>Timer: {seconds} seconds</h1>
      <input 
        type="number" 
        value={inputValue} 
        onChange={handleInputChange} 
        min="1" 
        placeholder="Set seconds" 
      /><br />
      <button onClick={setCustomTimer} disabled={isActive}>
        Set Timer
      </button>
      <button onClick={startTimer} disabled={isActive || seconds === 0}>
        Start
      </button>
      <button onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
