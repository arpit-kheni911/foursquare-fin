"use client"

import React, { useState } from "react";
import { MdVerified } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io"; // Import chevron icon
import FourSquare from "../../imgs/final-four-square-logo.svg";
import StatementIcon from '../../imgs/staement-icon.svg';
import PayrollIcon from '../../imgs/payroll-icon.svg';
import ContractIcon from '../../imgs/contract-sign.svg';
import BriefCaseIcon from '../../imgs/briefcase.svg'
import CareerLadder from '../../imgs/career-ladder.svg'
import Image from "next/image";
import Link from "next/link";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoanDropdownOpen, setIsLoanDropdownOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState(null); // Track which dropdown is open in mobile view

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleCompanyDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleLoanDropdown = () => {
        setIsLoanDropdownOpen(!isLoanDropdownOpen);
    };


    const toggleMobileDropdown = (dropdown) => {
        setMobileDropdown(mobileDropdown === dropdown ? null : dropdown);
    };

    return (
        <header className="bg-gray-50 shadow-md main-containerr">

            {/* Main Navigation */}
            <nav className="bg-[#fff]">
                <div className="max-w-screen-xl mx-auto flex border-b justify-between items-center p-4">
                    {/* Left Side: Logo and Navigation */}
                    <div className="flex items-center space-x-8">
                        {/* Logo */}
                        <div className="text-orange-700 font-bold text-xl flex items-center space-x-2">
                            <a href="/"><Image
                                src={FourSquare}
                                alt="Karmved Finance"
                                className="w-55"
                            /></a>
                        </div>
                        {/* Desktop Navigation */}
                        <div className="hidden xl:flex 2xl:flex lg:flex space-x-8">

                            {/* About Us */}
                            <span className="text-[#001F60] text-[18px] font-[400] uppercase cursor-pointer">
                                About Us
                            </span>

                            {/* Company Dropdown */}
                            {/* <div
                                className="relative"
                                onMouseEnter={toggleCompanyDropdown}
                                onMouseLeave={toggleCompanyDropdown}
                            >
                                <span className="flex items-center uppercase text-[#001F60] text-[18px] font-[400] cursor-pointer">
                                    About Us
                                </span>
                                {isDropdownOpen && (
                                    <div className="absolute left-0 bg-white text-[#001F60] text-[18px] font-[400] shadow-lg rounded-md w-40">
                                        <a href=""><span className="block text-[#000] px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                            Careers
                                        </span></a>
                                    </div>
                                )}
                            </div> */}
                            {/* Services Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={toggleLoanDropdown}
                                onMouseLeave={toggleLoanDropdown}
                            >
                                <span className="flex items-center uppercase text-[#001F60] text-[18px] font-[400] cursor-pointer">
                                    Services
                                    <IoIosArrowDown
                                        className={`ml-1 transition-transform ${isLoanDropdownOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </span>
                                {isLoanDropdownOpen && (
                                    <div className="absolute left-0 bg-white text-[#001F60] text-[18px] font-[400] shadow-2xl rounded-md w-[600px] p-[20px]">
                                        <div className="grid grid-cols-2 gap-[10px]">
                                            <div>
                                                <p className="text-[14px] font-[700] text-[#808080]">BUSINESS SOLUTION</p>
                                                <div class="flex items-start mb-[10px] mt-[15px]">
                                                    <div class="w-[35px] h-[35px] flex items-center justify-center flex-shrink-0">
                                                        <Image src={StatementIcon} alt="STatement ICon" class="w-full h-auto"></Image>
                                                    </div>
                                                    <div class="ml-4">
                                                        <h4 class="text-lg font-semibold leading-tight">Bookkeeping, Financial Statements & Forecasting</h4>
                                                        <p class="text-sm text-gray-600">
                                                            Streamlined financial management and forecasting.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="flex items-start mb-[10px]">
                                                    <div class="w-[35px] h-[35px] flex items-center justify-center flex-shrink-0">
                                                        <Image src={PayrollIcon} alt="Cash ICon" class="w-full h-auto"></Image>
                                                    </div>
                                                    <div class="ml-4">
                                                        <p className="text-[19px] font-[600] text-[#001F60]">Payroll Services</p>
                                                        <p className="text-[14px] font-[500] text-[#716789]">Accurate, timely payroll processing</p>
                                                    </div>
                                                </div>
                                                <div class="flex items-start mb-[10px]">
                                                    <div class="w-[35px] h-[35px] flex items-center justify-center flex-shrink-0">
                                                        <Image src={ContractIcon} alt="Contract Icon" class="w-full h-auto"></Image>
                                                    </div>
                                                    <div class="ml-4">
                                                        <p className="text-[19px] font-[600] text-[#001F60]">Personal & Corporate Tax Services</p>
                                                        <p className="text-[14px] font-[500] text-[#716789]">Tax solutions for individuals and businesses.</p>
                                                    </div>
                                                </div>
                                                <div class="flex items-start mb-[10px]">
                                                    <div class="w-[35px] h-[35px] flex items-center justify-center flex-shrink-0">
                                                        <Image src={BriefCaseIcon} alt="Brief Icon" class="w-full h-auto"></Image>
                                                    </div>
                                                    <div class="ml-4">
                                                        <p className="text-[19px] font-[600] text-[#001F60]">Business Incorporation</p>
                                                        <p className="text-[14px] font-[500] text-[#716789]">Easy business incorporation in Surrey services.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[14px] font-[700] text-[#808080]">IT CONSULTING</p>
                                                <div class="flex items-start mb-[10px] mt-[15px]">
                                                    <div class="w-[35px] h-[35px] flex items-center justify-center flex-shrink-0">
                                                        <Image src={CareerLadder} alt="Carrer Icon" class="w-full h-auto"></Image>
                                                    </div>
                                                    <div class="ml-4">
                                                        <div className="flex gap-[5px]">
                                                            {/* <Link href={'../career'}><p className="text-[19px] font-[600] text-[#001F60]">Career</p></Link> */}
                                                            <p className="text-[19px] font-[600] text-[#001F60]">Career</p>
                                                            <span className="text-[12px] font-[600] text-[#8A4200] px-[10px] py-[2px] rounded-[8px]  bg-[#FFD74B] border border-[#8A4200]">We’re Hiring!</span>
                                                        </div>
                                                        <p className="text-[14px] font-[500] text-[#716789]">Streamlined financial management and forecasting.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Blog */}
                            <span className="text-[#001F60] text-[18px] font-[400] uppercase cursor-pointer">
                                Blog
                            </span>

                            {/* Contact Us */}
                            <a href="/"><span className="text-[#001F60] text-[18px] font-[400] uppercase cursor-pointer">
                                Contact Us
                            </span></a>

                        </div>
                    </div>

                    {/* Right Side: Call to Action */}
                    <div className="hidden xl:flex 2xl:flex lg:flex items-center space-x-4">
                        <a href="tel:7798993442"><span className="text-[#001F60]  text-center font-medium cursor-pointer">
                            <span className="text-center">Call Us 24/7*</span><br />
                            (778) 899-3442
                        </span></a>
                        <a href="/"><button className="text-white px-4 py-2 bg-[#001F60] hover:bg-[#0037b3] cursor-pointer MainButton">
                            Write a email
                        </button></a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden xl:hidden 2xl:hidden ">
                        <button
                            onClick={toggleMenu}
                            className="text-[#000] focus:outline-none"
                        >
                            {isMenuOpen ? (<svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>) :
                                (<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path   
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>)
                            }


                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                        } overflow-hidden`}
                >
                    <div className="flex flex-col space-y-2 border-b">
                        <div className="mt-2 border-b px-[20px] py-[10px] space-y-1">
                            <span className="text-[#001F60] mt-2 py-[10px] gap-[10px] uppercase cursor-pointer">
                                About Us
                            </span>
                            {/* <span
                                className="text-[#001F60] cursor-pointer flex border-b px-[20px] py-[10px] gap-[10px] items-center"
                                onClick={() => toggleMobileDropdown("company")}
                            >
                                Company
                                <IoIosArrowDown
                                    className={`w-4 h-4 transition-transform ${mobileDropdown === "company" ? "rotate-180" : "rotate-0"
                                        }`}
                                />
                            </span>
                            {mobileDropdown === "company" && (
                                <div className="mt-2 border-b px-[30px] py-[5px] space-y-1">
                                    <a href="/"><span className="block text-[#001F60]  cursor-pointer">
                                        About Us
                                    </span></a>
                                    <Link href="../career"><span className="block text-[#001F60] mt-[10px] cursor-pointer">
                                        Careers
                                    </span></Link>
                                </div>
                            )} */}
                        </div>
                        <div>
                            <span
                                className="text-[#001F60] uppercase cursor-pointer flex border-b px-[20px] py-[10px] gap-[10px] items-center"
                                onClick={() => toggleMobileDropdown("service")}
                            >
                                Service
                                <IoIosArrowDown
                                    className={`w-4 h-4 transition-transform ${mobileDropdown === "service" ? "rotate-180" : "rotate-0"
                                        }`}
                                />
                            </span>
                            {mobileDropdown === "service" && (
                                <div className="ml-4 mt-2 space-y-1">
                                    <div className="grid grid-cols-1 gap-[10px]">
                                        <div>
                                            <p className="text-[14px] font-[700] text-[#808080]">BUSINESS SOLUTION</p>
                                            <div class="flex items-start mb-[10px] mt-[15px]">
                                                <div class="w-[35px] h-[35px] flex items-center justify-center flex-shrink-0">
                                                    <Image src={StatementIcon} alt="STatement ICon" class="w-full h-auto"></Image>
                                                </div>
                                                <div class="ml-4">
                                                    <h4 class="text-lg font-semibold leading-tight">Bookkeeping, Financial Statements & Forecasting</h4>
                                                    <p class="text-sm text-gray-600">
                                                        Streamlined financial management and forecasting.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="flex items-start mb-[10px]">
                                                <div class="w-[35px] h-[35px] flex items-center justify-center flex-shrink-0">
                                                    <Image src={PayrollIcon} alt="Cash ICon" class="w-full h-auto"></Image>
                                                </div>
                                                <div class="ml-4">
                                                    <p className="text-[19px] font-[600] text-[#001F60]">Payroll Services</p>
                                                    <p className="text-[14px] font-[500] text-[#716789]">Accurate, timely payroll processing</p>
                                                </div>
                                            </div>
                                            <div class="flex items-start mb-[10px]">
                                                <div class="w-[35px] h-[35px] flex items-center justify-center flex-shrink-0">
                                                    <Image src={ContractIcon} alt="Contract Icon" class="w-full h-auto"></Image>
                                                </div>
                                                <div class="ml-4">
                                                    <p className="text-[19px] font-[600] text-[#001F60]">Personal & Corporate Tax Services</p>
                                                    <p className="text-[14px] font-[500] text-[#716789]">Tax solutions for individuals and businesses.</p>
                                                </div>
                                            </div>
                                            <div class="flex items-start mb-[10px]">
                                                <div class="w-[35px] h-[35px] flex items-center justify-center flex-shrink-0">
                                                    <Image src={BriefCaseIcon} alt="Brief Icon" class="w-full h-auto"></Image>
                                                </div>
                                                <div class="ml-4">
                                                    <p className="text-[19px] font-[600] text-[#001F60]">Business Incorporation</p>
                                                    <p className="text-[14px] font-[500] text-[#716789]">Easy business incorporation in Surrey services.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-[14px] font-[700] text-[#808080]">IT CONSULTING</p>
                                            <div class="flex items-start mb-[10px] mt-[15px]">
                                                <div class="w-[35px] h-[35px] flex items-center justify-center flex-shrink-0">
                                                    <Image src={CareerLadder} alt="Carrer Icon" class="w-full h-auto"></Image>
                                                </div>
                                                <div class="ml-4">
                                                    <div className="flex gap-[5px]">
                                                        {/* <Link href={'../career'}><p className="text-[19px] font-[600] text-[#001F60]">Career</p></Link> */}
                                                        <p className="text-[19px] font-[600] text-[#001F60]">Career</p>
                                                        <span className="text-[12px] font-[600] text-[#8A4200] px-[10px] py-[2px] rounded-[8px]  bg-[#FFD74B] border border-[#8A4200]">We’re Hiring!</span>
                                                    </div>
                                                    <p className="text-[14px] font-[500] text-[#716789]">Streamlined financial management and forecasting.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <span className="text-[#001F60] border-b px-[20px] py-[10px] gap-[10px] uppercase cursor-pointer">
                            Blog
                        </span>
                        <span className="text-[#001F60] border-b px-[20px] py-[10px] gap-[10px] uppercase cursor-pointer">
                            Contact Us
                        </span>

                    </div>
                </div>
                <div className="flex justify-between items-center p-4 lg:hidden xl:hidden 2xl:hidden ">
                    <a href="tel:7788993442"><span className="text-[#001F60] cursor-pointer">
                        <span className="text-center">Call Us 24/7*</span><br />
                        (778) 899-3442
                    </span></a>
                    <a href="/"><button className="text-white px-4 py-2 bg-[#001F60] hover:bg-[#0037b3] cursor-pointer MainButton">
                        Write a email
                    </button></a>
                    
                </div>
            </nav>
        </header>
    );
}

export default Header;
