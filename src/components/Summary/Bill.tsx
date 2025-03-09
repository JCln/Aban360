import { useEffect } from "react"
import LogoImg from '../../assets/images/logo.png'
import HalfPieChart from '../Charts/HalfPieChart';
import BarChart from "../../components/Charts/BarChart";
import { icons } from "../../components/Icons/Icons";


const Bill = () => {

    useEffect(() => {

    }, [])
    return (
        <div className="p-1 border rounded">
            {/* <div className="flex border p-4 gap-1 my-2"> */}
            <div className="grid grid-cols-12 mx-0 px-0 gap-1 p-4">
                <div className="col-span-1">
                    <div className="flex flex-col flex-wrap items-start">
                        <img src={LogoImg} alt="Logo" className="mb-2" width={"60px"} />
                        <div className="transform rotate-90 whitespace-reverse -right-6  relative top-10 h-10">
                            شماره اقتصادی
                        </div>
                    </div>
                </div>
                <div className="col-span-5">
                    <div className="grid grid-cols-2">

                        <div className="flex-2 p-2">
                            <p className="text-sm text-blue text-center">وزارت نیرو - شرکت آب و فاضلاب استان اصفهان</p>
                            <p className="text-red text-sm text-center"> خدمات غیر حضوری با تلفن ۱۵۲۲</p>
                            <div className="text-center text-sm text-center"> تلفن حوادث: ۱۲۲</div>
                            <div className="border-1 border-dark mt-2 rounded-xl">
                                <div className="flex-col gap-2">
                                    <div className="flex-1 p-1">شهر : </div>
                                    <div className="flex-1  p-1">مشترک گرامی :  </div>
                                    <div className="flex-1 p-1">آدرس : </div>
                                    <div className="flex-1 p-1">کدپستی : </div>
                                </div>
                            </div>
                            <div className="border-1 border-dark mt-2 rounded-xl">
                                <div className="flex-col gap-2">
                                    <div className="flex-1 p-1">کاربری : </div>
                                    <div className="flex-1  p-1">نوع واگذاری  :  </div>

                                </div>
                            </div>
                            <div className="border-1 border-dark mt-2 rounded-xl">
                                <div className="flex gap-2">
                                    <div className="w-1/3 bg-blue-300 p-1 my-auto">تعداد واحد</div>
                                    <div className="w-2/3 flex flex-col">
                                        <div className="border-r-1 p-1 border-dark">مسکونی:</div>
                                        <div className="border-r-1 p-1 border-dark">غیر مسکونی: </div>
                                        <div className="border-r-1 p-1 border-dark">خالی از سکنه: </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-1 border-dark mt-2 rounded-xl">
                                <div className="flex-col gap-2">
                                    <div className="flex-1 p-1"> کد تعرفه: </div>
                                    <div className="flex-1  p-2"> قطر کنتور :  </div>
                                    <div className="flex-1 p-1">وضعیت کنتور : </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 p-2">
                            <div className="border-1 border-dark mt-2 rounded-xl">
                                <div className="flex-col gap-2">
                                    <div className="flex-1 p-1"> شماره ردیف: </div>
                                    <div className="flex-1  p-1">  شماره اشتراک:  </div>
                                    <div className="flex-1 p-1">شماره برگه : </div>
                                </div>
                            </div>
                            <div className="border-1 border-dark mt-2 rounded-xl">
                                <div className="flex gap-2">
                                    <div className="w-1/3 p-3 my-auto">تاریخ قرائت </div>
                                    <div className="w-2/3 flex flex-col">
                                        <div className="border-r-1 p-2 border-dark">پیشین:</div>
                                        <div className="border-r-1 p-2 border-dark">کنونی : </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-1 border-dark mt-2 rounded-xl">
                                <div className="flex gap-2">
                                    <div className="w-1/3 p-1 my-auto p-3 mb-5">تعداد روز:  </div>

                                </div>
                            </div>
                            <div className="border-1 border-dark mt-2 rounded-xl">
                                <div className="flex gap-2">
                                    <div className="w-1/3 py-3 px-2 my-auto">شماره کنتور  </div>
                                    <div className="w-2/3 flex flex-col">
                                        <div className="border-r-1 p-2 border-dark">پیشین:</div>
                                        <div className="border-r-1 p-2 border-dark">کنونی : </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-1 border-dark mt-2 rounded-xl">
                                <div className="flex-col gap-2">
                                    <div className="flex-1 p-2">  مصرف به متر مکعب: </div>
                                    <div className="flex-1  p-1">  مصرف به لیتر :  </div>
                                    <div className="flex-1 p-2">متوسط مصرف ماهانه  : </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full text-center font-bold border-1 border-dark mt-2 rounded-xl p-5">
                        مبلغ به حروف :
                    </div>
                    <div className="w-full text-center border-1 border-dark mt-2 rounded-xl bg-green-100 p-5">
                        توضیحات   :
                    </div>
                </div>
                <div className=" col-span-6">
                    <div className="grid grid-cols-2">
                        <div className="flex-1 p-2">
                            <div className="border-1 border-dark mt-2 rounded-xl">
                                <div className="w-3/3  p-1 my-auto border-b-1 border-dark text-center">شرح اقلام و مبالغ به ریال  </div>
                                <div className="flex-col gap-2 mt-2">
                                    <div className="flex-1 p-1">  آب‌بها: </div>
                                    <div className="flex-1  p-1"> کارمزد دفع فاضلاب  :  </div>
                                    <div className="flex-1 p-1">  مالیات و عوارض: </div>
                                    <div className="flex-1 p-1">  تکالیف قانونی : </div>
                                </div>
                            </div>
                            <div className="border-1 border-dark mt-2 rounded-xl">
                                <div className="flex-col gap-2 mt-2">
                                    <div className="flex-1 p-1">جمع  : </div>
                                    <div className="flex-1  p-1">   تخفیف   :  </div>
                                    <div className="flex-1 p-1">  بدهکار یا بستانکار : </div>
                                </div>
                            </div>
                            <div className="border-1 border-dark mt-2 rounded-xl bg-red-light">
                                <div className="flex-col gap-2 mt-2">
                                    <div className="flex-1  p-1">  قابل پرداخت    :  </div>
                                    <div className="flex-1 p-1"> مهلت پرداخت : </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex-1 p-2">
                            <div className="border-1 border-dark mt-2 rounded-xl bg-red-200">
                                <div className="w-3/3  p-1 my-auto text-center">متوسط مصرف ماهیانه شما:   </div>
                                <div className="flex-col gap-2 mt-2 ">
                                    <HalfPieChart />
                                </div>
                            </div>
                            <div className="border-1 border-dark mt-2 rounded-xl">
                                <div className="w-3/3  p-1 my-auto text-center">نمودار مصرف شما در چند دوره اخیر   :   </div>
                                <div className="flex-col gap-2 mt-2">
                                    <BarChart />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full text-center font-bold border-1 border-dark mt-1  bg-green-100 rounded-xl p-1">
                        <div className="flex-1 p-1">   شناسه قبض  :  </div>
                        <div className="flex-1 p-1"> شناسه پرداخت    : </div>
                    </div>
                    <div className="mx-auto text-center">
                        <img src={icons?.barcode} alt="" className="mx-auto text-center" />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Bill