import logo from "../../../assets/dolphin-logo.png"

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto flex items-center">
                <div className="flex items-center">
                <img src={logo} alt="" className="h-12" />
                <div className="text-white text-2xl font-bold">Dolphin Emulator</div>
                </div>
                {/* Nav Links */}
                <ul className="flex space-x-16 text-white mx-auto">
                    <li><a href="#" className="hover:text-gray-300">Home</a></li>
                    <li><a href="#" className="hover:text-gray-300">How to use</a></li>
                    <li><a href="#" className="hover:text-gray-300">About</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;