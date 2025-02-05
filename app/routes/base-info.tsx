import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function BaseInfo() {
    return (
        <div className='m-8'>
            <Accordion multiple activeIndex={[0, 1]} expandIcon="pi pi-angle-double-down" collapseIcon="pi pi-angle-double-up">
                <AccordionTab header=" ">
                    <div className='flex'>
                        <div className='flex bg-clr-2 justify-space-between items-center h-10 rounded-xl'>
                            <div className='bg-clr-2'>شناسه قبض: </div>
                            <div className='color-gray-3 text-right font-bold'>1235434667</div>
                            <div className='bg-clr-2'>اشتراک:</div>
                            <div className='color-gray-3 text-right font-bold'>39283998</div>
                            <div className='bg-clr-2'>ردیف:</div>
                            <div className='color-gray-3 text-right font-bold'>881</div>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <div className='grid grid-cols-2 gap-2'>
                            <div className='bg-clr-0 rounded-2xl p-2 grid grid-cols-2'>
                                <div className=''>
                                    نام
                                </div>
                                <div className=''>
                                    تعداد خانوار
                                </div>
                            </div>
                            <div className='bg-clr-0 rounded-2xl p-2 grid grid-cols-2'>
                                <div className=''>
                                    1
                                </div>
                                <div className=''>
                                    1
                                </div>
                            </div>
                            <div className='bg-clr-0 rounded-2xl p-2 grid grid-cols-2'>
                                <div className=''>
                                    1
                                </div>
                                <div className=''>
                                    1
                                </div>
                            </div>
                            <div className='bg-clr-0 rounded-2xl p-2 grid grid-cols-2'>
                                <div className=''>
                                    1
                                </div>
                                <div className=''>
                                    1
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, ratione.
                    </div>
                </AccordionTab>
                <AccordionTab className='special'>
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionTab>
            </Accordion>
        </div >
    )
}
