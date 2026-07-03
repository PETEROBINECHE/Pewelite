import { FaFacebook, FaSquareInstagram } from "react-icons/fa6";
import { ImWhatsapp } from 'react-icons/im';
import { GrMail } from 'react-icons/gr';
import { AiOutlineGlobal } from 'react-icons/ai';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';

function Footer() {

  const navigate = useNavigate()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
    
  return (
    <>
      <footer className="w-full h-140 bg-[#252839] flex gap-2.5  p-2.5 items-center flex-col">
              <div className=" w-full flex gap-2.5 p-2.5 items-center pt-20">
                  <div className="w-100 h-80  flex items-center gap-2.5 flex-col">
                      <div className="w-95 h-90  p-2.5 flex flex-col gap-4">
                          <div className="flex text-[#F0F0F0]  flex-col text-3xl gap-1.5 font-bold">
                          <p>PawElite Care</p>
                          <span className="text-xs text-[#F0F0F0] font-normal mb-5">since 2025</span>
                          <button className='text-xs p-3 rounded bg-[#F2B632] cursor-pointer text-[#222222] text-start  w-40 hover:bg-[#CB8F0D]'>Book Appointment</button>
                          </div>
                      </div>
                      <div className="w-75 h-30 flex items-center justify-around">
                          
                      </div>
                  </div>
                  <div className="w-80 h-80  flex  gap-3.5 items-end flex-col text-white">
                      <p className="text-2xl text-[#F0F0F0]">
                          Contact Us
                      </p>
      
                      <div className="flex-col flex gap-2 items-end">
                      <span>Igbogbo Ikorodu Lagos State</span>
                      <span>Nigeria - 101245</span>
                      <span>+234 7088576867 <br /> +234 8066629534</span>
                      <a href='mailto:Pawelitecare@gmail.com?Subjet=Pawelite%20Care' target='_blank' className='cursor-pointer hover:text-[#F2B632] hover:underline underline-offset-1'>Pawelitecare@gmail.com</a>
                      </div>
                      <button className='p-3 bg-[#F2B632] cursor-pointer transition duration-700 ease-in-out rounded text-[#222222] hover:bg-[#CB8F0D] hover:text-2x1'>Register Pet</button>
                  </div>
                  <div className="w-90 h-80  flex flex-col gap-3.5 items-center text-neutral-50">
                  <p className="text-2xl text-[#F0F0F0]">
                      Our Services
                  </p>
      
                  <div className="flex-row flex gap-0.5">
                  
                  <span className='w-40 h-70 flex-col flex gap-2.5'>
                      <span className='cursor-pointer hover:text-[#F2B632]'>Pet Pharmacy</span>
                      <span className='cursor-pointer hover:text-[#F2B632]'>Pet Food</span>
                      <NavLink to="/pawadoption" className='cursor-pointer hover:text-[#F2B632]'>Pet Adoption</NavLink>
                      <span className='cursor-pointer hover:text-[#F2B632]'>Pet Grooming</span>
                      <span className='cursor-pointer hover:text-[#F2B632]'>Laboratory & Diagnostics</span>
                      <span className='cursor-pointer hover:text-[#F2B632]'>Veterinary Consultation</span>
                      
                  </span>
                  <span className='w-40 h-70 flex-col flex gap-2.5 text-end'>
                      <span className='cursor-pointer hover:text-[#F2B632]'>Vaccination Services</span>
                      <span className='cursor-pointer hover:text-[#F2B632]'>Boarding & kennel</span>
                      <span className='cursor-pointer hover:text-[#F2B632]'>Surgical Services</span>
                      <span className='cursor-pointer hover:text-[#F2B632]'>Pet Registration</span>
                  </span>
                  </div> 
                  </div>
      
                  <div className="w-50 h-80  flex flex-col gap-3.5 items-center relative">
                  <p className="text-2xl text-[#F0F0F0]">
                      Explore
                  </p>
      
                  <div className="flex-col flex gap-2.5 text-[#F0F0F0]">
                  <span className='cursor-pointer hover:text-[#F2B632]' onClick={()=> navigate("/")}>Home</span>
                  <span className='cursor-pointer hover:text-[#F2B632]' onClick={()=> navigate("/ourservice")}>Our Services</span>
                  <span className='cursor-pointer hover:text-[#F2B632]' onClick={()=> navigate("/product")}>Our Product</span>
                  <span className='cursor-pointer hover:text-[#F2B632]' onClick={()=> navigate("/about")}>About</span>
                  <span className='cursor-pointer hover:text-[#F2B632]' onClick={()=> navigate("/contact")}>Contact</span>
                  </div> 
                  <div onClick={scrollToTop} className='w-10 h-10 absolute bg-[#F2B632] rounded-full flex items-center cursor-pointer text-lg justify-center -top-4 -right-3 size-14 hover:bg-white'>
                        <MdKeyboardArrowUp className="text-xl"/>   
                  </div>
                  </div>
              </div>
      
              <div className="w-310 h-28 flex flex-col border-gray-400 border-t justify-items-center  p-2 gap-3">
                  <span className="text-2xl text-[#F2B632]">
                      Follow us
                  </span>
                  <div className="flex gap-3">
                      <div className="w-12 h-12 rounded-full text-white bg-white/10 flex items-center justify-center ">
                          <FaFacebook className="cursor-pointer text-3xl hover:animate-bounce" />
                      </div>
                      <div className="w-12 h-12 rounded-full text-white bg-white/10 flex items-center justify-center ">
                          <FaSquareInstagram className="cursor-pointer text-white text-3xl hover:animate-bounce"/>
                      </div>
                      <div className="w-12 h-12 rounded-full text-white bg-white/10 flex items-center justify-center ">
                            <a href='mailto:Pawelitecare@gmail.com?Subjet=Pawelite%20Care' target='_blank' className='cursor-pointer hover:text-[#F2B632] hover:underline underline-offset-1'>
                                <GrMail className="cursor-pointer text-white text-3xl hover:animate-bounce"/>
                            </a> 
                      </div>
                      <div className="w-12 h-12 rounded-full text-white bg-white/10 flex items-center justify-center ">
                          <AiOutlineGlobal className="cursor-pointer text-white text-3xl hover:animate-bounce"/>
                      </div>
                      <div className="w-12 h-12 rounded-full text-white bg-white/10 flex items-center justify-center ">
                        <a href="https://wa.me/2348066629534" target='_blank'>
                            <ImWhatsapp className="cursor-pointer text-white text-3xl size-6 animate-bounce"/>
                        </a>
                      </div>
                  </div>
              </div>
            </footer>
    </>
  )
}

export default Footer
