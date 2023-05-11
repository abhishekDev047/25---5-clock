"use client";
import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { GrResume, GrPowerReset } from "react-icons/gr";

export default function Home() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [time, setTime] = useState(sessionLength * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [end, setEnd] = useState('');

  useEffect(() => {
    let countdown;

    if (isRunning) {
      countdown = setInterval(() => {
        setTime(prevTime => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            if (sessionLength === prevTime / 60) {
              setSessionLength(prevLength => {
                if (prevLength === 1) {
                  setBreakLength(5);
                  return 25;
                }
                return prevLength - 1;
              });
              return prevTime;
            } else {
              // setSessionLength(prevLength => prevLength + 1);
              let audio = new Audio('/audios/beep.mp3');
              audio.play();
              setEnd(`Time's up`);
              return prevTime;
            }
          }
        });
      }, 1000);
    } else {
      clearInterval(countdown);
    }

    return () => {
      clearInterval(countdown);
    };
  }, [isRunning, sessionLength]);



  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
  };

  const toggleTimer = () => {
    setIsRunning(prev => !prev);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setBreakLength(5);
    setSessionLength(25);
    setTime(25 * 60);
    setEnd('');
  };

  const adjustLength = (type, target) => {
    if (isRunning) return;

    if (target === 'break') {
      if (type === 'decrement' && breakLength > 1) {
        setBreakLength(prevLength => prevLength - 1);
      } else if (type === 'increment') {
        setBreakLength(prevLength => prevLength + 1);
      }
    } else if (target === 'session') {
      if (type === 'decrement' && sessionLength > 1) {
        setSessionLength(prevLength => prevLength - 1);
        setTime(prevTime => prevTime - 60);
      } else if (type === 'increment') {
        setSessionLength(prevLength => prevLength + 1);
        setTime(prevTime => prevTime + 60);
      }
    }
  };

  return (
    <main
      className="flex  min-h-screen flex-col items-center  justify-center text-sm sm:text-lg md:text-2xl p-5 bg-zinc-400 
    text-yellow-400  "
    >
      <div className="flex flex-col bg-zinc-600 shadow-xl rounded-md p-5  text-center items-center">
        <div className="items-center justify-center">
          <div className="text-3xl"> 25 + 5 Clock</div>
        </div>

        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col items-center justify-center my-3 mx-5">
            <div id="break-label" className="  ">
              
              Break Length
            </div>
            <div className="flex flex-row ">
              <button
                id="break-decrement"
                className="font-bold text-black mx-1"
                onClick={()=>adjustLength('decrement', 'break')}
              >
                
                <FaArrowDown />
              </button>
              <span id="break-length"> {breakLength} </span>
              <button
                id="break-increment"
                className="font-bold text-black mx-1"
                onClick={()=>adjustLength('increment', 'break')}
              >
              
                <FaArrowUp />
              </button>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center my-3 mx-5">
            <div id="session-label" className="  ">
              
              Session Length
            </div>
            <div className="flex flex-row">
              <button
                id="session-decrement"
                className="font-bold text-black mx-1"
                onClick={()=>adjustLength('decrement', 'session')}
              >
               
                <FaArrowDown />
              </button>
              <span id="session-length">{sessionLength} </span>
              <button
                id="session-increment"
                className="font-bold text-black mx-1"
                onClick={()=>adjustLength('increment', 'session')}
              >
              
                <FaArrowUp />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 p-5 md:text-2xl lg:text-5xl rounded-full">
          {formatTime(time)}
        </div>
        <div className="flex flex-row my-2">
          <button id="start_stop" 
          className="font-bold text-black mx-1" 
          onClick={toggleTimer}
          >
            <GrResume />
          </button>
          <button id="reset"
           className="font-bold text-black mx-1"
           onClick={resetTimer}
           >
           
            <GrPowerReset />
          </button>
        </div>

        <div className="text-xs mb-0 mt-5">
          
          created by
          <a
            target="_black"
            className="text-blue-600"
            href="https://www.instagram.com/ab_hish_ek_1"
          >
            
            Abhishek
          </a>
        </div>
        <div className="text-sm text-red-700">
          {end}
        </div>
      </div>
    </main>
  );
}
