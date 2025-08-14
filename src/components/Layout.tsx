import Header1 from "./Header1.tsx";
import Footer from "./Footer.tsx";

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Header1 />
            <div className="container mx-auto min-h-[91vh] bg-gray-400">
                {children}
            </div>
            <Footer />



        </>
    )
}

export default Layout;