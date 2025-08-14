import {useEffect} from "react";

const TicTacToePage = () => {
    useEffect(() => {
        document.title = "Tic Tac Toe | JStam";
    }, []);
    return (
        <>
            <div className="text-2xl text-center py-6">
                <h1>Tic Tac Toe</h1>
                <hr/>
            </div>
            <div className="py-2 text-center">
                <p>Tic Tac Toe Game created by React and Vite.</p>
                <hr/>
            </div>
            <div className="bg-gray-400">

            </div>
            <button className="border-4 rounded-2xl bg-blue-900 text-blue-200 w-16">Reset

            </button>



        </>
    )
}

export default TicTacToePage;