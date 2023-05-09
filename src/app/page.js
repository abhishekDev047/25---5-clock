"use client";
import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { GrResume, GrPowerReset } from "react-icons/gr";

export default function Home() {
  const [breakl, setBreakl] = useState(5);
  const [session, setSession] = useState(25);
  const [time, setTime] = useState(session);

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
                onClick={()=>setBreakl(breakl - 1)}
              >
                
                <FaArrowDown />
              </button>
              <span id="break-length"> {breakl} </span>
              <button
                id="break-increment"
                className="font-bold text-black mx-1"
                onClick={()=>setBreakl(breakl + 1)}
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
                onClick={()=>{setSession(session - 1),setTime(time-1)}}
              >
               
                <FaArrowDown />
              </button>
              <span id="session-length">{session} </span>
              <button
                id="session-increment"
                className="font-bold text-black mx-1"
                onClick={()=>{setSession(session + 1),setTime(time+1)}}
              >
              
                <FaArrowUp />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 p-5 md:text-2xl lg:text-5xl rounded-full">
          {time}
        </div>
        <div className="flex flex-row my-2">
          <button id="start_stop" 
          className="font-bold text-black mx-1" 
          // onClick={}
          >
            <GrResume />
          </button>
          <button id="reset"
           className="font-bold text-black mx-1"
           onClick={()=>{setBreakl(5),setSession(25),setTime(25)}}
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
      </div>
    </main>
  );
}
