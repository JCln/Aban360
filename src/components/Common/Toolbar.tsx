import React from 'react';
import { icons } from '../../components/Icons/Icons';
import { path } from '../../config/path';
import { Link } from 'react-router-dom';

interface ToolbarProps {
    visibility?: boolean;
    iconColor?: string;
    hoverColor?: string;
  }
  

export const ToolbarColumn: React.FC<ToolbarProps> = ({ 
    visibility,
    iconColor = 'fill-gray-600',
    hoverColor = 'hover:fill-blue-500'
  }) => {
    const toolbarItems = [
        { icon: icons.filetoobar, path: path.kardex },
        { icon: icons.edittoolbar, path: path.bills },
        { icon: icons.downtoolbar, path: "" },
        { icon: icons.printtoolbar, path: "" },
        { icon: icons.commenttoolbar, path: path.archive },
        { icon: icons.billtoolbar, path: path.bills },
    ];

    return (
        <>
            {(visibility && visibility === true) && (
                <div className="fixed left-5 top-2/4  transform -translate-y-3/4 bg-white shadow-lg py-3 px-4 rounded">
                    <div className="flex flex-col w-[50px] gap-y-4 py-4">
                        {toolbarItems.map((item, index) => (
                            <Link to={item?.path}>
                                <div
                                    key={index}
                                    className="h-[40px] flex items-center justify-center cursor-pointer hover:bg-gray-100"

                                >
                                    <img
                                        src={item.icon}
                                        alt={item.path}
                                        className={`w-7 h-7 my-2 ${iconColor} ${hoverColor} transition-colors duration-200`}
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>)}
        </>
    );
};