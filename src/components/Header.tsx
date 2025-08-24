import JsLogo from "./JsLogo.tsx";
import {Link} from "react-router";

const Header = () => {
    return (
        <>
            <header className="bg-black">
                <div className="container mx-auto flex items-center justify-between">
                    <JsLogo />
                    <div>
                        <Link to="/" className="text-white hover:underline hover:underline-offset-4 hover:text-blue-400 pr-8">Home</Link>
                        <Link to="/AppsPage" className="text-white hover:underline hover:underline-offset-4 hover:text-blue-400 pr-8">Apps</Link>
                        <Link to="/GamesPage" className="text-white hover:underline hover:underline-offset-4 hover:text-blue-400 pr-8">Games</Link>
                    </div>


                </div>


            </header>
        </>
    )
}

export default Header;