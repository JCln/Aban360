import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useEffect, useState } from 'react'
import { DatailGridComponent } from '../Common/DataGridComponent';
import { faAngleDoubleDown, faAngleDoubleUp, faCheck, faEdit, faEye, faHome, faMoneyBill, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import ButtonComponent from '../Form/ButtonComponent';
import { GridColDef, GridEventListener } from '@mui/x-data-grid';
import CardWithTabs from '../Common/CardWithTabs';
import violationIcon from '../../assets/images/icons/ban-invoice.png'
import ArrowImg from '../../assets/images/arrow.png'
import { green } from '@mui/material/colors';
import bottomEl from '../../assets/images/bottomEl.png'
import { icons } from '../Icons/Icons';

interface ViolationProps {
    input: string
}
const Violation: FC<ViolationProps> = ({ input }) => {

    const [isExpanded, setIsExpanded] = useState(false); // State for toggling the description visibility

    const toggleCollapse = () => {
        setIsExpanded(prevState => !prevState);
        setHeight(prevHeight => (prevHeight === 85 ? 300 : 85));
    }
    const [rows, setRows] = useState([
        { id: 1, title: "عنوان: تخریب کنتور  ", data: "تاریخ نصب:۱۳۹۲/۰۷/۰۱", code: "کد: 25001", amount: "مبلغ جریمه: 5،000،000 تومان" }
    ])
    const [height, setHeight] = useState(300);

    const [isActive, setIsActive] = useState<boolean>(false);
    const arra = [
        { id: 1, label: "کشف شده", status: true },
        { id: 2, label: "رسیدگی شده", status: true },
        { id: 3, label: "تائید شده", status: true },
        { id: 4, label: "جریمه شده", status: true },
        { id: 5, label: "وصول شده", status: true },
    ]

    const tabs = [
        {
            label: "تخلفات",
            icon: <img src={violationIcon} />,
            content: (<>
                <div onClick={toggleCollapse} className="container cursor-pointer mx-auto p-4 violation overflow-hidde position-relative mb-3 " style={{ height: `${height}px` }}>
                    <div className="grid grid-cols-12 gap-4 mb-4">
                        <div className="col-span-2 p-4 flex">
                            <label>عنوان: </label>
                            <div className='text-red'>تخریب کنتور</div>
                        </div>
                        <div className="col-span-2 flex p-4">
                            <label>تاریخ نصب: </label>
                            <div> 1397/01/01</div>
                        </div>
                        <div className="col-span-1 flex p-4">
                            <label>کد: </label>
                            <div> ۱۲۱۳</div>
                        </div>
                        <div className="col-span-5 flex p-4">
                            <label>مبلغ جریمه: </label>
                            <div>5،000،000 تومان</div>
                        </div>
                        <div className="col-span-2 flex p-4 justify-start space-x-4">
                            <div className="flex justify-center items-center px-3">
                                <img src={icons?.eyeIcon} alt="" />
                            </div>
                            <div className="flex justify-center items-center px-4">
                                <img src={icons?.editIcon} alt="" />
                            </div>
                            <div className="flex justify-center items-center px-1">
                                <img src={icons?.trashIcon} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-4 mt-8">
                        <div className="flex col-span-9 items-center mx-auto">
                            <div className="flex items-center">
                                {arra && arra.map((item, index) => (
                                    <div className="items-start mb-4" key={index}> {/* Flex container for the row */}
                                        <div className={`flex items-center ${index < arra.length - 1 ? 'mx-1' : ''}`}>
                                            {/* FontAwesome Icon with Green Circle */}
                                            <div className={`icon ${index < arra.length - 1 ? 'bg-green-disable' : 'bg-green-icon last '} rounded-full`}>
                                                <FontAwesomeIcon icon={faCheck} color={'white'} />
                                            </div>
                                            {index < arra.length - 1 &&
                                                <img src={ArrowImg} alt="Arrow" className="mx-1" />
                                            }
                                        </div>
                                        <div>
                                            <span className={`block ${index < arra.length - 1 ? 'text-green-disable' : 'text-green'} mt-1`}>{item.label}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex col-span-3 mx-auto items-center bg-yellow p-1 rounded  button">
                            مشاهده قبض
                            <img src={icons?.billIcon} alt="" />
                        </div>
                    </div>

                    <div className="text-lg p-4 grid grid-cols-2 ">
                        <div className="flex col-span-9">
                            <p className='font-bold'>توضیحات</p>
                            <p className='text-gray'>
                                پس از بررسی گزارش تخلف نامبرده مامور در محل حضور پیدا کرده و با گزارش و ثبت تخلف نتیجه به عمل آمد که شکستگی عمدی می‌باشد.
                            </p>
                        </div>
                        <div className="flex col-span-3">
                            <div className="">
                                <div className="arrow-btn cursor-pointer">
                                    <FontAwesomeIcon
                                        icon={isExpanded ? faAngleDoubleDown : faAngleDoubleUp}
                                        className="absolute text-primary-blue left-20" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>),
        },
    ];
    useEffect(() => {
        // fetchSiphon({ input: input }).then(res => {
        //     setRows(res.data)
        // }).catch(error => {
        //     console.log(error)
        // })
    }, [input])
    return (
        <>
            <CardWithTabs maxHeight='300px' tabs={tabs} button={<ButtonComponent icon={faPlus} color={'primary-blue'} title="ثبت تخلف جدید" />} />
        </>
    )
}

export default Violation