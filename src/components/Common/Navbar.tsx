
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { path } from "../../config/path";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    return (
        <nav className={`md:col-span-6 xl:col-span-5 w-full transition-all duration-300 ${showMenu ? "block" : "hidden"} md:flex`}>
            <ul className="flex flex-col md:flex-row justify-center md:justify-start space-y-3 md:space-y-0 md:space-x-reverse md:space-x-6">
                <li className="relative group">
                    <button
                        className="hover:underline bg-primary-blue p-1 text-white rounded-md text-center w-full md:w-auto"
                        onClick={() => toggleDropdown(0)}
                    >
                        اطلاعات پایه
                        <FontAwesomeIcon icon={faChevronDown}  className={`h-2 w-2 px-2 transition-transform duration-300 ${activeDropdown === 0 ? "rotate-180" : ""}`} />
                    </button>
                    <ul className={`absolute right-0 w-40 bg-white shadow-md rounded-md mt-1 transition-all duration-300 ease-in-out transform ${activeDropdown === 0 ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"} md:group-hover:scale-100 md:group-hover:opacity-100 md:pointer-events-auto`}>
                        <li className="hover:bg-gray-200 p-2">
                            <Link to={path.createSubscription}>ایجاد اشتراک</Link>
                        </li>
                    </ul>
                </li>

                <li className="hover:underline text-gray p-1"><a href="#">درخواست ها</a></li>
                <li className="hover:underline text-gray p-1"><a href="#">قبوض</a></li>
                <li className="hover:underline text-gray p-1"><a href="#">قرائت</a></li>
                <li className="hover:underline text-gray p-1"><a href="#">وصول</a></li>
                <li className="hover:underline text-gray p-1"><a href="#">گزارش ها</a></li>
                <li className="hover:underline text-gray p-1"><a href="/management">مدیریت</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;