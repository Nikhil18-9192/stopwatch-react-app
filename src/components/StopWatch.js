// src/Stopwatch.js
import React, { useState, useEffect } from 'react';
import { VscDebugStart } from "react-icons/vsc";
import { FaPause } from "react-icons/fa6";
import { FaStop } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [showTime, setShowTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isStopped, setIsStopped] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(time + 1);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
    setIsStopped(false);
  };

  const handleStop = () => {
    setIsStopped(true);
    setIsRunning(false);
    setTime(0);
    setShowTime(time);
  };

  const handleReset = () => {
    setTime(0);
    setShowTime(0);
    setIsStopped(false);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    let seconds = Math.floor(time / 100);
    const milliseconds = time % 100;
    const minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="stopwatch">
      <h1 className='text-4xl font-bold text-primary text-center uppercase'>Stop watch</h1>
      <p className='text-6xl font-bold text-white text-center my-48'>{isStopped ? formatTime(showTime) : formatTime(time)}</p>
      <div className="btn-container flex justify-center justify-evenly">
      <button onClick={handleStartPause} className={`p-2 rounded-full ${isRunning ? 'bg-gray-500' : 'bg-green-200'}`}>
        {isRunning ? <FaPause className='text-3xl text-black' /> : <VscDebugStart className='text-3xl text-green-500' />}
      </button>
      <button onClick={handleStop} disabled={!isRunning} className='p-2 rounded-full bg-red-200'>
      <FaStop className='text-3xl text-red-500' />
      </button>
      <button onClick={handleReset} disabled={isRunning} className='p-2 rounded-full bg-red-200'>
      <GrPowerReset className='text-3xl text-red-500' />
      </button>
      </div>
      
    </div>
  );
};


export default StopWatch;