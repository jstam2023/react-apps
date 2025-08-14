import Header from "./Header";
import Footer from "./Footer.tsx";

interface MyLayoutProps {
    children?: React.ReactNode;
}

const MyLayout = ({children}: MyLayoutProps) => {
    return (
        <>
            <Header />
            <div className="container mx-auto min-h-[83vh] bg-amber-100">
                {children}
            </div>
            <Footer />



        </>
    )
}

export default MyLayout;