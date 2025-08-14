import {useEffect, useState} from "react";

const Footer = () => {
    const year:number = new Date().getFullYear();

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
            <footer className="bg-black">
                <div className="text-white text-center py-4">
                    <span className="pr-16">Copyright © {year}</span>
                    <span className="pr-16">Created by: JStam</span>
                    <span>Network: </span>
                    <span className={`${isOnline ? "text-green-400" : "text-red-400" }`}>{isOnline ? "Online" : "Offline"}</span>
                </div>
            </footer>
        </>
    )
}

export default Footer;