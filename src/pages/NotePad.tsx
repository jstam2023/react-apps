import {useEffect} from "react";

const NotePad = () => {
    useEffect(() => {
        document.title = "NotePad App | JStam";
    }, []);
    return (
        <>
            <div className="text-2xl text-center py-6">
                <h1>NotePad Page</h1>
                <hr/>
            </div>
            <div className="py-2 text-center">
                <p><strong>Signed in:</strong> data will be stored on your account </p>
                <p><strong>Not Signed in:</strong> data will be stored only on this device. </p>

            </div>
        </>
    )
}

export default NotePad;