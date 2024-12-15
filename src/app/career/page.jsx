import React from 'react'
import Image from "next/image";
import DollerIcon from '../../imgs/final-doller-icon.svg'
import CultureIcon from '../../imgs/culture-icon.svg'
import CommunityIcon from '../../imgs/community-icon.svg'
import WhatweofferImage from '../../imgs/what-we-ofeer-img.svg'
import AboutCompany from '../../imgs/about-us-carrer.svg'
import FirstNunber from '../../imgs/first-number.svg'
import SecondNumber from '../../imgs/second-number.svg'
import ThirdNumber from '../../imgs/third-number.svg'
import FourthNumber from '../../imgs/fourth-number.svg'
import FifthNumber from '../../imgs/fifth-number.svg'
import WorldIcon from '../../imgs/world-icon.svg'
import { FaAngleRight } from 'react-icons/fa';
import LocationIcon from '../../imgs/maps-and-flags.svg'
import Link from 'next/link';
import FaceBookicon from '../../imgs/facebook.svg'
import LinkedinIcon from '../../imgs/linkedin-icon.svg'
import InstagramIcon from '../../imgs/instagram.svg'

const Page = () => {
    return (
        <div className='main-containerr'>
            <div>
                <div>
                    <div className='main-carrer-section py-[120px] xs:py-[70px] sm:py-[70px] xs:px-[10px] sm:px-[20px] px-[40px]'>
                        <div className='w-[50%] xs:w-[98%] sm:w-[98%]'>
                            <p className='text-[40px] font-[400] text-[#001F60] uppercase'>Join our team and make a difference.</p>
                            <p className='text-[16px] font-[400] mt-[28px]'>At Four Square Corp, we believe in creating a workplace that feels like family. We’re more than just a company—we’re a community dedicated to growth, innovation, and making an impact.</p>
                            <button className='text-[18px] font-[400] uppercase text-[#fff] bg-[#001F60] px-[20px] mt-[28px] py-[11px] '>View Jobs</button>
                        </div>
                    </div>
                    <div className='relative bg-[#E8E8E8] w-[100%] h-[200px]'>
                        <div className=''>
                            <div className='bg-[#fff] shadow-lg py-[60px] px-[70px] xs:px-[20px] sm:px-[20px] xs:py-[20px] sm:py-[20px] contact-section-canada-2 absolute'>
                                <p className='text-[35px] xs:text-[25px] sm:text-[25px] font-[500] text-[#001F60] text-center uppercase'>Shape Your Career with Four Square</p>
                                <div className='w-[10%] xs:w-[10%] sm:w-[10%] h-[4px] rounded-[4px] bg-[#FBBC04] shape-carrer-main mt-[20px]'></div>
                                <div className='mt-[40px]'>
                                    <p className='text-[14px] font-[400] text-center'>Join a team where your talents shine, your ideas matter, and your growth is our priority.</p>
                                    <p className='text-[14px] font-[400] text-center mt-[10px]'>With opportunities to learn, collaborate, and innovate, we empower you to excel. Be part of a diverse, inclusive, and supportive environment where your impact shapes tomorrow.</p>
                                    <p className='text-[14px] font-[400] text-center mt-[10px]'>Explore careers with Four Square Corp today!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='what-we-offer-main'>
                        <div className='w-[90%] mx-auto gap-[20px] pt-[180px]  md:pt-[270px] pb-[20px] relative'>
                            <div>
                                <p className='text-[30px] font-[500] text-[#001F60] uppercase'>What We Offer</p>
                                <div className='w-[5%] xs:w-[10%] sm:w-[10%] h-[3px] mt-[10px] rounded-[4px] bg-[#FBBC04]'></div>
                            </div>
                            <div className='grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1'>
                                <div>
                                    <div className='grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-2 mt-[20px] gap-[20px]'>
                                        <div>
                                            <Image src={DollerIcon} alt='Doller Icon'></Image>
                                            <div>
                                                <p className='text-[24px] font-[600] mt-[16px]'>Benefits Package</p>
                                                <p className='text-[14px] font-[400] mt-[16px]'>We care about your health, happiness, and future. That’s why we provide a comprehensive benefits package designed to support you at every step. Enjoy health and dental coverage, fitness credits to keep you active, and RRSP matching to help secure your financial future.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <Image src={CultureIcon} alt='Heart Icon'></Image>
                                            <div>
                                                <p className='text-[24px] font-[600] mt-[16px]'>Culture</p>
                                                <p className='text-[14px] font-[400] mt-[16px]'>With ⅓ of your life spent at work, we believe it should be enjoyable too. From pancake breakfasts and spirited games of Chase the Ace to relaxing with lounge puzzles, there’s always something fun to look forward to.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-2 gap-[20px] mt-[20px]'>
                                        <div>
                                            <Image src={CommunityIcon} alt='Community Icon'></Image>
                                            <div>
                                                <p className='text-[24px] font-[600] mt-[16px]'>Community</p>
                                                <p className='text-[14px] font-[400] mt-[16px]'>Since day one, fostering a supportive community has been a cornerstone of our values. Across the country, our teams actively give back through fundraising initiatives and volunteer efforts, making a positive impact on the people and organizations around us.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.6598 6.99988H4.65852C3.86507 6.99988 3.10411 7.31499 2.54294 7.87592C1.98177 8.43685 1.66635 9.19768 1.66602 9.99113V28.0099C1.66668 28.8031 1.98225 29.5636 2.54338 30.1243C3.10451 30.6849 3.86529 30.9999 4.65852 30.9999H16.5698C17.363 30.9995 18.1236 30.6843 18.6845 30.1234C19.2454 29.5625 19.5607 28.8019 19.561 28.0086V26.7361" stroke="#001F60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M13.9997 25.2338L20.1997 2.06625M10.4909 24.2938L21.3397 27.2163C21.763 27.3302 22.2047 27.3595 22.6394 27.3025C23.0741 27.2455 23.4933 27.1034 23.873 26.8841C24.2527 26.6649 24.5854 26.373 24.8521 26.025C25.1187 25.677 25.3142 25.2799 25.4272 24.8563L29.8884 8.11625C30.1119 7.26377 29.9901 6.35752 29.5494 5.59432C29.1087 4.83112 28.3847 4.27259 27.5347 4.04L16.6859 1.11625C16.2626 1.00232 15.8209 0.973005 15.3862 1.02999C14.9515 1.08698 14.5323 1.22916 14.1526 1.44837C13.773 1.66759 13.4402 1.95954 13.1736 2.30751C12.9069 2.65549 12.7114 3.05265 12.5984 3.47625L8.13718 20.2163C7.91018 21.0689 8.03029 21.9767 8.47121 22.7409C8.91213 23.5052 9.63919 24.0635 10.4909 24.2938Z" stroke="#001F60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <div>
                                                <p className='text-[24px] font-[600] mt-[16px]'>Recognition</p>
                                                <p className='text-[14px] font-[400] mt-[16px]'>At Four Square Corp, we believe in recognizing and rewarding your efforts. Each year, our leadership team honors outstanding employees who go above and beyond. Plus, when you reach your 5-year milestone, you’ll be celebrated with a special token of appreciation—a coveted Four Square jacket!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Image src={WhatweofferImage} alt='Work On Office Image' className='ml-auto block xs:mt-[20px] sm:mx-auto sm:mt-[20px] md:hidden'></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 w-[90%] mb-[20px] mx-auto mt-[100px] xs:mt-[50px] sm:mt-[50px]'>
                                <div>
                                    <Image src={AboutCompany} alt='About Company Section' className='md:hidden'></Image>
                                </div>
                                <div>
                                    <p className='text-[35px] font-[500] text-[#001F60] uppercase'>About Four Square Business Solutions</p>
                                    <div className='w-[10%] xs:w-[10%] sm:w-[10%] h-[3px] mt-[5px] rounded-[4px] bg-[#FBBC04]'></div>
                                    <div>
                                        <div className='mt-[28px]'>
                                            <p className='text-[14px] font-[400]'>At Four Square Business Solutions, we specialize in IT consulting and recruitment services. While we don’t hire directly for our team, we excel in connecting organizations with top-tier IT talent. Think of us as your trusted partner in finding skilled professionals who align with your business goals.</p>
                                            <p className='text-[14px] font-[400] mt-[15px]'>By sharing insights into industry trends and best practices, we empower businesses to build strong, capable teams. Our mission is to bridge the gap between talent and opportunity, ensuring the right fit for every role. Whether you need strategic guidance or expert recruitment, Four Square Business Solutions is here to help your organization thrive.</p>
                                        </div>
                                        <button className='text-[18px] font-[400] text-[#fff] bg-[#001F60] px-[20px] mt-[28px] py-[11px] uppercase'>About Us</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#001F60] py-[70px] xs:px-[20px] sm:px-[20px]">
                        <div className="w-[90%] xs:w-[98%] sm:w-[98%] md:w-[95%] mx-auto">
                            <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1">
                                <div>
                                    <p className="text-[16px] font-[500] text-[#FBBC04] uppercase">join us today!</p>
                                    <p className="text-[35px] xs:text-[40px] xs:leading-[40px] sm:leading-[40px] sm:text-[40px] font-[500] text-[#fff] leading-[35px] uppercase mt-[18px]">Our interview process</p>
                                </div>
                                <div className="p-[25px] xs:p-[10px] xs:mt-[20px] sm:p-[10px] xs:mt-[20px] sm:mt-[20px] rounded-[16px]">
                                    <div className='w-[15%] xs:w-[10%] sm:w-[10%] h-[3px] mt-[5px] rounded-[4px] bg-[#FBBC04]'></div>
                                    <p className="text-[30px] xs:text-[25px] xs:leading-[25px] sm:text-[25px] sm:leading-[25px] font-[500] mt-[20px] leading-[32px] text-[#fff]">INTERVIEW PROCESS</p>
                                    <p className="text-[18px] font-[500] text-[#fff] mt-[20px]">If you’re applying for a role in Engineering, Product, or Design at Four Square Corp, here’s what you can expect:</p>
                                    <div className='relative'>
                                        <div className="grid grid-cols-5 xs:grid xs:grid-cols-3 sm:grid sm:grid-cols-4 gap-[20px] mt-[20px] ">
                                            <div className='z-[10]'>
                                                <Image src={FirstNunber} alt="First Number"></Image>
                                                <p className="text-[14px] font-[600] text-[#fff] mt-[10px]">Apply</p>
                                            </div>
                                            <div className='z-[10]'>
                                                <Image src={SecondNumber} alt="Second Number"></Image>
                                                <p className="text-[14px] font-[600] text-[#fff] mt-[10px]">Review Application</p>
                                            </div>
                                            <div className='z-[10]'>
                                                <Image src={ThirdNumber} alt="Third Number"></Image>
                                                <p className="text-[14px] font-[600] text-[#fff] mt-[10px]">Interview</p>
                                            </div>
                                            <div className='z-[10]'>
                                                <Image src={FourthNumber} alt="Fourth Number" className="z-1"></Image>
                                                <p className="text-[14px] font-[600] text-[#fff] mt-[10px]">Hiring Manager / Panel Interview</p>
                                            </div>
                                            <div className='z-[10]'>
                                                <Image src={FifthNumber} alt="Fifth Number" className="z-[10]"></Image>
                                                <p className="text-[14px] font-[600] text-[#fff] mt-[10px]">Offer</p>
                                            </div>
                                        </div>
                                        <div className='w-[85%] mx-auto xs:w-[80%] xs:hidden sm:w-[80%] h-[3px] mt-[5px] rounded-[4px] bg-[#FBBC04] absolute z-0 top-[5%]'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='job-oppurcunity-main relative'>
                        <div className='grid grid-cols-2 xs:grid-cols-1 xs:gap-[40px] sm:gap-[40px] sm:grid-cols-1 w-[90%] mx-auto py-[50px]'>
                            <div>
                                <p className='uppercase text-[30px] font-[500] text-[#001F60]'>Current Opportunities</p>
                                <p className='text-[14px] font-[400]'>Your next big career move could start here—join us today!</p>
                            </div>
                            <div>
                                <p className='text-[14px] font-[400]'>With delivery centers in eleven cities across India and a diverse clientele spanning the globe, we’re a global company committed to hiring and nurturing exceptional talent.</p>
                                <p className='text-[14px] font-[400] mt-[10px]'>Don’t see a perfect fit? No problem! We’d still love to hear from you. Send your resume and cover letter to recruitment@foursquarecorp.com, and we’ll keep you in mind for future opportunities</p>
                            </div>
                        </div>
                        <div>
                            <div className='pb-[150px] pt-[40px]'>
                                <div className=' w-[90%] mx-auto'>
                                    <div className='flex gap-[10px] items-center'>
                                        <button className='text-[18px] font-[500] uppercase text-[#fff] bg-[#001F60] px-[20px] mt-[28px] py-[11px] '>Job Opportunities</button>
                                    </div>
                                    <div>
                                        <div>
                                            <table className='w-[100%]  overflow-x-scroll mt-[30px]'>
                                                <tr className='border-t border-b border-t-[#D2D2D2] border-b-[#D2D2D2]'>
                                                    <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'><Link href={'../business-analyst'}>Business Analyst</Link></td>
                                                    <td className='flex gap-[10px] py-[15px] xs:py-[5px] sm:py-[5px]'>
                                                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                                                        <p className='text-[#808080] text-[18ox] font-[700]'>Remote (India)</p>
                                                    </td>

                                                    <td className='gap-[10px]'>
                                                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                                                            <FaAngleRight />
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr className='border-t border-b border-t-[#D2D2D2] border-b-[#D2D2D2]'>
                                                    <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Strategic Marketing Specialist</td>
                                                    <td className='flex gap-[10px] py-[15px] xs:py-[5px] sm:py-[5px]'>
                                                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                                                        <p className='text-[#808080] text-[18ox] font-[700]'>Work from Home (India)</p>
                                                    </td>

                                                    <td className='gap-[10px]'>
                                                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                                                            <FaAngleRight />
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr className='border-t border-b border-t-[#D2D2D2] border-b-[#D2D2D2]'>
                                                    <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Client-Centric Marketing Director</td>
                                                    <td className='flex gap-[10px] py-[15px] xs:py-[5px] sm:py-[5px]'>
                                                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                                                        <p className='text-[#808080] text-[18ox] font-[700]'>Virtual Position (India)</p>
                                                    </td>

                                                    <td className='gap-[10px]'>
                                                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                                                            <FaAngleRight />
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr className='border-t border-b border-t-[#D2D2D2] border-b-[#D2D2D2]'>
                                                    <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Targeted Marketing Executive</td>
                                                    <td className='flex gap-[10px] py-[15px] xs:py-[5px] sm:py-[5px]'>
                                                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                                                        <p className='text-[#808080] text-[18ox] font-[700]'>Home-Based Role (India)</p>
                                                    </td>

                                                    <td className='gap-[10px]'>
                                                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                                                            <FaAngleRight />
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr className='border-t border-b border-t-[#D2D2D2] border-b-[#D2D2D2]'>
                                                    <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Client Relations Technician</td>
                                                    <td className='flex gap-[10px] py-[15px] xs:py-[5px] sm:py-[5px]'>
                                                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                                                        <p className='text-[#808080] text-[18ox] font-[700]'>Remote (India)</p>
                                                    </td>

                                                    <td className='gap-[10px]'>
                                                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                                                            <FaAngleRight />
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr className='border-t border-b border-t-[#D2D2D2] border-b-[#D2D2D2]'>
                                                    <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>User Support Advisor</td>
                                                    <td className='flex gap-[10px] py-[15px] xs:py-[5px] sm:py-[5px]'>
                                                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                                                        <p className='text-[#808080] text-[18ox] font-[700]'>Work from Home (India)</p>
                                                    </td>

                                                    <td className='gap-[10px]'>
                                                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                                                            <FaAngleRight />
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr className='border-t border-b border-t-[#D2D2D2] border-b-[#D2D2D2]'>
                                                    <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Help Desk Coordinator</td>
                                                    <td className='flex gap-[10px] py-[15px] xs:py-[5px] sm:py-[5px]'>
                                                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                                                        <p className='text-[#808080] text-[18ox] font-[700]'>Virtual Position (India)</p>
                                                    </td>

                                                    <td className='gap-[10px]'>
                                                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                                                            <FaAngleRight />
                                                        </p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className='bg-[#fff] shadow-lg py-[60px] contact-section-canada absolute'>
                                <p className='uppercase text-[35px] xs:text-[25px] sm:text-[25px] font-[500] text-[#001F60] text-center'>Contact Four Square Business Solutions</p>
                                <p className='uppercase text-[26px] xs:text-[18px] sm:text-[18px] font-[400] text-center mt-[10px]'>Accounting Firm serving across Canada</p>
                                <div className='w-[10%] xs:w-[10%] sm:w-[10%] h-[4px] rounded-[4px] bg-[#FBBC04] shape-carrer-main mt-[20px]'></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='footer-contact-main'>
                            <div className='pt-[140px] pb-[30px] w-[90%] xs:w-[98%] sm:w-[98%] mx-auto'>
                                <p className='text-[16px] font-[600] text-center text-[#fff]'>Our Services include: <span className='text-[14px] font-[700] uppercase'>Bookkeeping, Financial Statements & Forecasting, Payroll Services, Personal & Corporate Tax Services, Business Incorporation Services, and more.</span></p>
                                <p className='text-[16px] font-[600] mt-[25px] text-center text-[#fff]'>Serving clients across <span className='text-[14px] font-[700] uppercase'>Surrey, Vancouver, Richmond, Abbotsford, Burnaby, Coquitlam, New Westminster, and the surrounding areas.</span></p>
                                <button className='text-[18px] font-[400] text-[#fff] px-[20px] py-[10px] border border-[#fff] mx-auto block mt-[50px]'>CONTACT US</button>
                            </div>
                        </div>
                        <div className='bg-[#242424] pt-[20px]'>
                            <div className='grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 w-[90%] mx-auto items-center'>
                                <div className='flex gap-[10px] items-center xs:justify-center sm:justify-center xs:py-[20px] sm:py-[20px]'>
                                    <Image src={LocationIcon} alt='Location Icon'></Image>
                                    <p className='text-[14px] text-[#fff] font-[500] '>8108 156A St, Surrey, BC V4N 0X6</p>
                                </div>
                                <div className='flex justify-between xs:flex-col-reverse sm:flex-col-reverse items-center'>
                                    <div>
                                        <button className='text-[18px] font-[400] text-[#fff] px-[20px] py-[10px] bg-[#001F60]'>JOIN OUR MALING LIST</button>
                                    </div>
                                    <div className='flex gap-[10px] items-center xs:py-[10px] sm:py-[10px]'>
                                        <Image src={FaceBookicon} alt='Facebook Icon'></Image>
                                        <Image src={LinkedinIcon} alt='Linkedin Icon'></Image>
                                        <Image src={InstagramIcon} alt='Instagram ICon'></Image>
                                    </div>
                                </div>
                            </div>
                            <hr className='mt-[20px]'/>
                            <div className='py-[20px] xs:px-[10px] sm:px-[10px]'>
                                <p className='text-[14px] font-[500] text-[#fff] text-center'>Copyright © 2024 - Four Square Accounting. Powered By Accelon IT Corp</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page