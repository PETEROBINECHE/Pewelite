import React from 'react'
import { IoPawSharp } from 'react-icons/io5'
import { MdShoppingCart } from "react-icons/md";
import { SiTextpattern } from "react-icons/si";

const service = [
  {id: 1, servicetype: "Paw Adoption", notic: "A responsibility that show humanity", notic1: "and keep our home complete and fun.", icon: IoPawSharp, },
  {id: 2, servicetype: "Paw Product", notic: "Everything Your Pet Needs in One Place", notic1: "Shop quality food and accessories for all pet.", icon: MdShoppingCart, },
  {id: 3, servicetype: "Paw Services", notic: "your pet, our priority", notic1: "Because Your Pet Deserves the Best Care.", icon: SiTextpattern, },
]

const whyus = [
  {id: 1, title: "TRANSPARENT PRICING", notic: "No extra charges", skip: "-", icony: IoPawSharp, },
  {id: 2, title: "EXPERIENCED AND SKILLED TEAM", notic: "best team", skip: "-", icony: MdShoppingCart, },
  {id: 3, title: "RELIABLE AND TRUSTWORTHY", notic: "ture and open", skip: "-", icony: SiTextpattern, },
  {id: 4, title: "CUSTOMER-FOCUSED APPROACH", notic: "best customer service", skip: "-", icony: SiTextpattern, },
]

const meetteam = [
  {id: 1, teamimg: "", name: "MOZEE SEYI", position: "CEO", linkedin: "in", },
  {id: 2, teamimg: "", name: "OBINECHE PETER", position: "CTO", linkedin: "in", },
  
]

const doctorteam = [
  {id: 1, doctorimg: "", dname: "MOZEE SEYI", position: "Head Doctor", edu: "Phd - 10y expereinces", },
]

function Aboutaa() {

  
  return (
    <div className='w-full h-min'>
      <div className='w-full h-min'>
        <div className='h-18'></div>
        <div className='pl-20 mb-5'>
          <h1 className='text-9xl font-extrabold text-[#70717515]'>ABOUT US</h1>
        </div>

        {/* increse the height to fit well */}
        <div className='flex flex-col gap-10 bg-[#F3F3F4] justify-center items-center h-90'>
          <div className='flex flex-col gap-3 w-275'>
            <div className='flex p-2 items-center gap-2 border w-32'>
              <div className='w-2 h-2 rounded-full bg-[#CB8F0D]'></div>
              <p>ABOUT US</p>
              <div className='w-2 h-2 rounded-full bg-[#CB8F0D]'></div>
            </div>

            <div>
              <h2 className='font-semibold text-3xl text-[#CB8F0D]'>Introduction <span className='font-semibold text-[#252839]'>To Best</span><br/><span className='font-semibold text-[#252839]'>Animal Care!</span> </h2>
            </div>
          </div>

          <div className='flex gap-4'>
            {
              service.map((items) => {
                const Icon = items.icon;
              return(
              <div key={items.id} className='flex items-center gap-3 rounded p-2 bg-white shadow-2xl'>
                <Icon className='text-4xl'/>
                <div className=''>
                  <p className='font-semibold text-xl text-[#CB8F0D]'>{items.servicetype}</p>
                  <div className='flex flex-col'>
                    <span>{items.notic}</span>
                    <span>{items.notic1}</span>
                  </div>
                </div>
              </div>
              )
              })
            }
          </div>

          <div className='w-275 h-60 grid grid-cols-2 gap-2'>
            <div className='p-2 bg-white shadow-2xl gap-1 flex flex-col'>
              <div className='flex p-1 items-center gap-2 border w-32'>
                <div className='w-2 h-2 rounded-full bg-[#CB8F0D]'></div>
                <p>Our Story</p>
                <div className='w-2 h-2 rounded-full bg-[#CB8F0D]'></div>
             </div>
              <div>
                <span className='text-sm'>
                  PawEliteCare was born from a deep passion for animals and a desire to provide compassionate, professional, and reliable veterinary care. We believe every pet deserves love, attention, and quality healthcare, and we are committed to creating a trusted space where pets and their owners feel safe, valued, and supported.
                </span>
              </div>
            </div>

            <div className='bg-white shadow-2xl p-2 gap-1 flex flex-col'>
              <div className='flex p-1 items-center gap-2 border w-35'>
                <div className='w-2 h-2 rounded-full bg-[#CB8F0D]'></div>
                <p>Our Mission</p>
                <div className='w-2 h-2 rounded-full bg-[#CB8F0D]'></div>
              </div>
              <div>
                <span className='text-sm'>
                  To promote healthier and happier lives for pets through compassionate care, veterinary excellence, education, and dedication to animal welfare.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className=' flex flex-col gap-6 h-100 items-center justify-center bg-[#b1b1b197]'>
          <div className='flex flex-col gap-2 w-225'>
            <h4>PewElite</h4>
            <h1 className='text-3xl font-semibold'>WHY CHOOSE <span className='text-[#CB8F0D]'>US?</span></h1>
            <h4>Ready to give your pet premium care!, own a pet or enjoy holidays with ur paw in best hands. PewElite is here to help </h4>
          </div>

          <div className='flex gap-5 flex-wrap items-center justify-center'>
            {
              whyus.map((us) => {
                const Icons = us.icony;
                return(
                <div className=' w-110 p-2 bg-white shadow-2xl'>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-2.5 items-center'>
                      <Icons className='text-[#252839]'/>
                      <span>{us.title}</span>
                    </div>
                    <span className='w-8 rounded-xl items-center justify-center flex text-2xl font-semibold text-[#252839] bg-[#CB8F0D]'>{us.skip}</span>
                  </div>
                  <div>
                    <p>{us.notic}</p>
                  </div>
                </div>
                )
              })
            }
          </div>
        </div>

        <div className='flex flex-col items-center h-80 gap-5 bg-[#F3F3F4] justify-center'>
          <div className='flex flex-col gap-2 items-center'>
            <h2 className='text-2xl font-semibold'>Meet Our<span className='text-[#CB8F0D]'> Doctor</span></h2>
            <p>meet the sharp minds behind PawElite.</p>
          </div>

          <div className=' flex gap-8'>
            {
              doctorteam.map((doc) => (
                <div key={doc.id} className='flex flex-col items-center gap-3'>
                  <div className='border rounded-r-full w-20 h-20'>
                    <img src="" alt="team" />
                  </div>
                  <div className='flex flex-col items-center'>
                    <span className='font-semibold'>{doc.dname}</span>
                    <span className='text-[#CB8F0D] text-sm'>{doc.position}</span>
                    <div className=' p-2 rounded-r-full items-center justify-center flex text-sm mt-2 text-[#CB8F0D] bg-[#252839]'>{doc.edu}</div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div className='flex flex-col items-center h-80 gap-5 bg-[#D1D1D1] justify-center'>
          <div className='flex flex-col gap-2 items-center'>
            <h2 className='text-2xl font-semibold'><span className='text-[#CB8F0D]'>Meet</span> Our Team</h2>
            <p>meet the sharp minds behind PawElite.</p>
          </div>

          <div className=' flex gap-8'>
            {
              meetteam.map((meet) => (
                <div key={meet.id} className='flex flex-col items-center gap-3'>
                  <div className='border rounded-r-full rounded-t-2xl w-20 h-20'>
                    <img src="" alt="team" />
                  </div>
                  <div className='flex flex-col items-center'>
                    <span className='font-semibold'>{meet.name}</span>
                    <span className='text-[#CB8F0D] text-sm'>{meet.position}</span>
                    <div className='w-5 h-5 shadow-2xl rounded-full items-center justify-center flex text-sm mt-2 text-[#252839] bg-[#ffffff]'>{meet.linkedin}</div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutaa
