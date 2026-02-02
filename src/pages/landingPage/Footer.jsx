const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-black text-white p-4 shadow-sm">
            <div className="text-center">
                <p className="small mb-1 text-white">
                    &copy;  {currentYear} Imara Kileleni Safaris | All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
