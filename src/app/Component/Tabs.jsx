"use client";
import { useState } from 'react';
import WorldIcon from '../../imgs/world-icon.svg'
import Image from 'next/image';
import { FaAngleRight } from "react-icons/fa6";


const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className="w-[100%] mx-auto">
      {/* Tab Headers */}
      <div className="grid grid-cols-6 xs:grid-cols-2 sm:grid-cols-3 gap-[20px] mt-[20px]">
        <button
          onClick={() => setActiveTab('tab1')}
          className={`flex-1 py-2 text-center ${activeTab === 'tab1' ? 'bg-[#FFE031] text-[#140075] rounded-full font-bold text-[18px] xs:text-[14px] font-[700]' : 'bg-[#EBEBEB] rounded-full text-[#808080] text-[18px] xs:text-[14px] font-[700]'
            }`}
        >
          All Departments
        </button>
        <button
          onClick={() => setActiveTab('tab2')}
          className={`flex-1 py-2 text-center ${activeTab === 'tab2' ? 'bg-[#FFE031] text-[#140075] rounded-full font-bold text-[18px] xs:text-[14px] font-[700]' : 'bg-[#EBEBEB] rounded-full text-[#808080] text-[18px] xs:text-[14px] font-[700]'
            }`}
        >
          Marketing
        </button>
        <button
          onClick={() => setActiveTab('tab3')}
          className={`flex-1 py-2 text-center ${activeTab === 'tab3' ? 'bg-[#FFE031] text-[#140075] rounded-full font-bold text-[18px] xs:text-[14px] font-[700]' : 'bg-[#EBEBEB] rounded-full text-[#808080] text-[18px] xs:text-[14px] font-[700]'
            }`}
        >
          Engineering
        </button>
        <button
          onClick={() => setActiveTab('tab4')}
          className={`flex-1 py-2 text-center ${activeTab === 'tab4' ? 'bg-[#FFE031] text-[#140075] rounded-full font-bold text-[18px] xs:text-[14px] font-[700]' : 'bg-[#EBEBEB] rounded-full text-[#808080] text-[18px] xs:text-[14px] font-[700]'
            }`}
        >
          Sales
        </button>
        <button
          onClick={() => setActiveTab('tab5')}
          className={`flex-1 py-2 text-center ${activeTab === 'tab5' ? 'bg-[#FFE031] text-[#140075] rounded-full font-bold text-[18px] xs:text-[14px] font-[700]' : 'bg-[#EBEBEB] rounded-full text-[#808080] text-[18px] xs:text-[14px] font-[700]'
            }`}
        >
          Finance
        </button>
        <button
          onClick={() => setActiveTab('tab6')}
          className={`flex-1 py-2 text-center ${activeTab === 'tab6' ? 'bg-[#FFE031] text-[#140075] rounded-full font-bold text-[18px] xs:text-[14px] font-[700]' : 'bg-[#EBEBEB] rounded-full text-[#808080] text-[18px] xs:text-[14px] font-[700]'
            }`}
        >
          Customer Support
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {activeTab === 'tab1' &&
          <div>
            <div className='mt-[40px] w-[100%]'>
              <div className='flex gap-[10px] items-center'>
                <p className='text-[32px] font-[800] text-[#140075] leading-[32px] '>Marketing</p>
                <span className='p-[7px] text-[12px] rounded-full bg-[#EA3A3A] text-[#fff]'>4</span>
              </div>
              <div>
                <div>
                  <table className='w-[100%]  overflow-x-scroll mt-[30px]'>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Account Based Marketing Manager</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Remote (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
                      </td>
                      <td className='gap-[10px]'>
                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                          <FaAngleRight />
                        </p>
                      </td>
                    </tr>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Strategic Marketing Specialist</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Work from Home (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
                      </td>
                      <td className='gap-[10px]'>
                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                          <FaAngleRight />
                        </p>
                      </td>
                    </tr>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Client-Centric Marketing Director</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Virtual Position (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
                      </td>
                      <td className='gap-[10px]'>
                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                          <FaAngleRight />
                        </p>
                      </td>
                    </tr>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Targeted Marketing Executive</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Home-Based Role (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
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
            <div className='mt-[40px]'>
              <div className='flex gap-[10px] items-center'>
                <p className='text-[32px] font-[800] text-[#140075] leading-[32px] '>Customer Support</p>
                <span className='p-[7px] text-[12px] rounded-full bg-[#EA3A3A] text-[#fff]'>4</span>
              </div>
              <div>
                <div>
                  <table className='table-auto w-[100%] mt-[30px]'>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Technical Assistance Specialist</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Remote (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
                      </td>
                      <td className='gap-[10px]'>
                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                          <FaAngleRight />
                        </p>
                      </td>
                    </tr>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Client Relations Technician</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Work from Home (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
                      </td>
                      <td className='gap-[10px]'>
                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                          <FaAngleRight />
                        </p>
                      </td>
                    </tr>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>User Support Advisor</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Virtual Position (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
                      </td>
                      <td className='gap-[10px]'>
                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                          <FaAngleRight />
                        </p>
                      </td>
                    </tr>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Help Desk Coordinator</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Home-Based Role (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
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
        }
        {activeTab === 'tab2' &&
          <div>
            <div className='mt-[40px] w-[100%]'>
              <div className='flex gap-[10px] items-center'>
                <p className='text-[32px] font-[800] text-[#140075] leading-[32px] '>Marketing</p>
                <span className='p-[7px] text-[12px] rounded-full bg-[#EA3A3A] text-[#fff]'>4</span>
              </div>
              <div>
                <div>
                  <table className='w-[100%]  overflow-x-scroll mt-[30px]'>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Account Based Marketing Manager</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Remote (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
                      </td>
                      <td className='gap-[10px]'>
                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                          <FaAngleRight />
                        </p>
                      </td>
                    </tr>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Strategic Marketing Specialist</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Work from Home (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
                      </td>
                      <td className='gap-[10px]'>
                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                          <FaAngleRight />
                        </p>
                      </td>
                    </tr>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Client-Centric Marketing Director</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Virtual Position (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
                      </td>
                      <td className='gap-[10px]'>
                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                          <FaAngleRight />
                        </p>
                      </td>
                    </tr>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Targeted Marketing Executive</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Home-Based Role (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
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
        }
        {activeTab === 'tab3' &&
          <div>
            <div className='mt-[40px] w-[100%]'>
              <div className='flex gap-[10px] items-center'>
                <p className='text-[32px] font-[800] text-[#140075] leading-[32px] '>Engineering</p>
                <span className='p-[7px] text-[12px] rounded-full bg-[#EA3A3A] text-[#fff]'>4</span>
              </div>
              <div>
                <div>
                  <table className='w-[100%]  overflow-x-scroll mt-[30px]'>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Account Based Marketing Manager</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Remote (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
                      </td>
                      <td className='gap-[10px]'>
                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                          <FaAngleRight />
                        </p>
                      </td>
                    </tr>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Strategic Marketing Specialist</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Work from Home (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
                      </td>
                      <td className='gap-[10px]'>
                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                          <FaAngleRight />
                        </p>
                      </td>
                    </tr>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Client-Centric Marketing Director</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Virtual Position (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
                      </td>
                      <td className='gap-[10px]'>
                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                          <FaAngleRight />
                        </p>
                      </td>
                    </tr>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Targeted Marketing Executive</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Home-Based Role (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
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
        }
        {activeTab === 'tab4' &&
          <div>
            <div className='mt-[40px] w-[100%]'>
              <div className='flex gap-[10px] items-center'>
                <p className='text-[32px] font-[800] text-[#140075] leading-[32px] '>Sales</p>
                <span className='p-[7px] text-[12px] rounded-full bg-[#EA3A3A] text-[#fff]'>4</span>
              </div>
              <div>
                <div>
                  <table className='w-[100%]  overflow-x-scroll mt-[30px]'>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Account Based Marketing Manager</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Remote (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
                      </td>
                      <td className='gap-[10px]'>
                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                          <FaAngleRight />
                        </p>
                      </td>
                    </tr>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Strategic Marketing Specialist</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Work from Home (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
                      </td>
                      <td className='gap-[10px]'>
                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                          <FaAngleRight />
                        </p>
                      </td>
                    </tr>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Client-Centric Marketing Director</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Virtual Position (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
                      </td>
                      <td className='gap-[10px]'>
                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                          <FaAngleRight />
                        </p>
                      </td>
                    </tr>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Targeted Marketing Executive</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Home-Based Role (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
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
        }
        {activeTab === 'tab5' &&
          <div>
            <div className='mt-[40px] w-[100%]'>
              <div className='flex gap-[10px] items-center'>
                <p className='text-[32px] font-[800] text-[#140075] leading-[32px] '>Finance</p>
                <span className='p-[7px] text-[12px] rounded-full bg-[#EA3A3A] text-[#fff]'>4</span>
              </div>
              <div>
                <div>
                  <table className='w-[100%]  overflow-x-scroll mt-[30px]'>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Account Based Marketing Manager</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Remote (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
                      </td>
                      <td className='gap-[10px]'>
                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                          <FaAngleRight />
                        </p>
                      </td>
                    </tr>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Strategic Marketing Specialist</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Work from Home (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
                      </td>
                      <td className='gap-[10px]'>
                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                          <FaAngleRight />
                        </p>
                      </td>
                    </tr>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Client-Centric Marketing Director</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Virtual Position (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
                      </td>
                      <td className='gap-[10px]'>
                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                          <FaAngleRight />
                        </p>
                      </td>
                    </tr>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Targeted Marketing Executive</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Home-Based Role (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
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
        }
        {activeTab === 'tab6' &&
          <div>
            <div className='mt-[40px] w-[100%]'>
              <div className='flex gap-[10px] items-center'>
                <p className='text-[32px] font-[800] text-[#140075] leading-[32px] '>Customer Support</p>
                <span className='p-[7px] text-[12px] rounded-full bg-[#EA3A3A] text-[#fff]'>4</span>
              </div>
              <div>
                <div className='overflow-x-auto w-full mt-[30px]'>
                  <table className='w-full text-left mt-[30px]'>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Account Based Marketing Manager</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Remote (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
                      </td>
                      <td className='gap-[10px]'>
                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                          <FaAngleRight />
                        </p>
                      </td>
                    </tr>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Strategic Marketing Specialist</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Work from Home (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
                      </td>
                      <td className='gap-[10px]'>
                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                          <FaAngleRight />
                        </p>
                      </td>
                    </tr>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Client-Centric Marketing Director</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Virtual Position (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
                      </td>
                      <td className='gap-[10px]'>
                        <p className='text-[#2142E7] flex justify-end xs:justify-start items-center text-[18ox] font-[700]'>Apply Now
                          <FaAngleRight />
                        </p>
                      </td>
                    </tr>
                    <tr className='border-t border-b'>
                      <td className='underline underline-offset-[8px] decoration-[#414141] text-[#414141] py-[15px]'>Targeted Marketing Executive</td>
                      <td className='flex gap-[10px] py-[15px]'>
                        <Image src={WorldIcon} alt='World Icon' className='xs:hidden'></Image>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Home-Based Role (India)</p>
                      </td>
                      <td>
                        <p className='text-[#808080] text-[18ox] font-[700]'>Full-time</p>
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
        }
      </div>
    </div>
  );
};

export default Tabs;
