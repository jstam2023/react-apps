import {useEffect} from "react";
import {Link} from "react-router";
// import GuessNumberPage from "./GuessNumberPage.tsx";

const GamesPage = () => {

    useEffect(() => {
        document.title = "Games Page | JStam"
    }, []);
    return (
        <>
            <div className="text-2xl text-center py-6">
                <h1>Games Page</h1>
                <hr/>
            </div>
            <div className="py-2 text-center">
                <p>Here you can find Various Games that are created with React-Vite</p>

                <hr/>
            </div>
            {/*<div className="flex px-2 space-x-2 justify-center">*/}
            {/*    <div className="bg-gray-600 rounded-lg py-2 px-2 w-38">*/}
            {/*        <h1 className="text-blue-300 text-center">Apps:</h1>*/}
            {/*        <Link to="/Counter" className="block text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">Counter</Link>*/}
            {/*        <Link to="/NameChanger" className="block text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">NameChanger</Link>*/}
            {/*        <Link to="/NotePad" className="block text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">NotePad</Link>*/}
            {/*        <Link to="/OnlineStatus" className="block text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">Connectivity</Link>*/}
            {/*        <Link to="/CountDownTimer" className="block text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">CountDownTimer</Link>*/}
            {/*        <Link to="/Timer" className="block text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">Timer</Link>*/}
            {/*    </div>*/}

            <div className="bg-gray-600 rounded-lg py-2 px-2 w-40">
                <h1 className="text-blue-300 text-center">Games:</h1>
                <Link to="/GuessNumberPage" className="block text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">Guess Number</Link>
                <Link to="/TicTacToePage" className="block text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">TicTacToe</Link>

            </div>


        </>
    )
}

export default GamesPage;