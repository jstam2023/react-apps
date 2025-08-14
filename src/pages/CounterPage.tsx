import {useEffect, useState} from 'react'


const CounterPage = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = 'Counter Page | JStam';
    }, []);


    return (
        <>
            <div className="text-2xl text-center py-6">
                <h1>Counter Page</h1>
                <hr/>
            </div>
            <div className="py-2 text-center">
                <p>Press the Increase, Decrease and Reset buttons and watch the counter...</p>
            </div>
            <h1 className="text-center py-4 font-bold">Count is {count}</h1>
            <div className="text-center">
                <span>
                    <button className="bg-black text-white rounded px-1 py-1 mr-2 hover:text-blue-500" onClick={() => setCount(count + 1)}>Increase</button>
                </span>
                <span>
                    <button disabled={count===0} className="bg-black text-white rounded px-1 py-1 mr-2 hover:text-blue-500" onClick={() => setCount(count - 1)}>Decrease</button>
                </span>
                <span>
                    <button disabled={count===0} className="bg-green-400 text-white rounded py-1 px-1 mr-2 hover:text-blue-500" onClick={() => setCount(0)}>Reset</button>
                </span>
            </div>
        </>
    )
}

export default CounterPage;