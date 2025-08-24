import {Link} from "react-router";
import AppFrame from "../components/AppFrame.tsx";
import {useEffect} from "react";

const AppsPage= () => {

    useEffect(() => {
        document.title = "Apps Page | JStam"
    }, []);

    return (
        <>
            <div className="text-2xl text-center py-6">
                <h1>Apps Page</h1>
                <hr/>
            </div>
            <div className="py-2 text-center">
                <p><strong>Apps Section:</strong></p>
            </div>
            <br/>

            <div className="bg-gray-600 rounded-lg py-2 px-2 w-38">
                <h1 className="text-blue-300 text-center">Apps:</h1>
                <Link to="/Counter" className="block text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">Counter</Link>
                <Link to="/NameChanger" className="block text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">NameChanger</Link>
                <Link to="/NotePad" className="block text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">NotePad</Link>
                <Link to="/OnlineStatus" className="block text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">Connectivity</Link>
                <Link to="/CountDownTimer" className="block text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">CountDownTimer</Link>
                <Link to="/Timer" className="block text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">Timer</Link>
                <Link to="/DoubleTimer" className="block text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">DoubleTimer</Link>

            </div>
            <div className="bg-gray-600 rounded-lg py-2 px-2 w-38">
                <h1 className="text-blue-300 text-center">Apps:</h1>
                <Link to="/Counter" className="block text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">Counter</Link>
                <Link to="/NameChanger" className="block text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">NameChanger</Link>
                <Link to="/NotePad" className="block text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">NotePad</Link>
                <Link to="/OnlineStatus" className="block text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">Connectivity</Link>
                <Link to="/CountDownTimer" className="block text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">CountDownTimer</Link>
                <Link to="/Timer" className="block text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">Timer</Link>
            </div>
            <div className="flex flex-wrap py-2 mt-2 px-2 space-x-2 space-y-2">
                <Link to="/Timer" className="text-white hover:underline hover:bg-gray-400">{<AppFrame/>}</Link>
                <Link to="/Timer" className="text-white hover:underline hover:bg-gray-400">{<AppFrame/>}</Link>
                <Link to="/Timer" className="text-white hover:underline hover:bg-gray-400">{<AppFrame/>}</Link>
                <Link to="/Timer" className="text-white hover:underline hover:bg-gray-400">{<AppFrame/>}</Link>
                <Link to="/Timer" className="text-white hover:underline hover:bg-gray-400">{<AppFrame/>}</Link>

            </div>



        </>
    )
}

export default AppsPage;