import Item from "antd/es/list/Item";
import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

function Ourserviceoo() {
  const navigate = useNavigate()
  const [serviceModel, setServiceModel] = useState(false)
  const [serviceFrom, setServiceFrom] = useState({
    date: "",
    time: "",
    numberofpet: "",
    Surgical: "",
    pawinfo: "",
    pawage: "",
    pawbreed: "",
    otherinfo: "",
    pawownername: "",
    pawownernumber: "",
    pawownweraddress: "",
    pickoffname: "",
    pickoftel: "",
    pickoffcode: "",
    pickoffaddress: "",
    pickofftime: "",
  })

  const pawadoption = () => {
    navigate("/pawadoption")
  }
 
  const servicelist = [
    {id: 1, fristimage: "", secondimage: "", price: "", summaryimg: "", servicetype: "Pet Grooming", discretion: "", BookAppointment: "Book Slot", other1: "", other2: "", nohomeservice: "" },
    {id: 2, fristimage: "", secondimage: "", price: "", summaryimg: "", servicetype: "Boarding & kennel", discretion: "", BookAppointment: "Book Appointment", other1: "", other2: "", nohomeservice: "NO Home Service" },
    {id: 3, fristimage: "", secondimage: "", price: "", summaryimg: "", servicetype: "Vaccination Services", discretion: "", BookAppointment: "Book Appointment", other1: "", other2: "", nohomeservice: "" },
    {id: 4, fristimage: "", secondimage: "", price: "", summaryimg: "", servicetype: "Laboratory & Diagnostics", discretion: "", BookAppointment: "Book Appointment", other1: "", other2: "", nohomeservice: "NO Home Service" },
    {id: 5, fristimage: "", secondimage: "", price: "", summaryimg: "", servicetype: "Veterinary Consultation", discretion: "", BookAppointment: "Book Appointment", other1: "", other2: "", nohomeservice: "" },
    {id: 6, fristimage: "", secondimage: "", price: "", summaryimg: "", servicetype: "Surgical Services", discretion: "", BookAppointment: "Book Appointment", other1: "", other2: "", nohomeservice: "NO Home Service" },
  ]

  return (
    <div className="w-full h-min">
      <div className="w-full h-160 bg-white flex flex-col items-center justify-center ">
        <img
          src="https://res.cloudinary.com/dl20vocbb/image/upload/v1772322316/243337cf1f4574171470dc1cc4fb1908-removebg-preview_iavgu2.png"
          alt=""
          className=" w-full h-160 object-cover"
        />
        <div className='absolute top-0 w-230 h-80 bg-[#ffffffea] flex flex-col items-center justify-end gap-2'>
          <h2 className='font-Poppins text-6xl font-bold text-[#252839]'>CARING FOR YOUR</h2>
          <h2 className='font-Poppins text-6xl font-bold text-[#252839]'>PETS LIKE OUR OWN</h2>
          <div className='flex flex-col items-center justify-center gap-3 p-2'>
              <p className="text-medium text-[#252839]">Quality veteinary services for all PewElite and more</p>
              <button className='w-45 h-10 rounded-xl cursor-pointer bg-[#252839] text-[#F2B632] text-xl hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839] flex items-center justify-center gap-2.5 '>Our Services <ChevronDown className='text-3xl font-bold'/></button>
          </div>
        </div>
        <div className='absolute -bottom-2 w-230 h-80 bg-[#ffffffea] flex flex-row items-center justify-center'>
          <div className='h-45 w-30 rounded-4xl bg-black rotate-x-10 -rotate-z-25 rotate-y-20'>
            <img src="" 
            alt=""
            className='' 
            />
          </div>
          <div className='h-45 w-30 rounded-4xl bg-black rotate-x-10 -rotate-z-25 rotate-y-20'>
            <img src="" 
            alt=""
            className='' 
            />
          </div>
          <div className='h-50 w-40 rounded-3xl bg-pink-400 z-999'>
            <img src="" 
            alt="" 
            />
          </div>
          <div className='h-45 w-30 rounded-4xl bg-black rotate-x-10 rotate-z-25 rotate-y-20'>
            <img src="" 
            alt="" 
            />
          </div>
          <div className='h-45 w-30 rounded-4xl bg-black rotate-x-10 rotate-z-25 rotate-y-20'>
            <img src="" 
            alt="" 
            />
          </div>
        </div>
      </div>

      <main className="w-full h-min bg-red-400 py-10 flex flex-col gap-50">
          {servicelist.map(Item => (
            <div key={Item.id} className="w-full h-80 bg-gray-100 relative flex px-10">
            <div className="w-120 h-80 bg-pink-400 absolute -top-15">
              <div className="">
                <img src="" alt="" />
              </div>
            </div>
            <div className="w-120 h-80 bg-blue-400 absolute right-15 -bottom-15">
              <div className="relative">
                <img src="" 
                alt="" 
                />
                <div className="absolute inset-0 flex items-start px-6 py-10 flex-col gap-2.5">
                  <p className="font-montserrat text-2xl font-semibold">{Item.servicetype}</p>
                  <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quas vel molestiae velit dolorum odit minus labore ad praesentium reiciendis nobis corporis eveniet odio molestias, illo nulla, cumque rem eius!</span>
                  <button className='p-3 rounded-xl cursor-pointer bg-[#252839] text-[#F2B632] text-xl hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]' onClick={() => setServiceModel(true)}>{Item.BookAppointment}</button>
                </div>
              </div>
            </div>
          </div>
          ) )}
      </main>
      
      {serviceModel && (
        <section className="w-full h-min bg-[#ffffff4b] p-2 fixed top-0 z-999 justify-end flex">
          <div className="w-150 h-screen bg-[#ffffff] flex flex-col gap-4 p-2 overflow-y-auto no-scrollbar scroll-smooth">

            <span className='p-3 bg-[#252839] rounded text-[#F2B632] absolute right-3 top-3 cursor-pointer font-semibold' onClick={() => setServiceModel(false)}>
            X
            </span>

            <div className="w-150 flex justify-center">
              <span className="text-[24px] font-bold font-poppins text-[#252839]">Surgical Services </span>
            </div>
            
            <div className="flex flex-col gap-4">
              <span className="text-[18px] font-semibold font-poppins text-[#252839]">
                Pick service time and date
                <p className="text-[14px] font-normal font-poppins text-[#252839]">Note all info will be verify before action.</p>
              </span>

              <span className="flex gap-4">
              <input type="date" 
              name="date" 
              id=""
              value={serviceFrom.date}
              onChange={(e) => setServiceFrom({...serviceFrom, date: (e.target.value) })}
              className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-70"
              />

              <input type="time" 
              name="time" 
              id=""
              value={serviceFrom.time}
              onChange={(e) => setServiceFrom({...serviceFrom, time: (e.target.value) })} 
              className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-70"
              />
              </span>
            </div>

            <div className="flex gap-4 flex-wrap">
              <div className="flex flex-col gap-3">

                <label className="text-[18px] font-bold font-poppins text-[#252839]">
                  Paw Type <span className="required text-red-400">*</span>
                </label>

                <select className="border-2 border-[#d1d5db] p-2 outline-0 w-70">
                  <option 
                  value="" 
                  >Select Paw Type </option>
                  <option value="Transfer">Cat</option>
                  <option value="Bank Deposite">Dog</option>
                  <option value="Bank Deposite">Bird</option>
                  <option value="Bank Deposite">Rabbit</option>
                </select>

              </div>

              <div className="flex flex-col gap-3">

                <p className="text-[18px] font-semibold font-poppins text-[#252839]">
                  Number of PawElite {"(pet)"}
                </p>

                <input type="text" 
                name="numberofpet" 
                id=""
                value={serviceFrom.numberofpet}
                onChange={(e) => setServiceFrom({...serviceFrom, numberofpet: (e.target.value) })} 
                placeholder="How Many"
                className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-70 font-semibold"
                />

              </div>

              <div className="flex flex-col gap-3">

                <label className="text-[18px] font-bold font-poppins text-[#252839]">
                  Surgical Services <span className="required text-red-400">*</span>
                </label>

                <input type="text" 
                name="Surgical" 
                id=""
                value={serviceFrom.Surgical}
                onChange={(e) => setServiceFrom({...serviceFrom, Surgical: (e.target.value) })} 
                placeholder="Surgical"
                className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-70 font-semibold"
                />

              </div>

            </div>

            

            <div className="flex flex-col gap-3">
              <p className="text-[18px] font-semibold font-poppins text-[#252839]">Paw Information</p>
            <div className="flex gap-4 flex-wrap">
              <input type="text" 
              name="pawinfo" 
              id=""
              value={serviceFrom.pawinfo}
              onChange={(e) => setServiceFrom({...serviceFrom, pawinfo: (e.target.value) })} 
              placeholder="Paw Name"
              className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-70 text-[#252839] font-semibold"
              />

              <input type="text" 
              name="pawage" 
              id=""
              value={serviceFrom.pawage}
              onChange={(e) => setServiceFrom({...serviceFrom, pawage: (e.target.value) })} 
              placeholder="Paw Age"
              className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-70 text-[#252839] font-semibold"
              />

              <input type="text" 
              name="pawbreed" 
              id=""
              value={serviceFrom.pawbreed}
              onChange={(e) => setServiceFrom({...serviceFrom, pawbreed: (e.target.value) })} 
              placeholder="Paw Breed"
              className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-70 font-semibold"
              />

            </div>
            
            <div className="flex flex-col gap-2.5">
                <label className="text-[18px] font-bold font-poppins text-[#252839]">
                  Paw Behaviour <span className="required text-red-400">*</span>
                </label>
                <select className="border-2 border-[#d1d5db] p-2 outline-0">
                <option value=""> Select Paw Behaviour Type</option>
                <option value="Transfer">Clam</option>
                <option value="Bank Deposite">Aggressive</option>
                <option value="Bank Deposite">Beast Mode</option>
              </select>
            </div>

            <div className="flex flex-col gap-2.5">
              <label className="text-[16px] font-bold font-poppins text-[#252839]">
                Other Paw Information you will like us to note down <span className="required text-red-400">*</span>
              </label>
              
              <input type="text"
              name="otherinfo"
              value={serviceFrom.otherinfo}
              onChange={(e) => setServiceFrom({...serviceFrom, otherinfo: (e.target.value) })} 
              id=""
              placeholder="Other vite information should be input here"
              className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-110 font-semibold"
              />
            </div>

            </div>

            <div className="flex flex-col gap-4">
              <label className="text-[18px] font-bold font-poppins text-[#252839]">
                Owner Infom <span className="required text-red-400">*</span>
              </label>

              <div className=" flex gap-4 flex-wrap">
                <input type="Text" 
                name="pawownername" 
                id=""
                value={serviceFrom.pawownername}
                onChange={(e) => setServiceFrom({...serviceFrom, pawownername: (e.target.value) })} 
                placeholder="Paw owner name"
                className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-70 font-semibold"
                />

                <input type="Tel" 
                name="pawownernumber" 
                id="" 
                value={serviceFrom.pawownernumber}
                onChange={(e) => setServiceFrom({...serviceFrom, pawownernumber: (e.target.value) })}
                placeholder="Paw owner number"
                className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-70 font-semibold"
                />

                <input type="text" 
                name="pawownweraddress" 
                id=""
                value={serviceFrom.pawownweraddress}
                onChange={(e) => setServiceFrom({...serviceFrom, pawownweraddress: (e.target.value) })} 
                placeholder="Paw owner address"
                className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-70 font-semibold"
                />
              </div>

               

              <div className="flex flex-col gap-2.5">
                  <label className="text-[18px] font-bold font-poppins text-[#252839]">
                    Paw Pick up infom <span className="required text-red-400">*</span>
                  </label>
                  <select className="border-2 border-[#d1d5db] p-2 outline-0">
                  
                  <option value="Transfer">Me</option>
                  <option value="Bank Deposite">Others {"(Friend, Husband, Son, etc)"}</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <span className="text-[18px] font-semibold font-poppins text-[#252839]">Paw Pick off Personer</span>
                <p className="text-[14px] font-normal font-poppins text-[#252839]">Note: Only the person fill in this section and above can collet paw.</p>
              </div>

              <div className="flex gap-4 flex-wrap">

                <input type="text" 
                name="pickoffname" 
                id="" 
                value={serviceFrom.pickoffname}
                onChange={(e) => setServiceFrom({...serviceFrom, pickoffname: (e.target.value) })}
                placeholder="Name"
                className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-70 font-semibold"
                />

                <input type="tel" 
                name="pickoftel" 
                id="" 
                value={serviceFrom.pickoftel}
                onChange={(e) => setServiceFrom({...serviceFrom, pickoftel: (e.target.value) })}
                placeholder="Number"
                className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-70 font-semibold"
                />

                <input type="text" 
                name="pickoffcode" 
                id="" 
                value={serviceFrom.pickoffcode}
                onChange={(e) => setServiceFrom({...serviceFrom, pickoffcode: (e.target.value) })}
                placeholder="Code for Pick Off"
                className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-70 font-semibold"
                />

                <input type="text" 
                name="pickoffaddress" id=""
                value={serviceFrom.pickoffaddress}
                onChange={(e) => setServiceFrom({...serviceFrom, pickoffaddress: (e.target.value) })} 
                placeholder="Address"
                className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-70 font-semibold"
                />

              </div>

              <div className="flex flex-col gap-4 ">
                <label className="text-[18px] font-bold font-poppins text-[#252839]">
                  Expended pick up Time <span className="required text-red-400">*</span>
                  <p className="text-[14px] font-normal font-poppins text-[#252839]">Note owner are expected to with to be</p>
                </label>
                <input type="time" 
                name="pickofftime" id=""
                value={serviceFrom.pickofftime}
                onChange={(e) => setServiceFrom({...serviceFrom, pickofftime: (e.target.value) })} 
                className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-70 font-semibold"
                />
              </div>

            </div>

            <div className="mb-5 flex justify-end">
              <Link to={`/summary1`} className='p-3 rounded-xl cursor-pointer bg-[#252839] text-[#F2B632] text-xl hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'>
                Proced to Payment
              </Link>
            </div>

          </div>
        </section>
      )}


      <div className="">
        <main className="w-full h-min bg-red-400 py-10 flex flex-col gap-50">
            <div key={Item.id} className="w-full h-80 bg-gray-100 relative flex px-10">

             <div className="w-120 h-80 bg-blue-400 absolute -top-15 ">
              <div className="relative">
                <img src="" 
                alt="" 
                />
                <div className="absolute inset-0 flex items-start px-6 py-10 flex-col gap-2.5">
                  <p className="font-montserrat text-2xl font-semibold">Pet Adoption</p>
                  <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quas vel molestiae velit dolorum odit minus labore ad praesentium reiciendis nobis corporis eveniet odio molestias, illo nulla, cumque rem eius!</span>
                  <button className='p-3 rounded-xl cursor-pointer bg-[#252839] text-[#F2B632] text-xl hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]' onClick={pawadoption}>See Paw</button>
                </div>
              </div>
            </div>

            <div className="w-120 h-80 bg-pink-400 absolute right-15 -bottom-15">
              <div className="">
                <img src="" alt="" />
              </div>
            </div>
           
          </div>
      </main>
      </div>
      
      
    </div>
  );
}

export default Ourserviceoo;
