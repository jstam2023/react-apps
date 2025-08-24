import {useEffect, useState} from "react";

const TimerPage = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        document.title = "Timer Page | JStam";
    }, []);

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(()=> {
                setTime(prevTime => prevTime + 10);
            }, 10);
        }else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);

    return (
        <>
            <div className="text-2xl text-center py-6">
                <h1>Timer Page</h1>
                <hr/>
            </div>
            <div className="py-2 text-center">
                <p>A simple Timer App made with Vite and React.</p>
            </div>

            <div>
                <div className="text-center text-2xl py-4">
                    <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
                </div>
                <div className="text-center py-1">
                    {running ? (
                        <button
                            onClick={()=> {setRunning(false)}}
                            className="bg-black text-white border max-w-14 rounded px-2 mr-2 hover:bg-black hover:text-blue-300"
                        >Stop</button>
                    ) : (
                        <button
                            onClick={()=> {setRunning(true)}}
                            className="max-w-14 bg-green-400 border rounded px-2 mr-2 hover:bg-blue-300"
                        >Start</button>
                    )
                    }
                    <button
                        onClick={()=> {setTime(0)}}
                        className="bg-green-400 border max-w-14 rounded px-2 mr-2 hover:text-white hover:bg-red-500"
                    >Reset</button>
                </div>
            </div>


        </>
    )
}
export default TimerPage;