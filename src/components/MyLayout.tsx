import JsLogo from "./JsLogo.tsx";

interface MyLayoutProps {
    children?: React.ReactNode;
}

const MyLayout = ({children}: MyLayoutProps) => {
    return (
        <>
            <JsLogo />

            {children}
        </>
    )
}

export default MyLayout;