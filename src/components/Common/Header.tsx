import LogoImg from '../../assets/images/logo.png'
import AvatarImg from '../../assets/images/avatar.png'
import NotifIcon from '../../assets/images/icons/Notif.png'
import SearchForm from "../Search";
import { useState, useEffect } from 'react';
import { favoritToolbar, myToolbar, signout } from '../../api/auth/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import { error } from 'console';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [userName, setUserName] = useState<string>('');
    // const [userId, setUserId] = useState<string>('');

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    const handleLogout = () => {
        let token = localStorage.getItem('authToken');
        signout({value: token}).then(res => {
            localStorage.removeItem('authToken')
            localStorage.removeItem('decodedToken')
            window.location.href = '/'
        }).catch(error => {
            console.log(error)
        })
    }
    // useEffect(() => {
    //     try {
    //         const decodedToken = localStorage.getItem('decodedToken');
    //         if (decodedToken) {
    //             const parsed = JSON.parse(decodedToken);
    //             const userId =
    //                 parsed?.sub ||
    //                 parsed?.['sub'] ||
    //                 parsed?.['nameid'] ||
    //                 parsed?.['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'] ||
    //                 parsed?.userId;
    //             const name =
    //                 parsed?.name ||
    //                 parsed?.['name'] ||
    //                 parsed?.['unique_name'] ||
    //                 parsed?.['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'] ||
    //                 parsed?.username;
    //             if (userId) {
    //                 console.log(userId)
    //                 // favoritToolbar(userId).then(res => {
    //                 myToolbar().then(res => {
    //                     console.log(res)
    //                 }).catch(error => {
    //                     console.log(error)
    //                 })  
    //             }
    //             setUserName(name || '');
    //         }
    //     } catch (error) {
    //         console.error('Error parsing decoded token:', error);
    //     }
    // }, []);

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

                    {/* Navigation Menu - Always Below */}
                    <Navbar />
                    <div className="xl:col-span-3 md:col-span-6 col-span-5">
                        <SearchForm placeholder="شناسه قبض / ردیف" classes={"rounded-2xl"} />
                    </div>

                    {/* Notifications & Avatar */}
                    <div className="flex items-center md:col-span-1 xl:col-span-1 gap-4 relative">
                        <img src={NotifIcon} alt="Notifications" className="w-15 h-15" />
                        <img src={AvatarImg} alt="Avatar" className="rounded-full w-11 h-11 cursor-pointer"
                            onClick={toggleDropdown}
                        />
                        {showDropdown && (
                            <div className="absolute top-12 -left-14 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                                <button
                                    className="w-full text-right px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={handleLogout}
                                >
                                    خروج
                                </button>
                            </div>
                        )}
                        {/* <span className="text-sm">{userName}</span> */}
                    </div>
                    {/* Mobile Menu Button */}
                    {/* <button
                        className="block md:hidden text-2xl p-2"
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        <FontAwesomeIcon icon={faHamburger} />
                    </button> */}
                </div>


            </div>
        </header>
    );
};

export default Header;