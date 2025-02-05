import React from 'react';

export default function TheBreadCrumb() {
    const breadcrumb = 'اصفهان > منطقه نجف آباد > روستای علی آباد';
    return (
        <div className='w-full h-12 mb-2 px-4 bg-white rounded-md flex justify-start items-center'>
            {breadcrumb}
        </div>
    )
}
