import {useEffect, useState} from "react";
import * as React from "react";

const NameChangerPage = () => {
    useEffect(() => {
        document.title = "NameChanger | JStam";
    }, []);

    const [name, setName] = useState("");

    const handleChange= (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)

    }

    return (
        <>
            <div className="text-2xl text-center py-6">
                <h1>Name Changer Page</h1>
                <hr/>
            </div>
            <div className="py-2 text-center">
                <p>Here you can enter your name and get a greeting message created with React-Vite</p>
            </div>
            <h1 className="text-center py-4 text-xl font-bold">Hello, {name || "Stranger"}</h1>
            <div className="text-center">
                <input type="text"
                       placeholder="Enter your name"
                       value={name}
                    onChange={handleChange}
                       className="border rounded text-center"
                />
            </div>



        </>
    )
}

export default NameChangerPage;