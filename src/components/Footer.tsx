const Footer = () => {
    const year:number = new Date().getFullYear();

    return (
        <>
            <footer className="bg-gray-700">
                <div className="text-white text-center py-4">
                    <span className="pr-16">Copyright © {year}</span>
                    <span>Created by: JStam</span>
                </div>
            </footer>
        </>
    )
}

export default Footer;