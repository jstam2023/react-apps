import {useEffect, useState} from "react";

const GuessNumberPage = () => {
    useEffect(() => {
        document.title = "Guess Number Page | JStam"
    }, []);

    const initialValue="";

    const [secret, setSecret] = useState(Math.floor(Math.random() * 100) + 1);
    const [guess, setGuess] = useState(initialValue);
    const [result, setResult] = useState("");
    const [attempts, setAttempts] = useState(0);



    const handleGuess= () => {

        if (Number(guess) > 100 || Number(guess) < 1) {
            setResult("Enter a valid number")
        }
        else if (Number(guess) > secret) {
            setResult(`The secret number is lower than ${guess}`)
            setAttempts(prev => prev + 1)
        } else if (Number(guess) < secret) {
            setResult(`The secret number is higher than ${guess}`)
            setAttempts(prev => prev + 1)
        } else if (Number(guess) === secret) {
            setResult(`You Win the secret number is ${guess}`)
        }
        setGuess("")
    }

    const handleRestart = () => {
        setResult("")
        setGuess("")
        setSecret(Math.floor(Math.random() * 100) + 1)
        setAttempts(0)
    }

    return (
        <>
            <div className="text-2xl text-center py-6">
                <h1>Guess The Number</h1>
                <hr/>
            </div>
            <div className="py-2 text-center">
                <p>Find the secret number from 1 to 100 and Win!</p>
                <hr/>
            </div>
            <div className="py-6 px-4 text-center">
                <span>Your Guess</span>
                <input type="number" onChange={(e) => setGuess(e.target.value)} min={1} max={100} className="bg-white border rounded ml-2 w-16" placeholder="1-100" value={guess}/>
                <button
                    onClick={handleGuess}
                    className="bg-green-400 rounded border ml-2 w-14 hover:text-white"
                >Check</button>
            </div>
            <div className="text-center py-6 ">
                <h1 className="text-center py-4">{result}</h1>
                <h1 className="py-4">Attempts: {attempts}</h1>
            </div>
            <div className="text-center py-12">
                <button
                    onClick={handleRestart}
                    className="bg-cyan-900 border-4 text-cyan-400 w-16 rounded-4xl hover:font-bold"
                >Restart</button>
            </div>
        </>
    )
}

export default GuessNumberPage;