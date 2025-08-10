import JsLogo from "./JsLogo.tsx";

const Header = () => {
    return (
        <>
            <header className="bg-black">
                <div className="container mx-auto flex items-center justify-between">
                    <JsLogo />
                    <div>
                        <a href="/" className="text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">Home</a>
                        <a href="/" className="text-white hover:underline hover:underline-offset-4 hover:text-red-400 pr-8">Apps</a>
                    </div>


                </div>


            </header>
        </>
    )
}

export default Header;