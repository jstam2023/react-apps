import {useEffect, useRef, useState} from "react";
import * as React from "react";

const CountDownTimerPage = () => {
    const [hoursInput, setHoursInput] = useState(0);
    const [minutesInput, setMinutesInput] = useState(0);
    const [secondsInput, setSecondsInput] = useState(0);
    const [time, setTime] = useState(0);
    const [display, setDisplay] = useState(`00:00:00`);
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(0);
    const timeRef = useRef(0)


    function start(){
        if (time <= 0) {
            clearInterval(count)
            updateDisplay()
            alert("Time is Up!")
        }else {
            setTime(time-1)
            updateDisplay()
        }
    }


    function updateDisplay() {
        const hours = Math.floor(time/3600);
        const minutes = Math.floor(time%60);
        const seconds = String(time % 60);
        setDisplay(`${hours<10 ? "0" + hours : hours} : ${minutes<10? "0" + minutes : minutes} : ${seconds<10?"0"+seconds : seconds}`);

    }

    const handleHours = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) > 23) {
            setHoursInput(23)
        }
        if (Number(e.target.value) <= 0) {
            setHoursInput(0)
        }
        else {
            setHoursInput(Number(e.target.value))
        }
    }

    const handleMinutes = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) > 59) {
            setMinutesInput(59)
        }
        if (Number(e.target.value) < 0) {
            setMinutesInput(0)
        }
        else {
            setMinutesInput(Number(e.target.value))
        }
    }

    const handleSeconds = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) > 59) {
            setSecondsInput(59)
        }
        if (Number(e.target.value) < 0) {
            setSecondsInput(0)
        }
        else {
            setSecondsInput(Number(e.target.value))
        }
    }

    useEffect(() => {
        calcTime()
    }, [hoursInput, minutesInput, secondsInput]);


    useEffect(() => {
        updateDisplay()
    }, [time]);


    const calcTime = () => {
        setTime((Number(hoursInput)*3600) + (Number(minutesInput)*60) + Number(secondsInput));
        updateDisplay()
    }

    const count = setInterval(start,intervalId)



    useEffect(() => {
        document.title = "CountDownTimer | JStam";
    }, []);

    return (
        <>
            <div className="text-2xl text-center py-6">
                <h1>CountDownTimer Page</h1>
                <hr/>
            </div>
            <div className="py-2 text-center">
                <p><strong>A Count Down Timer App:</strong> set time to count down.  </p>
            </div>
            <br/>
            <hr/>
            <h1 className="font-bold text-2xl py-4 text-center">Timer</h1>

            <div className="text-center py-6">
                <input
                    onChange={handleHours}
                    className="mx-1 border rounded max-w-14" min={0} max={23} placeholder="Hrs:" type="number"
                />
                <input
                    onChange={handleMinutes}
                    className="mx-1 border rounded max-w-14" min={0} max={59} placeholder="Mins:" type="number"
                />
                <input
                    onChange={handleSeconds}
                    className="mx-1 border rounded max-w-14" min={0} max={59} placeholder="Secs:" type="number"
                />
                <h1 className="font-bold text-3xl py-4">{display}</h1>
                <button
                    // onClick={count}
                    disabled={isRunning || time === 0}
                    className="max-w-14 bg-green-400 border rounded px-2 mr-2 hover:bg-blue-300">Start</button>
                <button className="bg-green-400 border max-w-14 rounded px-2 mr-2 hover:bg-black hover:text-white">Stop</button>
                <button className="bg-green-400 border max-w-14 rounded px-2 mr-2 hover:text-white hover:bg-red-500">Reset</button>
                <label>time: {time}</label>
            </div>


        </>
    )
}

export default CountDownTimerPage;