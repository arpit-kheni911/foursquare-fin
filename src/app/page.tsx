'use state';

import Image from "next/image";
import DiscoverImage from '../imgs/discover-more.svg'
import DollerIcon from '../imgs/final-doller.svg'
import UnlimitedIcon from '../imgs/final-unlimited.svg'
import HeathIcon from '../imgs/final-heath.svg'
import HybridIcon from '../imgs/final-hybrid.svg'
import HeartIcon from '../imgs/heart-icon.svg'
import EmployeeDocIcon from '../imgs/employee-doc.svg'
import StrongIcon from '../imgs/strong-icon.svg'
import FirstNunber from '../imgs/first-number.svg'
import SecondNumber from '../imgs/second-number.svg'
import ThirdNumber from '../imgs/third-number.svg'
import FourthNumber from '../imgs/fourth-number.svg'
import FifthNumber from '../imgs/fifth-number.svg'
import LocationIcon from '../imgs/maps-and-flags.svg'
import Tabs from './Component/Tabs'

export default function Home() {
  return (
    <div className="main-containerr">
      <div>
        <div>
          <div className="hero-section-main">
            <div className="hero-section-child">
              <div className="w-[60%] xs:w-[98%] sm:w-[98%] xs:px-[10px] sm:px-[10px] xs:py-[40px] sm:py-[40px] py-[110px] px-[50px]">
                <p className="text-[80px] xs:text-[40px] sm:text-[40px] xs:text-center sm:text-center xs:leading-[40px] font-[600] leading-[75px] text-[#fff]">Join our team and <span className="text-[#FFE031]">make a diffrence.</span></p>
                <p className="text-[16px] xs:text-center sm:text-center font-[700] leading-[21px] text-[#fff] mt-[20px]">At Four Square Corp, we believe in creating a workplace that feels like family. We’re more than just a company—we’re a community dedicated to growth, innovation, and making an impact.</p>
                <div className="flex xs:block sm:block gap-[10px] mt-[40px]">
                  <button className="text-[18px] xs:mx-auto xs:block sm:mx-auto sm:block font-[700] text-[#140075] px-[20px] py-[8px] bg-[#FFE031] text-[#000] rounded-full">View Jobs</button>
                  <button className="text-[18px] xs:mx-auto xs:block sm:mx-auto sm:block xs:mt-[10px] sm:mt-[10px] font-[700] text-[#C7BBFF] px-[20px] py-[8px] bg-[#3B2A8E] text-[#000] rounded-full">Join our Talent Community</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 w-[90%] xs:w-[98%] sm:w-[98%] mx-auto mt-[40px]">
                <div className="p-[20px]">
                  <p className="text-[64px] xs:text-[40px] xs:leading-[40px] leading-[64px] sm:text-[40px] sm:leading-[40px] font-[700] text-[#140075]">Discover your future with - <span className="text-[#2142E7]">Four Square.</span></p>
                </div>
                <div className="p-[20px]">
                  <Image src={DiscoverImage} alt="Four People Image"></Image>
                  <p className="text-[16px] font-[500] text-[#414141] mt-[20px]">Our team is proud to contribute to the communities we serve because we know that life is about balance. With opportunities to learn, collaborate with industry leaders, and work on transformative technologies, we make work meaningful—and enjoyable.</p>
                  <p className="text-[16px] font-[500] text-[#414141] mt-[10px]">From creatives to strategists, thinkers to doers, our team’s diversity fuels our success. At Four Square Corp, you’ll find a supportive and inclusive environment where you can thrive. And yes, we know how to have fun—whether it’s celebrating milestones, sipping coffee over conversations, or winding down with a friendly game or two.</p>
                  <p className="text-[16px] font-[500] text-[#414141] mt-[10px]">Ready to make your mark? Join Four Square Corp and grow with a team that’s as passionate about life as it is about work.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 w-[90%] xs:w-[98%] sm:w-[98%] mx-auto mt-[40px]">
                  <div className="p-[20px]">
                    <p className="text-[24px] font-[600] text-[#2142E7]">People first, always.</p>
                    <p className="text-[64px] xs:text-[40px] sm:text-[40px] font-[700] text-[#140075] leading-[64px]">Our benefits</p>
                  </div>
                  <div className="p-[20px]">
                    <div className="flex gap-[10px] gap-[14px] items-start">
                      <Image src={DollerIcon} alt="Doller Icon"></Image>
                      <p className="text-[700] text-[24px] xs:text-[18px] xs:leading-[20px] sm:text-[18px] sm:leading-[18px] text-[#414141] leading-[24px]">Competitive salary and meaningful equity</p>
                    </div>
                    <div className="flex gap-[10px] gap-[14px] items-start mt-[30px]">
                      <Image src={UnlimitedIcon} alt="Unlimited Icon"></Image>
                      <p className="text-[700] text-[24px] xs:text-[18px] xs:leading-[20px] sm:text-[18px] sm:leading-[18px] text-[#414141] leading-[24px]">Unlimited PTO and sick days</p>
                    </div>
                    <div className="flex gap-[10px] gap-[14px] items-start mt-[30px]">
                      <Image src={HeathIcon} alt="Health Icon"></Image>
                      <p className="text-[700] text-[24px] xs:text-[18px] xs:leading-[20px] sm:text-[18px] sm:leading-[18px] text-[#414141] leading-[24px]">Top tier Health, Dental and Vision insurance</p>
                    </div>
                    <div className="flex gap-[10px] gap-[14px] items-start mt-[30px]">
                      <Image src={HybridIcon} alt="Hybrid Icon"></Image>
                      <p className="text-[700] text-[24px] xs:text-[18px] xs:leading-[20px] sm:text-[18px] sm:leading-[18px] text-[#414141] leading-[24px]">Hybrid and meeting light culture</p>
                    </div>
                    <div className="flex gap-[10px] gap-[14px] items-start mt-[30px]">
                      <Image src={HeartIcon} alt="Heart Icon"></Image>
                      <p className="text-[700] text-[24px] xs:text-[18px] xs:leading-[20px] sm:text-[18px] sm:leading-[18px] text-[#414141] leading-[24px]">A team that values diversity and inclusion</p>
                    </div>
                    <div className="flex gap-[10px] gap-[14px] items-start mt-[30px]">
                      <Image src={EmployeeDocIcon} alt="Docs Icon"></Image>
                      <p className="text-[700] text-[24px] xs:text-[18px] xs:leading-[20px] sm:text-[18px] sm:leading-[18px] text-[#414141] leading-[24px]">Employee recognition for excellence, plus milestone rewards like the coveted PLATO jacket.</p>
                    </div>
                    <div className="flex gap-[10px] gap-[14px] items-start mt-[30px]">
                      <Image src={StrongIcon} alt="Strong Icon"></Image>
                      <p className="text-[700] text-[24px] xs:text-[18px] xs:leading-[20px] sm:text-[18px] sm:leading-[18px] text-[#414141] leading-[24px]">Strong commitment to community through fundraising and volunteer efforts.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#140075] py-[70px] ">
            <div className="w-[90%] xs:w-[98%] sm:w-[98%] md:w-[95%] mx-auto">
              <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1">
                <div>
                  <p className="text-[16px] font-[700] text-[#FFE031]">join us today!</p>
                  <p className="text-[64px] xs:text-[40px] xs:leading-[40px] sm:leading-[40px] sm:text-[40px] font-[800] text-[#fff] leading-[64px] mt-[18px]">Our interview process</p>
                </div>
                <div className="bg-[#402E95] p-[25px] xs:p-[10px] xs:mt-[20px] sm:p-[10px] xs:mt-[20px] sm:mt-[20px] rounded-[16px]">
                  <p className="text-[32px] xs:text-[25px] xs:leading-[25px] sm:text-[25px] sm:leading-[25px] font-[800] leading-[32px] text-[#fff]">Technical roles</p>
                  <p className="text-[16px] font-[600] text-[#fff] mt-[20px]">If you’re applying for an Engineering, Product, or Design role, here’s an overview of the journey ahead:</p>
                  <div >
                    <div className="flex xs:grid xs:grid-cols-3 sm:grid sm:grid-cols-4 gap-[20px] mt-[20px] ">
                      <div>
                        <Image src={FirstNunber} alt="First Number"></Image>
                        <p className="text-[14px] font-[600] text-[#fff] mt-[10px]">Recruiter Interview</p>
                      </div>
                      <div>
                        <Image src={SecondNumber} alt="Second Number"></Image>
                        <p className="text-[14px] font-[600] text-[#fff] mt-[10px]">Hiring Manager Interview</p>
                      </div>
                      <div>
                        <Image src={ThirdNumber} alt="Third Number"></Image>
                        <p className="text-[14px] font-[600] text-[#fff] mt-[10px]">Team Interviews (2-3)</p>
                      </div>
                      <div>
                        <Image src={FourthNumber} alt="Fourth Number" className="z-1"></Image>
                        <p className="text-[14px] font-[600] text-[#fff] mt-[10px]">Technical Working Session</p>
                      </div>
                      <div>
                        <Image src={FifthNumber} alt="Fifth Number" className="z-[10]"></Image>
                        <p className="text-[14px] font-[600] text-[#fff] mt-[10px]">Offer latter</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[90%] mx-auto xs:w-[98%] sm:w-[98%]">
              <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mt-[40px]">
                <div className="p-[20px]">
                  <p className="text-[16px] font-[700] text-[#2142E7]">Your next big career move could start here—join us today!</p>
                  <p className="text-[#140075] text-[64px] xs:text-[40px] xs:leading-[40px] sm:text-[40px] sm:leading-[40px] font-[800] leading-[64px] mt-[20px]">Current Opportunities</p>
                </div>
                <div className="p-[20px]">
                  <p className="text-[16px] font-[700] text-[#414141]">With delivery centers in eleven cities across India and a diverse clientele spanning the globe, we’re a global company committed to hiring and nurturing exceptional talent.</p>
                  <p className="text-[16px] font-[700] text-[#414141] mt-[15px]">Don’t see a perfect fit? No problem! We’d still love to hear from you. Send your resume and cover letter to <span className="text-[#2142E7]">recruitment@foursquarecorp.com</span>, and we’ll keep you in mind for future opportunities.</p>
                </div>
              </div>
              <div className="p-[20px]">
                <Tabs />
              </div>
            </div>
          </div>
          <div>
            <div className="w-[90%] mx-auto">
              <div className="contact-section-main rounded-[24px]">
                <div className="contact-section-child px-[60px] py-[60px] xs:px-[20px] rounded-[24px]">
                  <p className="text-[#FFE031] text-[16px] font-[700]">Accounting Firm serving across Canada</p>
                  <p className="text-[48px] xs:text-[40px] xs:leading-[40px] sm:text-[40px] sm:leading-[40px] font-[800] leading-[48px] text-[#fff] mt-[15px]">Contact Four Square Accounting</p>
                  <div className="flex gap-[15px] xs:block sm:block mt-[30px]">
                    <button className="text-[#140075] font-[700] text-[18px] bg-[#FFE031] rounded-full px-[20px] py-[8px]">Join Our Mailing List</button>
                    <button className="text-[#C7BBFF] font-[700] text-[18px] xs:mt-[10px] sm:mt-[10px] bg-[#3B2A8E] rounded-full px-[20px] py-[8px]">Contact Us</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
