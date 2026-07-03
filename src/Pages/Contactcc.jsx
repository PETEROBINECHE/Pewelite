import React, { useState } from 'react'
import { MapPin } from "lucide-react";
import { GrMail } from 'react-icons/gr';

function Contactcc() {

  const [contactUs, setContactUs] = useState({
    enterMassage: "",
    name: "",
    email: "",
    number: "",
    subject: "",
  });

  console.log(contactUs)

  return (
    <div className='w-full h-min'>
      <div className='w-full h-min '>
        <div className='h-18'></div>
        <div className='pl-20 mb-5'>
          <h1 className='text-9xl font-extrabold text-[#70717515]'>CONTACT</h1>
        </div>

        <div className='w-full h-90 bg-[#70717515] flex flex-col justify-center items-center gap-5'>
          <div className='flex p-2 items-center gap-2 border '>
            <div className='w-2 h-2 rounded-full bg-[#CB8F0D]'></div>
            <p>CONTACT INFO</p>
            <div className='w-2 h-2 rounded-full bg-[#CB8F0D]'></div>
          </div>
          <h2 className='text-[#CB8F0D] text-3xl font-semibold'>Contact <span className='text-[#252839] text-3xl'>& Join Together</span></h2>
          <div className='flex flex-col items-center'>
            <h4>For sponsorship, advert placement, promotion, inquiry and complain</h4>
            <h4>please use any of the means below</h4>
          </div>

          <div className=' flex gap-3.5'>
            <div className=' p-3 rounded-xl gap-3 flex flex-col bg-white shadow-2xl'>
              <div className='flex items-center gap-2.5 pl-3.5'>
                <MapPin size={35} color="#000" />
                <div>
                  <p>Location..</p>
                  <p className='text-[#CB8F0D] font-semibold'>Visit Us At</p>
                </div>
              </div>
              <div className=' flex flex-col items-center'>
                <span>Igbogbo Ikorodu Lagos State</span> 
                <span>Nigeria - 101245</span>
              </div>
            </div>

            <div className=' p-3 rounded-xl gap-3 flex flex-col bg-white shadow-2xl'>
              <div className='flex items-center gap-2.5 pl-3.5'>
                <MapPin size={35} color="#000" />
                <div>
                  <p>24 *7 Service..</p>
                  <p className='text-[#CB8F0D] font-semibold'>Call Us On</p>
                </div>
              </div>
              <div className=' flex flex-col items-center'>
                <span><span>Tel: </span>+234 80-6662-9534</span> 
                <span><span> mob: </span>+234 70-8857-6867</span>
              </div>
            </div>

            <div className=' p-3 rounded-xl gap-3 flex flex-col bg-white shadow-2xl'>
              <div className='flex items-center gap-2.5 pl-3.5'>
                <GrMail className="text-4xl"/>
                <div>
                  <p>Drop a Line..</p>
                  <p className='text-[#CB8F0D] font-semibold'>Mail Address</p>
                </div>
              </div>
              <div className=' flex flex-col items-center'>
                <span><span>Mail: </span>Pawelitecare@gmail.com</span> 
              </div>
            </div>

            <div className=' p-3 rounded-xl gap-3 flex flex-col bg-white shadow-2xl'>
              <div className='flex items-center gap-2.5 pl-3.5'>
                <GrMail className="text-4xl"/>
                <div>
                  <p>Office Hours..</p>
                  <p className='text-[#CB8F0D] font-semibold'>Opening Time</p>
                </div>
              </div>
              <div className=' flex flex-col items-center'>
                <span>Mon - Fri: 9am - 10pm</span> 
                <span>{"Sunday (closed)"}</span> 
              </div>
            </div>
          </div>
        </div>

        <div className='w-full h-110 bg-[#ffff] flex items-center justify-center'>
          <div className='w-60 h-80 flex items-center justify-center text-white'>
            <div className='w-55 h-65 bg-[#252839] rounded-xl p-1 items-center justify-center flex flex-col gap-3'>
              <div className='bg-white rounded-full w-15 h-15'>

              </div>
              <h2 className='text-xl'>Chat With Live !</h2>
              <span className='px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis</span>
              <button className='w-35 px-3 py-2 rounded cursor-pointer bg-[#2d3040] text-[#Fffff]  hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]' >LET'S CHAT</button>
            </div>
          </div>
          <div className='w-55 h-85 border'>

          </div>
          <div className='w-105 h-85 pl-2 flex flex-col gap-3'>
            <div className='flex p-1 items-center gap-2 bg-[#70717515] w-35'>
              <div className='w-2 h-2 rounded-full bg-[#CB8F0D]'></div>
              <p>CONTACT US</p>
              <div className='w-2 h-2 rounded-full bg-[#CB8F0D]'></div>
            </div>
            <h2 className='text-[#CB8F0D] text-2xl font-bold'>Reach <span className='text-[#252839] text-2xl'>& Get In Touch <br/> With Us !</span></h2>

            <div className='flex flex-col gap-4'>
              <div className='flex gap-2.5'>
                <input type="text" 
                name="" id=""
                placeholder='Your Name*'
                className=' rounded pl-3 outline-0 bg-[#70717515]'
                value={contactUs.name}
                onChange={(e) => setContactUs({...contactUs, name: (e.target.value) })} 
                />

                <input type="email" 
                name="" id=""
                placeholder='Your Email*'
                className=' rounded pl-3 outline-0 bg-[#70717515]'
                value={contactUs.email}
                onChange={(e) => setContactUs({...contactUs, email: (e.target.value) })} 
                />
              </div>

              <div className='flex gap-2.5'>
                <input type="text" 
                name="" id=""
                placeholder='Your Number*'
                className=' rounded pl-3 outline-0 bg-[#70717515]'
                value={contactUs.number}
                onChange={(e) => setContactUs({...contactUs, number: (e.target.value) })} 
                />

                <input type="text" 
                name="" id=""
                placeholder='Your Subject*'
                className=' rounded pl-3 outline-0 bg-[#70717515]'
                value={contactUs.subject}
                onChange={(e) => setContactUs({...contactUs, subject: (e.target.value) })} 
                />
              </div>

              <div className='flex gap-2.5'>
                <textarea
                placeholder='Enter Massage*' 
                className=' rounded pl-3 outline-0 bg-[#70717515] w-80 h-20'
                value={contactUs.enterMassage}
                onChange={(e) => setContactUs({...contactUs, enterMassage: (e.target.value) })}
                />
              </div>
            </div>
            <button className='w-35 px-3 py-2 rounded cursor-pointer bg-[#252839] text-[#F2B632]  hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]' >Send Message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactcc
