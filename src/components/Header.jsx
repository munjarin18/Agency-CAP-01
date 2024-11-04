import React from "react";
import Container from "../Container";
import Flex from "./Flex";
import { MdCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import USA from "../assets/USA.png"

const Header = () => {
  return (
    <header className="py-3 bg-[#3661FC]  ">
      <Container>
        <div className="flex ">
          <div className="w-3/5">
            <div className="flex justify-between items-center">
              <h3 className="font-sans font-medium text-[14px] text-[#fff]">
                Welcome to Ortencey Digital Market Agency
              </h3>
              <div className="flex items-center space-x-3 relative before:absolute before:contents-[''] before:top-[10px] before:left-[-30px] before:w-[25px] before:h-[2px] before:bg-[#708FFF] before:rotate-90 ">
                <MdCall className="font-sans font-normal text-[20px] text-[#ff8a4f]" />

                <h3 className="font-sans font-medium text-[14px] text-[#fff]">
                  +88 ( 5548 ) 6548
                </h3>
              </div>

              <div className="flex items-center space-x-3 relative before:absolute before:contents-[''] before:top-[10px] before:left-[-30px] before:w-[25px] before:h-[2px] before:bg-[#708FFF] before:rotate-90 ">
                <IoMdMail className="font-sans font-normal text-[20px] text-[#ff8a4f]" />

                <h3 className="font-sans font-medium text-[14px] text-[#fff]">
                  infoyour@gmail.com
                </h3>
              </div>
            </div>
          </div>

          <div className="w-2/5">
            <div className="flex justify-end text-end ">
              <div className="w-[10%] items-center ">
                <img src={USA} alt="" />
              </div>
                <ul className="flex gap-x-6 text-center items-center">
                  <li>
                  <select name='' id='' className='outline-none bg-[#3661FC] font-sans font-medium text-[#fff] text-[14px]'>
                <option >English</option>
                <option>English</option>
                </select>
                  </li>
                </ul>
            
             
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
