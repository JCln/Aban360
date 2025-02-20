import LogoImg from '../../assets/images/logo.png'
import AvatarImg from '../../assets/images/avatar.png'
import NotifIcon from '../../assets/images/icons/Notif.png'
import SearchForm from "../Search";
import { useState } from 'react';
const Header = () => {
    // const [showSubmenu, setShowSubmenu] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="bg-white shadow-md w-full">
            <div className="mx-auto container py-3 ">
                <div className="grid grid-cols-12 items-center items-center justify-between gap-2 ">

                    <div className="xl:col-span-3 md:col-span-4 col-span-8 flex items-center ">
                        <img src={LogoImg} alt="Logo" className="w-12 h-12" />
                        <div className="text-center md:text-right">
                            <div className="text-dark-blue text-lg font-bold">آبفای اســـتان اصفهـــان</div>
                            <div className="text-xs text-gray-500">سامانه مدیریت یکپارچه قبوض</div>
                        </div>
                    </div>

                    {/* Info Button */}
                    <div className="md:col-span-2 xl:col-span-1 hidden md:block bg-primary-blue py-2 text-white rounded-md text-center ">
                        <span className='px-1'> اطلاعات پایه </span>
                    </div>

                    {/* Navigation Menu - Always Below */}
                    <nav className={`md:col-span-6 xl:col-span-5 w-full transition-all duration-300 ${showMenu ? "block" : "hidden"} md:flex`}>
                        <ul className="flex flex-col md:flex-row justify-center md:justify-start space-y-3 md:space-y-0 md:space-x-reverse md:space-x-6">
                            <li className="hover:underline text-gray"><a href="#">قبوض</a></li>
                            <li className="hover:underline text-gray"><a href="#">قرائت</a></li>
                            <li className="hover:underline text-gray"><a href="#">درخواست ها</a></li>
                            <li className="hover:underline text-gray"><a href="#">وصول</a></li>
                            <li className="hover:underline text-gray"><a href="#">گزارش ها</a></li>
                            <li className="hover:underline text-gray"><a href="/management">مدیریت</a></li>
                        </ul>
                    </nav>
                    <div className="xl:col-span-2 md:col-span-6 col-span-5">
                        <SearchForm placeholder="شناسه قبض / ردیف" classes={"rounded-2xl"} />
                    </div>

                    {/* Notifications & Avatar */}
                    <div className="flex items-center md:col-span-1  xl:col-span-1 gap-4">
                        <img src={NotifIcon} alt="Notifications" className="w-15 h-15" />
                        <img src={AvatarImg} alt="Avatar" className="rounded-full w-13 h-13" />
                    </div>

                    {/* Mobile Menu Button */}
                    {/* <button
            className="block md:hidden text-2xl p-2"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FiMenu />
          </button> */}
                </div>


            </div>
        </header>
    );
};

export default Header;