import React from 'react';
import side1 from '../images/side-1.jpg';
import side2 from '../images/side-2.jpg';
import side3 from '../images/side-3.jpg';
import side4 from '../images/side-4.jpg';
import side5 from '../images/side-5.jpg';
import side7 from '../images/side-7.jpg';

export default function SideBar() {
    return (
        <div className='sticky top-10 h-100 bg-white grid justify-center items-center p-2 m-10 my-18 rounded-xl'>
            <img src={side1} alt="" className="w-12 h-12 sidebar__img"></img>
            <img src={side2} alt="" className="w-12 h-12 sidebar__img"></img>
            <img src={side3} alt="" className="w-12 h-12 sidebar__img"></img>
            <img src={side4} alt="" className="w-12 h-12 sidebar__img"></img>
            <img src={side5} alt="" className="w-12 h-12 sidebar__img"></img>
            <img src={side7} alt="" className="w-12 h-12 sidebar__img"></img>
        </div>
    )
}
