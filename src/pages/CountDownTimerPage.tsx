import {useEffect, useState} from "react";

const CountDownTimerPage = () => {
    const [end, setEnd] = useState<number>(0);


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
                <input className="mx-1 border rounded max-w-14" min={0} max={23} placeholder="Hrs:" type="number"/>
                <input className="mx-1 border rounded max-w-14" min={0} max={59} placeholder="Mins:" type="number"/>
                <input className="mx-1 border rounded max-w-14" min={0} max={59} placeholder="Secs:" type="number"/>
                <h1 className="font-bold text-3xl py-4">00 : 00 : 00</h1>
                <button className="max-w-14 bg-green-400 border rounded px-2 mr-2 hover:bg-blue-300">Start</button>
                <button className="bg-green-400 border max-w-14 rounded px-2 mr-2 hover:bg-black hover:text-white">Stop</button>
                <button className="bg-green-400 border max-w-14 rounded px-2 mr-2 hover:text-white hover:bg-red-500">Reset</button>
            </div>


        </>
    )
}

export default CountDownTimerPage;