import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function BaseInfo() {
    return (
        <div className=''>
            <Accordion multiple activeIndex={[0, 1]} expandIcon="pi pi-angle-double-down" collapseIcon="pi pi-angle-double-up">
                <AccordionTab header=" ">
                    <div className='flex gap-2'>
                        <div className='flex-1 grid gap-4'>
                            <div className='base-info-item'>
                                <div className='table bg-clr-gray-0 w-full h-10 p-2 rounded-xl'>
                                    <tr>
                                        <td className='text-xl'>شناسه قبض: </td>
                                        <td className='text-right text-lg'>1235434667</td>
                                        <td className='text-xl'>اشتراک:</td>
                                        <td className='text-right text-lg'>39283998</td>
                                        <td className='text-xl'>ردیف:</td>
                                        <td className='text-right text-lg'>881</td>
                                    </tr>
                                </div>
                            </div>
                            <div className='base-info-item'>
                                <div className='table w-full p-2'>
                                    <tr>
                                        <td className='clr-gray-1 text-xl'>نام:</td>
                                        <td className='text-right text-lg'>حمید روضاتی و شرکا</td>
                                        <td className='clr-gray-1 text-xl'>تعداد خانوار:</td>
                                        <td className='text-right text-lg'>5</td>
                                    </tr>
                                    <tr>
                                        <td className='clr-gray-1 text-xl'>آدرس:</td>
                                        <td className='text-right text-lg'>خیابان علی آباد, نبش کوچه 12, آرایشگاه روضاتی</td>
                                    </tr>
                                </div>
                            </div>
                            <div className='base-info-item'>
                                <div className="flex gap-2 m-2">
                                    <div className="bg-clr-1 h-10 p-1 flex items-center justify-center w-auto clr-gray-5 rounded-xl">دارای بار آلایندگی</div>
                                    <div className="bg-clr-1 h-10 p-1 flex items-center justify-center w-auto clr-gray-5 rounded-xl">گیاه اکالیپتوس</div>
                                    <div className="bg-clr-1 h-10 p-1 flex items-center justify-center w-auto clr-gray-5 rounded-xl">سگ نگهبان</div>
                                </div>
                            </div>
                            <div className='base-info-item'>
                                <div className='table bg-clr-gray-0 w-full h-10 p-2 rounded-xl'>
                                    <tr>
                                        <td className='text-xl'>کاربری :</td>
                                        <td className='text-lg'>تجاری مسکونی _ آرایشگاه _ 12 صندلی</td>
                                        <td className='text-xl'>ظرفیت قراردادی :</td>
                                        <td className='text-lg'>12</td>
                                    </tr>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1 grid gap-2 items-start'>
                            <div className='base-info-item'>
                                <div className='table bg-clr-gray-0 w-full h-10 p-2 rounded-xl'>
                                    <tr>
                                        <td className='text-xl'>آخرین بدهی: </td>
                                        <td className='text-right text-lg'>1235434667</td>
                                        <td className='text-xl'>طبقه مصرف:</td>
                                        <td className='text-right text-lg'>39283998</td>
                                    </tr>
                                    <tr>
                                        <td className='text-xl'>وضعیت انشعاب:</td>
                                        <td className='text-right text-lg'>متصل</td>
                                        <td className='text-xl'>وضعیت کنتور:</td>
                                        <td className='text-right text-lg'>سالم</td>
                                    </tr>
                                </div>
                            </div>
                            <div className='base-info-item'>
                                <div className='table bg-clr-gray-0 w-full h-10 p-2 rounded-xl'>
                                    <tr>
                                        <td className='text-xl'>تعداد واحد مسکونی آب:</td>
                                        <td className='text-xl'>2</td>
                                        <td className='text-xl'>تعداد واحد تجاری آب:</td>
                                        <td className='text-xl'>2</td>
                                    </tr>
                                    <tr>
                                        <td className='text-lg'>تعداد واحد مسکونی فاضلاب</td>
                                        <td className='text-lg'>2</td>
                                        <td className='text-lg'>تعداد واحد تجاری فاضلاب</td>
                                        <td className='text-lg'>2</td>
                                    </tr>
                                    <tr>
                                        <td className='text-xl'>تعداد واحد سایر فاضلاب:</td>
                                        <td className='text-xl'>2</td>
                                        <td className='text-lg'>تعداد واحد خالی از سکنه:</td>
                                        <td className='text-lg'>3</td>
                                    </tr>
                                    <tr>
                                        <td className='text-lg'>تعداد واحد سایر آب:</td>
                                        <td className='text-lg'>...</td>
                                    </tr>
                                </div>
                            </div>
                        </div>
                    </div>
                </AccordionTab>
                <AccordionTab className='special'>
                    <div className='flex gap-2 w-full'>
                        <div className='base-info-item'>
                            <div className='table bg-clr-gray-0 w-full h-10 p-2 rounded-xl'>
                                <tr>
                                    <td className='text-xl'>تاریخ درخواست انشعاب آب: </td>
                                    <td className='text-right text-lg'>1235434667</td>
                                    <td className='text-xl'>تاریخ درخواست انشعاب فاضلاب::</td>
                                    <td className='text-right text-lg'>39283998</td>
                                    <td className='text-xl'>تاریخ ثبت::</td>
                                    <td className='text-right text-lg'>881</td>
                                </tr>
                                <tr>
                                    <td className='text-xl'>تاریخ نصب انشعاب آب: </td>
                                    <td className='text-xl'>: </td>
                                    <td className='text-xl'>تاریخ نصب انشعاب فاضلاب: </td>
                                    <td className='text-xl'>: </td>
                                </tr>
                            </div>
                        </div>
                    </div>
                </AccordionTab>
            </Accordion>
        </div >
    )
}
