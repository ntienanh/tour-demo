import { IconBrandFacebookFilled, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitterFilled, IconCheck, IconCircleArrowUpRightFilled, IconCircleCheck, IconLocationFilled, IconMailFilled, IconMap, IconMapPinExclamation, IconPhone, IconPhoneFilled } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {

    return (
        <footer className='bg-[#1D231F] fixed w-full bottom-0'>
            <div className='px-5 sm:px-[30px] md:px-[40px] lg:px-[80px] xl:px-[120px] pt-[180px]'>
                <div className='block sm:gap-x-4 sm:flex md:flex md:gap-x-10 lg:flex xl:flex text-white'>
                    <div className='py-10 sm:py-0 flex flex-1 gap-x-8 items-center justify-start border-b sm:border-none'>
                        <Image className='' alt='img' src={'https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/icon-headphone.png'} width={80} height={80} />
                        <p className=' text-white text-[18px] lg:text-[26px] xl:max-w-[302px]'>Need any support for tour & travel ?</p>
                        <IconCircleArrowUpRightFilled className='hidden md:block min-w-[50px] w-[70px] h-[70px] text-[#63AB45]' />
                    </div>

                    <div className='py-10 sm:py-0 flex flex-1 gap-x-8 items-center justify-start border-b sm:border-none'>
                        <Image alt='img' src={'https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/icon-travel.png'} width={80} height={80} />
                        <p className='text-white text-[18px] lg:text-[26px] xl:max-w-[302px]'>Need any support for tour & travel ?</p>
                        <IconCircleArrowUpRightFilled className='hidden md:block min-w-[50px] w-[70px] h-[70px] text-[#F7921E]' />
                    </div>
                </div>


                <div className='grid grid-cols-12 gap-12 md:gap-10 pb-[30px] pt-[80px]'>
                    <div className='flex flex-col gap-y-4 col-span-12 md:col-span-6 xl:col-span-3'>
                        <Image className='pb-4' alt='img' src={'https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/logo-white.png'} width={145} height={35} />
                        <p className='text-white line-clamp-3 max-w-[350px]'>To take traivial example which us ever undertakes labourious phycica exercise except obsome</p>

                        <div className='flex gap-x-4'>
                            <div className='transition-colors group rounded-full bg-[#262D28] hover:bg-slate-200 w-10 h-10 flex cursor-pointer justify-center items-center'>
                                <IconBrandTwitterFilled className='text-white group-hover:text-black w-5 h-5' />
                            </div>
                            <div className='transition-colors group rounded-full bg-[#262D28] hover:bg-slate-200 w-10 h-10 flex cursor-pointer justify-center items-center'>
                                <IconBrandFacebookFilled className='text-white group-hover:text-black w-5 h-5' />
                            </div>
                            <div className='transition-colors group rounded-full bg-[#262D28] hover:bg-slate-200 w-10 h-10  cursor-pointer flex justify-center items-center'>
                                <IconBrandInstagram className='text-white group-hover:text-black w-5 h-5' />
                            </div>
                            <div className='transition-colors group rounded-full bg-[#262D28] hover:bg-slate-200 w-10 h-10 cursor-pointer flex justify-center items-center'>
                                <IconBrandLinkedin className='text-white group-hover:text-black w-5 h-5' />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-2 col-span-12 md:col-span-6 xl:col-span-3 text-white'>
                        <div className='pb-4 text-[20px] font-bold'>Pages</div>
                        <div className='hover:text-[#63AB45] cursor-pointer transition-all'>About us</div>
                        <div className='hover:text-[#63AB45] cursor-pointer transition-all'>Community blog</div>
                        <div className='hover:text-[#63AB45] cursor-pointer transition-all'>Work with us</div>
                        <div className='hover:text-[#63AB45] cursor-pointer transition-all'>Privacy policy</div>
                        <div className='hover:text-[#63AB45] cursor-pointer transition-all'>Contact us</div>
                    </div>

                    <div className='flex flex-col gap-y-2 col-span-12 md:col-span-6 xl:col-span-3 text-white'>
                        <div className='pb-4 text-[20px] font-bold'>NewsLetter</div>
                        <div className='max-w-[350px]'>Subscribe our newsletter to get our latest update & news.</div>
                        <div>
                            <input type="text" name="" id="" />
                        </div>

                        <div className='flex gap-2'><IconCircleCheck /> I agree to all terms and policies</div>
                    </div>

                    <div className='flex flex-col gap-y-4 col-span-12 md:col-span-6 xl:col-span-3'>
                        <div className='pb-4 text-[20px] font-bold text-white'>Contact</div>

                        <div className='flex gap-x-4 items-center'>
                            <div className='rounded-full bg-[#262D28] w-10 h-10 flex justify-center items-center'>
                                <IconPhoneFilled className='text-[#63AB45] w-4 h-4' />
                            </div>

                            <div >
                                <div className='text-[#A7A7A7] text-sm'>Drop a Line</div>
                                <div className='text-white text-[15px]'>+00 (123) 456 889</div>
                            </div>
                        </div>

                        <div className='flex gap-x-4 items-center'>
                            <div className='rounded-full bg-[#262D28] w-10 h-10 flex justify-center items-center'>
                                <IconMailFilled className='text-[#63AB45] w-4 h-4' />
                            </div>

                            <div >
                                <div className='text-[#A7A7A7] text-sm'>Email Address</div>
                                <div className='text-white text-[15px]'>contact@example.com</div>
                            </div>
                        </div>

                        <div className='flex gap-x-4 items-center'>
                            <div className='rounded-full bg-[#262D28] w-10 h-10 flex justify-center items-center'>
                                <IconMapPinExclamation className='text-[#63AB45] w-4 h-4' />
                            </div>

                            <div >
                                <div className='text-[#A7A7A7] text-sm'>Visit office</div>
                                <div className='text-white text-[15px]'>583 Main Street, NY, USA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center bg-[#101311] px-4 py-2 text-white text-center'>© 2023 Copyrights by Gowilds. All Rights Reserved</div>
        </footer>
    )
}

export default Footer