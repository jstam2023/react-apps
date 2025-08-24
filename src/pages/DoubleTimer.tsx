import {useEffect} from "react";
import TimerPage from "./TimerPage.tsx";
import GuessNumberPage from "./GuessNumberPage";
import HomePage from "./HomePage.tsx";

const DoubleTimer = () => {
    useEffect(() => {
        document.title = "Double Timer | JStam";
    }, []);
    return (
        <>
            <div className="text-2xl text-center py-6">
                <h1>Double Timer</h1>
                <hr/>
            </div>


            <div className="flex justify-center py-12">
                 <span className="border-2 rounded-2xl border-amber-700 px-2 mx-4">
                     {<TimerPage />}
                 </span>
                <span className="border-2 rounded-2xl border-amber-400 px-2 mx-4">
                     {<TimerPage />}
                 </span>
            </div>

            <div className="flex justify-center py-12">
                 <span className="border-2 rounded-2xl border-green-600 px-2 mx-4">
                     {<TimerPage />}
                 </span>
                <span className="border-2 rounded-2xl border-blue-600 px-2 mx-4">
                     {<TimerPage />}
                 </span>
            </div>



        </>
    )
}

export default DoubleTimer;