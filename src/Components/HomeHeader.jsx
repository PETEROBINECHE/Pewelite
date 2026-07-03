import React, {useRef, useState } from 'react'
import { LuSearch } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { NavLink, useNavigate } from 'react-router-dom';

function HomeHeader() {
    const [showDropdown, setShowDropdown] =useState(false);
  const [activeSection, setActiveSection] =useState();

  const handleMouseEnter = () => {
    clearTimeout(hideTimer.current);
    setShowDropdown(true);
  };

  const hideTimer = useRef(null);

  const handleMouseLeave = () => {
    hideTimer.current = setTimeout(() => setShowDropdown(false), 150);
  };

  const navigate = useNavigate()
  return (
    <>
      <header className='w-full h-22 bg-[#252839] flex px-10  justify-between items-center fixed z-999 '>
        <div className='w-80 h-18  gap-4 flex  p-2  py-2'>
            <div className='w-15 h-22'>
                <img src="https://res.cloudinary.com/dl20vocbb/image/upload/v1771933050/4331348c-fc5d-40e1-b35c-cb1bd6d87b9c_uzaqti.jpg" 
                alt="logo image" 
                />
            </div>
            <div className='w-55  h-15 flex items-center'>
                <span className='text-3xl text-[#F2B632]'> PawElite Care</span>
            </div>
        </div>
        <div className='w-110 h-10  flex  items-center gap-4 justify-end p-2'>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'text-[#ffffff]' : "text-[#F2B632] hover:text-xl hover:cursor-pointer"}>Home</NavLink>
            <div className='relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <span className='hover:text-xl hover:cursor-pointer text-[#F2B632]'>Our Services</span>
                {showDropdown && (
             <div className='w-min h-60 bg-red-50 p-2 mt-40 flex gap-1.5 absolute -right-10 bottom-0 -top-25 z-50 border-none'>
            <div className='w-30 bg-[#F5F5F5]'>
                <p className='hover:text-2x1 text-[#707072] cursor-pointer hover:underline hover:text-[#111111] hover:font-bold'
                onClick={()=> setActiveSection("Services")} 
                style={{
                fontWeight: activeSection === "Services" ? "bold" : "normal",
                textDecoration: activeSection === "Services" ? "underline" : "none",
                color: activeSection === "Services" ? "#111111" : "none"
                }}
                onDoubleClick={()=> navigate("/ourservice")}
                >Our Services:</p>
                <p className='hover:text-2x1 text-[#707072] cursor-pointer hover:underline hover:text-[#111111] hover:font-bold'
                onClick={()=> setActiveSection("Product")}
                style={{
                    fontWeight: activeSection === "Product" ? "bold" : "normal",
                    textDecoration: activeSection === "Product" ? "underline" : "none",
                    color: activeSection === "Product" ? "#11111" : "none"
                }}
                onDoubleClick={()=> navigate("/product")}
                >Product:</p>
            </div>
            

            {activeSection === "Services" && (
                <div className='w-93 text-[#222222] flex flex-col flex-wrap gap-4 p-1 '>
                   <span className='cursor-pointer hover:underline hover:text-[#252839] hover:text-sm'>Pet Adoption</span>
                   <span className='cursor-pointer hover:underline hover:text-[#252839] hover:text-sm'>Pet Grooming</span>
                   <span className='cursor-pointer hover:underline hover:text-[#252839] hover:text-sm'>Boarding & kennel</span>
                   <span className='cursor-pointer hover:underline hover:text-[#252839] hover:text-sm'>Surgical Services</span>
                   <span className='cursor-pointer hover:underline hover:text-[#252839] hover:text-sm'>Veterinary Consultation</span>
                   <span className='cursor-pointer hover:underline hover:text-[#252839] hover:text-sm'>Laboratory & Diagnostics</span>
                   <span className='cursor-pointer hover:underline hover:text-[#252839] hover:text-sm'>Vaccination Services</span>
                   <span className='cursor-pointer hover:underline hover:text-[#252839] hover:text-sm'>Home Services</span>
                </div>
            ) }
            
            {activeSection === "Product" && (
                <div className='w-90 text-[#222222] flex flex-col flex-wrap gap-4 p-1 '>
                   <span className='cursor-pointer hover:underline hover:text-[#252839] hover:text-sm'>Food</span>
                   <span className='cursor-pointer hover:underline hover:text-[#252839] hover:text-sm'>Pet Pharmacy</span>
                   <span className='cursor-pointer hover:underline hover:text-[#252839] hover:text-sm'>Pet Accessories</span>
                </div>
            )}
        </div>
        ) }
            </div>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'hover:text-xl hover:cursor-pointer text-red-500' : "text-[#F2B632] hover:text-xl hover:cursor-pointer"}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'hover:text-xl hover:cursor-pointer text-red-500' : "text-[#F2B632] hover:text-xl hover:cursor-pointer"}>Contact</NavLink>
            <div className='flex items-end '>
                <div className='flex p-5 gap-2 text-2xl  '>
                    <LuSearch className='hover:text-2xl hover:cursor-pointer text-[#F2B632]'/>
                    <a href="https://wa.me/2348066629534" target='_blank'>
                        <FaWhatsapp className='text-[#21C063] hover:text-2xl hover:cursor-pointer'/>
                    </a>
                    
                </div>
            </div>
        </div>
       
      </header>
    </>
  )
}

export default HomeHeader
