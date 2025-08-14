import JsLogo from "./JsLogo.tsx";
import {Link} from "react-router";

const Header = () => {
    return (
        <>
            <header className="bg-black">
                <div className="container mx-auto flex items-center justify-between">
                    <JsLogo />
                    <div>
                        <Link to="/Counter" className="text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">Counter</Link>
                        <Link to="/NameChanger" className="text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">NameChanger</Link>
                        <Link to="/NotePad" className="text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">NotePad</Link>
                        <Link to="/OnlineStatus" className="text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">Connectivity</Link>
                        <Link to="/CountDownTimer" className="text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">CountDownTimer</Link>
                        <Link to="/Timer" className="text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">Timer</Link>

                    </div>


                </div>


            </header>
        </>
    )
}

export default Header;