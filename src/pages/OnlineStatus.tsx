import {useEffect, useState} from "react";

const OnlineStatus = () => {
    useEffect(() => {
        document.title = "Connectivity | JStam";
    }, []);

    useEffect(() => {
        const handler = () => setIsOnline(navigator.onLine);
        const pollingId: number = setInterval(handler, 3000)

        window.addEventListener("online", handler);
        window.addEventListener("offline", handler);

        return () => {
            clearInterval(pollingId)
            window.removeEventListener("online", handler);
            window.removeEventListener("offline", handler);
        };
    }, []);

    const [isOnline, setIsOnline] = useState(navigator.onLine);

    return (
        <>
            <div className="text-2xl text-center py-6">
                <h1>Network Connection Status</h1>
                <hr/>
            </div>
            <div className="py-2 text-center">
                <p>Below you can check your Network Connection status:</p>

            </div>
            <div
                className={`text-white text-center mt-12 p-4 rounded mx-4 ${isOnline ? "bg-green-500" : "bg-red-500"}`}>
                {isOnline ? "You are online!" : "You are offline!"}
            </div>

        </>
    )
}

export default OnlineStatus;