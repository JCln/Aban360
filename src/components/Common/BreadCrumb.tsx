import React, { FC, useEffect, useState } from "react";
import { fetchLocation } from "../../api/summary";
import { Link, useNavigate } from 'react-router-dom'
import { icons } from "../../components/Icons/Icons";
interface Props {
    items: any
}
const Breadcrumb: FC<Props> = ({ items }: any) => {
    // console.log(items)
    const navigate = useNavigate();
    // useEffect(() => {
    //     fetchLocation({ input: "123456" }).then(res => {
    //         if (res && res.data) {
    //             setBreadcrumb(res.data)
    //         }
    //     }).catch(error => console.log(error))
    // }, [])
    return (
        <div className="breadcrumb bg-white rounded-lg mt-2 mb-4 grid grid-cols-12">
            <nav className="text-sm text-gray-600 p-3 col-span-11" aria-label="Breadcrumb">
                <ol className="flex space-x-2">
                    {(items && !Array.isArray(items)) ? Object.keys(items)?.map((item: any, index: any) => (
                        <li key={index} className="flex items-center">
                            {index !== 0 && <span className="mx-2"> » </span>}
                            {item?.href ? (
                                <Link
                                    to={item?.href} // React Router
                                    className="text-blue-500 hover:underline"
                                >
                                    {item?.[index]}
                                </Link>
                            ) : (
                                <span className="text-gray-500"> {items?.[item]}</span>
                            )}
                        </li>
                    )) : (items?.map((item: any, index: any) => (
                        <li key={index} className="flex items-center">
                            {index !== 0 && <span className="mx-2"> » </span>}
                            {item?.href ? (
                                <Link
                                    to={item?.href} // React Router
                                    className="text-blue-500 hover:underline"
                                >
                                    {item?.label}
                                </Link>
                            ) : (
                                <span className="text-gray-500"> {item?.label}</span>
                            )}
                        </li>
                    )))}
                </ol>

            </nav>
            <div className="col-span-1 text-left my-auto px-2">
                <button
                    onClick={() => navigate(-1)}
                    className="text-blue-500 hover:underline"
                >
                    <img src={icons.redo} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Breadcrumb;