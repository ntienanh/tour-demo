import React from 'react'

const FeatureTours = () => {
    return (
        <div className='pt-[120px] pb-[90px]'>
            <div className='flex flex-col gap-y-4 justify-center items-center'>
                <button className='bg-[#ECF5E8] px-4 py-2 rounded-md text-[#63AB45] font-medium text-[15px]'>Featured tours</button>
                <h2 className='font-semibold text-[48px] max-w-[660px] text-center leading-[60px]'>Amazing tour places around the world</h2>

                <div className='grid grid-cols-12 w-full gap-4 px-[15px]'>
                    <div className='col-span-3 border border-solid border-red-200'>1</div>
                    <div className='col-span-3 border border-solid border-red-200'>2</div>
                    <div className='col-span-3 border border-solid border-red-200'>3</div>
                    <div className='col-span-3 border border-solid border-red-200'>4</div>
                </div>
            </div>
        </div>
    )
}

export default FeatureTours