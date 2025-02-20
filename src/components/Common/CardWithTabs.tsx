import React, { useState, ReactNode, useRef, useEffect } from "react";
import bottomEl from '../../assets/images/bottomEl.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
// Define the types for the tab
interface Tab {
    label: string;
    icon?: ReactNode;
    content: ReactNode;
}

interface CardWithTabsProps {
    tabs?: Tab[]; // Array of tabs
    tabPosition?: "top"; // Tab alignment (now only supports "top")
    button?: ReactNode; // Optional button
    content?: ReactNode
    maxHeight?: string
    arrow?: boolean
}
const CardWithTabs: React.FC<CardWithTabsProps> = ({
    tabs,
    tabPosition = "top",
    button = null,
    content,
    maxHeight,
    arrow = true
}) => {
    const [activeTab, setActiveTab] = useState<number>(0); // Track the active tab
    const [tabContents, setTabContents] = useState<Array<any>>([])
    const [isCollapsed, setIsCollapsed] = useState(true);
    const contentRef = useRef<HTMLDivElement | null>(null);

    const toggleCollapse = () => {
        setIsCollapsed((prevState) => !prevState);
    };

    const getMaxHeight = () => {
        return isCollapsed ? (maxHeight ?? "170px") : `${contentRef.current?.scrollHeight}px`;
    };
    // useEffect(() => {
    //     // Load content only for the active tab
    //     const newTabContents = [...tabContents];
    //     newTabContents[activeTab] = tabs[activeTab]?.content;
    //     setTabContents(newTabContents);
    // }, [activeTab, content])

    return (
        <div className={`my-5 table-card ${tabs ? 'with-tabs' : ''}`}>
            {/* Header: Button on left, Tabs on right */}
            <div className="flex justify-between items-center">
                {/* Right-side Tabs */}
                <div className="flex space-x-1">
                    {tabs?.map((tab, index) => (
                        <button
                            key={index}
                            className={`flex ml-3 py-3 px-10 cursor-pointer ${activeTab === index
                                ? "bg-white rounded-tl-2xl rounded-tr-2xl"
                                : "bg-tab-disable  text-gray-700 rounded-tl-2xl rounded-tr-2xl"
                                }`}
                            onClick={() => setActiveTab(index)}
                        >
                            <span>{tab.icon}</span>
                            <span className="my-auto font-bold">{tab.label}</span>
                        </button>
                    ))}
                </div>
                <div className="">
                    {button && (
                        <div className="mr-4">
                            {button}
                        </div>
                    )}
                </div>
            </div>

            {/* Tab Content */}
            <div className="p-6 bg-white rounded-md content">
                <div
                    className="relative overflow-hidden transition-all duration-300"
                    ref={contentRef}
                    style={{
                        maxHeight: getMaxHeight(),
                    }}
                >
                    {tabs ? tabs[activeTab]?.content : content}
                </div>
                {arrow && (
                    <div className="relative">
                        <img src={bottomEl} alt="" className="absolute left-0 top-6" />
                        <div className="arrow-btn  cursor-pointer" onClick={toggleCollapse}>
                            <FontAwesomeIcon
                                icon={isCollapsed ? faAngleDoubleDown : faAngleDoubleUp}
                                className="absolute text-primary-blue left-20 top-10" />
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default CardWithTabs;