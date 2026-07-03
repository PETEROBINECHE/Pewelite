import ButtonGroup from 'antd/es/button/ButtonGroup';
import { div, text } from 'framer-motion/m';
import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa6';
import { TbCurrencyNaira } from 'react-icons/tb';
import { MdShoppingCart } from "react-icons/md";
import { IoPawSharp, IoStorefrontOutline } from "react-icons/io5";
import { SiTextpattern } from "react-icons/si";
import { MdDeleteForever } from "react-icons/md";
import { ChevronLeft, ShoppingBag, Smartphone, MapPin, ChevronDown } from "lucide-react";
import Location_Modal from './location';
import { useNavigate } from 'react-router-dom';
import { PiWarningOctagonFill } from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { PiPawPrintLight } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";


function Summary() {

    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const [location, setLocation] = useState();
    const [deliveryAddress, setDeliveryAddress] = useState(true);
    const [accotInfo, setAccotInfo] = useState(false);
    const [serviceFrom, setServiceFrom] = useState({
        pickoffname: "",
        pickoftel: "",
        pickoffcode: "",
        pickoffaddress: "",
        pickofftime: "",
    })

    const navigate = useNavigate();

  return (
    <div className='w-full h-screen'>
      <div className='mt-7 ml-10'>
        <span className='flex text-[#252839] items-center cursor-pointer' onClick={()=> navigate(-1)}><ChevronLeft size={24} /> <p className='text-xl'>Back</p></span>
      </div>

      <div className='w-full h-min p-2'>
        <div className='w-full flex items-center justify-center p-3 flex-col bg-[#2528390a] '>
            <span className='text-2xl text-[#252839] font-semibold font-poppins'>Paw Order Summary.</span>
            <span >Review your items and proceed.</span>
        </div>
        <div className='w-full h-min flex flex-row justify-between bg-white p-6'>
           <div className='w-210 h-min bg-[#2528390a] p-4 gap-4 flex flex-col'>
                
                <div className='w-200 h-max bg-white flex flex-col gap- justify-center rounded-xl shadow-md p-3 border-l-4 border-blue-500'>
                    <div className='gap-6 bg-blue-50 flex flex-col'>
                        <div className='flex gap-6 items-center'>
                           
                        <span className='text-blue-500 font-bold flex gap-1.5 items-center '> <MdShoppingCart className='text-4xl'/>Paw List of Product Purchased.</span>
                        <span className='px-2 py-0.5 text-sm text-blue-500  rounded-2xl flex items-center gap-1 border border-blue-200'>2 <span>items</span></span>
                        </div>

                        <div className='flex'>
                            <div className='grid grid-cols-1 w-105 '>
                                <span className='justify-center flex'>item</span>
                            </div>
                            

                            <div className='grid grid-cols-4 w-110'>
                            <span className=' flex justify-center items-center'>Quantity</span>
                            <span className=' flex justify-center items-center'>Price</span>
                            <span className=' flex justify-center items-center'>Total</span>
                            <span className=' flex justify-center items-center'></span>
                            </div>
                        </div>
                    </div>

                    <div className='border border-[#2528395a]'>
                        <div className='flex flex-row  items-center border-b border-gray-200 h-15'>
                            <div className='flex flex-row gap-6.5 w-96 pl-4 items-center'>
                                <div className='border p-2 rounded w-15 h-13'>
                                    <img src="" alt="items img"
                                    className=' text-sm' 
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <span className=' font-bold'>Alex Food "Calcuim Feed"</span>
                                    <span className='text-sm'>15kg</span>
                                </div>
                            </div>

                            <div className='grid grid-cols-4 gap-4 justify-around w-99'>
                                <span className=' flex justify-center items-center'>1</span>
                                <span className=' justify-center flex flex-row items-center text-sm '><TbCurrencyNaira className='text-[#222222] text-xl font-nomal' />400000</span>
                                <span className=' justify-center flex flex-row items-center text-sm '><TbCurrencyNaira className='text-[#222222] text-xl font-nomal' />400000</span>
                                <button className='mr-1 px-3 py-2 rounded flex justify-center cursor-pointer bg-[#252839] text-[#F2B632]  hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'><MdDeleteForever className='text-2xl'/></button>
                            </div>
                        </div>

                        <div className='flex flex-row  items-center border-b border-blue-100 h-15'>
                            <div className='flex flex-row gap-6.5 w-96 pl-4 items-center'>
                                <div className='border p-2 rounded w-15 h-13'>
                                    <img src="" alt="items img"
                                    className=' text-sm' 
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <span className=' font-bold'>Alex Food "Calcuim Feed"</span>
                                    <span className='text-sm'>15kg</span>
                                </div>
                            </div>

                            <div className='grid grid-cols-4 gap-4 justify-around w-99'>
                                <span className=' flex justify-center items-center'>1</span>
                                <span className=' justify-center flex flex-row items-center text-sm '><TbCurrencyNaira className='text-[#222222] text-xl font-nomal' />400000</span>
                                <span className=' justify-center flex flex-row items-center text-sm '><TbCurrencyNaira className='text-[#222222] text-xl font-nomal' />400000</span>
                                <button className='mr-1 px-3 py-2 rounded flex justify-center cursor-pointer bg-[#252839] text-[#F2B632]  hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'><MdDeleteForever className='text-2xl'/></button>
                            </div>
                        </div>
                    </div>

                    <div className='h-12 bg-blue-50 grid grid-cols-2'>
                        <div></div>
                        <div className='flex gap-5  items-center ml-13 text-blue-600 font-semibold'>
                            <span>{"Subtotal (Products):"}</span>
                            <span className=' justify-center flex flex-row items-center text-sm '><TbCurrencyNaira className=' text-xl font-nomal' />400000</span>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2.5 text-[#252839]'>
                        <div className='p-1 flex items-center gap-2.5'>
                            <span className='font-semibold'>Choose Delivery Method</span>
                            <span className='text-gray-300'>---------------------------------------------------------------------------------------</span>
                        </div>

                        <div className='flex flex-col gap-2.5'>
                            <div className=' border flex border-blue-200'>
                                <div className='w-10 place-items-start justify-center flex p-1.5'>
                                    <input type='radio'
                                    name="Delivery option" 
                                    id="pick up" 
                                    className=' cursor-pointer' 
                                    />
                                </div>

                                <div  className='w-20 flex items-center justify-center'>
                                    <CiDeliveryTruck className='text-2xl'/>
                                </div>

                                <div  className='w-105 '>
                                    <p className='font-semibold'>Home Delivery</p>
                                    <span className='text-sm'>Get your products delivered to your address</span>
                                </div>

                                <div  className='w-20 flex items-center text-blue-600 font-semibold'>
                                    <span>₦3,000</span>
                                </div>
                            </div>

                            <div className=' border flex border-blue-200'>
                                <div className='w-10 place-items-start justify-center flex p-1.5'>
                                    <input type='radio'
                                    name="Delivery option" 
                                    id="store pickUp" 
                                    className=' cursor-pointer'
                                    />
                                </div>

                                <div  className='w-20 flex items-center justify-center'>
                                    <IoStorefrontOutline className='text-2xl'/>
                                </div>

                                <div  className='w-105 '>
                                    <p className='font-semibold'>Store Pickup</p>
                                    <span className='text-sm'>pick up your items at our store</span>
                                </div>

                                <div  className='w-20 flex items-center text-blue-600 font-semibold'>
                                    <span>Free</span>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>


                <div className='w-200 h-max bg-white flex flex-col gap- justify-center rounded-xl shadow-md p-3 border-l-4 border-green-500'>
                    <div className='gap-6 bg-green-50 flex flex-col'>
                        <div className='flex gap-6 items-center'>
                            
                        <span className='text-green-500 font-bold flex items-center gap-1.5'><IoPawSharp className='text-4xl'/>List of Paw Adopted</span>
                        <span className='px-2 py-0.5 text-sm text-green-500  rounded-2xl flex items-center gap-1 border border-green-200'>1 <span>Items</span></span>
                        </div>

                        <div className='flex'>
                            <div className='grid grid-cols-1 w-105 '>
                                <span className='justify-center flex'>Item</span>
                            </div>
                            

                            <div className='grid grid-cols-4 w-110'>
                            <span className=' flex justify-center items-center'>Number</span>
                            <span className=' flex justify-center items-center'>Price</span>
                            <span className=' flex justify-center items-center'>Total</span>
                            <span className=' flex justify-center items-center'></span>
                            </div>
                        </div>
                    </div>

                    <div className='border border-[#2528395c]'>
                        <div className='flex flex-row  items-center border-b border-gray-200 h-15'>
                            <div className='flex flex-row gap-6.5 w-96 pl-4 items-center'>
                                <div className='border p-2 rounded w-15 h-13'>
                                    <img src="" alt="items img"
                                    className=' text-sm' 
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <span className='font-bold'>German Shepherd Puppy</span>
                                    <div className='flex flex-row gap-2.5'>
                                        <span className='text-sm'>Age: <span>3 months</span></span>
                                        <span className='text-sm'>Gender: <span>Male</span></span>
                                    </div>
                                </div>
                            </div>

                            <div className='grid grid-cols-4 gap-4 justify-around w-99'>
                                <span className=' flex justify-center items-center'>1</span>
                                <span className=' justify-center flex flex-row items-center text-sm '><TbCurrencyNaira className='text-[#222222] text-xl font-nomal' />400000</span>
                                <span className=' justify-center flex flex-row items-center text-sm '><TbCurrencyNaira className='text-[#222222] text-xl font-nomal' />400000</span>
                                <button className='mr-1 px-3 py-2 rounded flex justify-center cursor-pointer bg-[#252839] text-[#F2B632]  hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'><MdDeleteForever className='text-2xl'/></button>
                            </div>
                        </div>
                    </div>

                    <div className='h-12 bg-green-50 grid grid-cols-2'>
                        <div></div>
                        <div className='flex gap-5  items-center ml-13 text-green-600 font-semibold'>
                            <span>{"Subtotal (Adopted):"}</span>
                            <span className=' justify-center flex flex-row items-center text-sm '><TbCurrencyNaira className='text-xl font-nomal' />400000</span>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2.5 text-[#252839]'>
                        <div className='p-1 flex items-center gap-2.5'>
                            <span className='font-semibold'>Choose Pickup / Delivery</span>
                            <span className='text-gray-300'>---------------------------------------------------------------------------------------</span>
                        </div>

                        <div className='flex flex-col gap-2.5'>
                            <div className=' border flex border-green-200'>
                                <div className='w-10 place-items-start justify-center flex p-1.5'>
                                    <input type='radio'
                                    name="Deliverypet" 
                                    id="pick up"
                                    class="accent-green-500" 
                                    className=' cursor-pointer' 
                                    />
                                </div>

                                <div  className='w-20 flex items-center justify-center'>
                                    <PiPawPrintLight className='text-2xl'/>
                                </div>

                                <div  className='w-105 '>
                                    <p className='font-semibold'>Pickup at Facility</p>
                                    <span className='text-sm'>Pick up your pet at our Facility</span>
                                </div>

                                <div  className='w-20 flex items-center text-green-600 font-semibold'>
                                    <span>Free</span>
                                </div>
                            </div>

                            <div className=' border flex border-green-200'>
                                <div className='w-10 place-items-start justify-center flex p-1.5'>
                                    <input type='radio'
                                    name="Deliverypet" 
                                    id="store pickUp"
                                    class="accent-green-500" 
                                    className=' cursor-pointer'
                                    />
                                </div>

                                <div  className='w-20 flex items-center justify-center'>
                                    <CiDeliveryTruck className='text-2xl'/>
                                </div>

                                <div  className='w-105 '>
                                    <p className='font-semibold'>Seller Delivery</p>
                                    <span className='text-sm'>We'll deliver your pet to you</span>
                                </div>

                                <div  className='w-20 flex items-center text-green-600 font-semibold'>
                                    <span>₦5,000</span>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>

                <div className='w-200 h-max bg-white flex flex-col gap- justify-center rounded-xl shadow-md p-3 border-l-4 border-red-500'>
                    <div className='gap-6 bg-red-50 flex flex-col'>
                        <div className='flex gap-6 items-center'>
                        <span className='text-red-500 font-bold flex items-center gap-1.5'> <SiTextpattern className='text-4xl'/>Services Booked</span>
                        <span className='px-2 py-0.5 text-sm text-red-500  rounded-2xl flex items-center gap-1 border border-red-200'>1 <span>items</span></span>
                        </div>

                        <div className='flex'>
                            <div className='grid grid-cols-1 w-105 '>
                                <span className='justify-center flex'>Service</span>
                            </div>
                            

                            <div className='grid grid-cols-4 w-110'>
                            <span className=' flex justify-center items-center'>Date & Time</span>
                            <span className=' flex justify-center items-center'></span>
                            <span className=' flex justify-center items-center'>Price</span>
                            <span className=' flex justify-center items-center'></span>
                            </div>
                        </div>
                    </div>

                    <div className='border border-[#2528395a]'>
                        <div className='flex flex-row  items-center border-b border-gray-200 h-15'>
                            <div className='flex flex-row gap-6.5 w-96 pl-4 items-center'>
                                <div className='border p-2 rounded w-15 h-13'>
                                    <img src="" alt="items img"
                                    className=' text-sm' 
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <span className='font-bold'>{"Full Grooming (Dog)"}</span>
                                    <span className='text-sm'>Bath, Haircut, Nail Trim </span>
                                </div>
                            </div>

                            <div className='grid grid-cols-4 gap-4 justify-around w-99'>
                                <div>
                                    <span className=' flex justify-center items-center'>24 Apr 26</span>
                                    <span className=' flex justify-center items-center'>03:00PM</span>
                                </div>
                                
                                <span className=' justify-center flex flex-row items-center text-sm '></span>
                                <span className=' justify-center flex flex-row items-center text-sm '><TbCurrencyNaira className='text-[#222222] text-xl font-nomal' />400000</span>
                                <button className='mr-1 px-3 py-2 rounded flex justify-center cursor-pointer bg-[#252839] text-[#F2B632]  hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'><MdDeleteForever className='text-2xl'/></button>
                            </div>
                        </div>
                    </div>

                    <div className='h-12 grid grid-cols-2 bg-red-50'>
                        <div></div>
                        <div className='flex gap-5  items-center ml-13 text-red-600 font-semibold'>
                            <span>{"Subtotal (Services):"}</span>
                            <span className=' justify-center flex flex-row items-center text-sm '><TbCurrencyNaira className='text-xl font-nomal' />400000</span>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2.5 text-[#252839]'>
                        <div className='p-1 flex items-center gap-2.5'>
                            <span className='font-semibold'>Choose Service Type</span>
                            <span className='text-gray-300'>---------------------------------------------------------------------------------------</span>
                        </div>

                        <div className='flex flex-col gap-2.5'>
                            <div className=' border flex border-red-200'>
                                <div className='w-10 place-items-start justify-center flex p-1.5'>
                                    <input type='radio'
                                    name="Deliveryservice" 
                                    id="pick up"
                                    class="accent-red-500" 
                                    className=' cursor-pointer' 
                                    />
                                </div>

                                <div  className='w-20 flex items-center justify-center'>
                                    <IoHomeOutline className='text-2xl' />
                                </div>

                                <div  className='w-105 '>
                                    <p className='font-semibold'>Home Service</p>
                                    <span className='text-sm'>Our service come to you</span>
                                </div>

                                <div  className='w-20 flex items-center text-red-600 font-semibold'>
                                    <span>₦4,000</span>
                                </div>
                            </div>

                            <div className=' border flex border-red-200'>
                                <div className='w-10 place-items-start justify-center flex p-1.5'>
                                    <input type='radio'
                                    name="Deliveryservice" 
                                    id="store pickUp"
                                    class="accent-red-500" 
                                    className=' cursor-pointer'
                                    />
                                </div>

                                <div  className='w-20 flex items-center justify-center'>
                                    <HiOutlineBuildingOffice2 className='text-2xl'/>
                                </div>

                                <div  className='w-105 '>
                                    <p className='font-semibold'>Visit Our Center</p>
                                    <span className='text-sm'>You Visit our service center</span>
                                </div>

                                <div  className='w-20 flex items-center text-red-600 font-semibold'>
                                    <span>Free</span>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>

                <div className=' border border-[#25283984] rounded-xl text-[#25283990] w-200'>
                    <div className='px-4 flex items-center gap-3'>
                        <span><PiWarningOctagonFill className=' shadow-xl text-yellow-700 shadow-red-200 text-2xl'/></span>
                        <div className=' flex flex-col'>
                        <p className='text-sm font-semibold text-yellow-700'>Important Note</p>
                        <span className='text-sm'>Different delivery and pickup options may have different fees.</span>
                        </div>
                    </div>
                </div>


                {/* <div className='flex flex-col gap-2'>
                    <div>
                        <span className='text-2xl text-[#252839] font-semibold font-poppins'>Delivery Type</span>
                    </div>

                    <div className='flex gap-5'>
                        <div className='flex gap-1'>
                            <input type="radio" 
                            name="Delivery option" 
                            id="Pick Up" 
                            className='cursor-pointer'
                            onClick={()=> setDeliveryAddress(false)}
                            />
                            <span>Pick Up</span>
                        </div>
                        
                        <div className='flex gap-1'>
                            <input type="radio" 
                            name="Delivery option" 
                            id="Drop Off" 
                            className='cursor-pointer'
                            onClick={()=> setDeliveryAddress(true)}
                            />
                            <span>Drop Off</span>
                        </div>
                    </div>
                </div> */}


                {deliveryAddress && (
                   <div className='flex gap-5'>
                        <div className='w-210 h-max bg-white flex flex-col gap-6 p-1'>
                            <div className="flex flex-col gap-5">
                                <h1 className="text-[24px] font-bold font-poppins text-[#252839]">Delivery Address</h1>

                                <div className='flex w-200 items-center justify-between'>
                                    <div className="flex items-center gap-3 border-2 rounded-3xl border-[#d1d5db] px-3 py-0.5 cursor-pointer h-12 w-min-[280px] bg-white w-fit hover-bg-[#f9fafb]" onClick={() => setLocation(true)}>
                                        <MapPin size={20} color="#000" />
                                        <span className="felx-1 text-16px text-[#252839]">Select your location</span>
                                        <ChevronDown size={20} color="#000" />
                                    </div>

                                    {location && <Location_Modal toclose={setLocation} />}

                                    <div className='w-100'>
                                        <div className="flex gap-4 items-center pb-3 border-b-2 border-[#d1d5db] w-max-[730px]">
                                            <Smartphone size={24} color="#000" className="phone-icon" />
                                            <input
                                                type="text"
                                                className="text-[#252839] border-0 p-2 w-100 outline-0"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                placeholder="Add Delivery Address"
                                            />
                                        </div>
                                        <span className="text-red-400">Required field</span>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between'>
                                <div className='w-95'>
                                    <div className="flex gap-4 items-center pb-3 border-b-2 border-[#d1d5db] w-max-[730px]">
                                        <Smartphone size={24} color="#000" className="phone-icon" />
                                        <input
                                        type='tel'
                                        className="text-[#252839] border-0 p-2 w-100 outline-0 "
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Add Phone Number"
                                        />
                                    </div>
                                    <span className="text-red-400">Required field</span>
                                </div>

                                <div className="flex flex-col gap-2.5 w-100">
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
                                    className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-90 font-semibold"
                                    />

                                    <input type="tel" 
                                    name="pickoftel" 
                                    id="" 
                                    value={serviceFrom.pickoftel}
                                    onChange={(e) => setServiceFrom({...serviceFrom, pickoftel: (e.target.value) })}
                                    placeholder="Number"
                                    className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-90 font-semibold"
                                    />

                                    <input type="text" 
                                    name="pickoffcode" 
                                    id="" 
                                    value={serviceFrom.pickoffcode}
                                    onChange={(e) => setServiceFrom({...serviceFrom, pickoffcode: (e.target.value) })}
                                    placeholder="Code for Pick Off"
                                    className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-90 font-semibold"
                                    />

                                    <input type="text" 
                                    name="pickoffaddress" id=""
                                    value={serviceFrom.pickoffaddress}
                                    onChange={(e) => setServiceFrom({...serviceFrom, pickoffaddress: (e.target.value) })} 
                                    placeholder="Address"
                                    className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-90 font-semibold"
                                    />

                                </div>

                                <div className="flex flex-col gap-4 ">
                                    <label className="text-[18px] font-bold font-poppins text-[#252839]">
                                    Expended pick up Time <span className="required text-red-400">*</span>
                                    <p className="text-[14px] font-normal font-poppins text-[#252839]">Note owner are expected to with to be called</p>
                                    </label>
                                    <input type="time" 
                                    name="pickofftime" id=""
                                    value={serviceFrom.pickofftime}
                                    onChange={(e) => setServiceFrom({...serviceFrom, pickofftime: (e.target.value) })} 
                                    className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-90 font-semibold"
                                    />
                                </div>

                            </div>

                            <div className="flex flex-col gap-2.5">
                                <label className="text-[24px] font-bold font-poppins text-[#252839]">
                                    Chosen Payment Method <span className="required text-red-400">*</span>
                                </label>
                                <select className="border-2 border-[#d1d5db] p-2 outline-0 w-90">
                                    <option value="">Select a Payment Type</option>
                                    <option value="Transfer">Transfer</option>
                                    <option value="Bank Deposite">Bank Deposite</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-2">
                                    <label className="">
                                    <span className="">
                                        <input type="checkbox" 
                                        name="" 
                                        id=""
                                        className=''
                                        onClick={()=> setAccotInfo(true)} 
                                        />
                                        {" "} I agree to the{" "} 
                                        <a href="#" className="text-red-600 underline">
                                         Terms and Conditions.
                                        </a>
                                    </span>
                                    </label>
                                    <p className="">
                                        By making this payment, you agree to the {" "} 
                                        <a href="#" className="text-red-600 underline">
                                         Terms and Conditions
                                        </a>
                                        {" "} of PawElite Care.
                                    </p>
                                </div>
                        </div>
                    </div>
                )}
            </div>

            {accotInfo && (
                <div onClick={()=> setAccotInfo(false)} className='w-full h-screen bg-[#dbd9d981] p-2 z-999 top-0 fixed flex items-center justify-center'>
                 <div className='flex flex-col gap-3 bg-white p-3 rounded-2xl shadow-2xl shadow-[#252839] relative'>
                    <span className='p-3 bg-[#252839] rounded text-[#F2B632] absolute right-3 top-3 cursor-pointer hover:bg-red-600 hover:text-white' onClick={()=> setAccotInfo(false)}>
                         X
                    </span>
                    <h2 className="text-[20px] font-bold font-poppins text-[#252839] flex items-center justify-center">Account Information.</h2>
                    <div className='flex flex-col gap-1.5'>
                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-2.5 '>
                                <p className="text-[14px] font-bold font-poppins text-[#252839]">Amount to be Paid:-</p>
                                <p className='p-2 border border-[#d1d5db] rounded w-55'>₦ 400,000.00</p>
                            </div>
                            <div className='flex flex-col gap-2.5'>
                                <p className="text-[14px] font-bold font-poppins text-[#252839]">Account Number:-</p>
                                <span className='p-2 border border-[#d1d5db] rounded w-55'>  12875852479</span>
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-2.5 '>
                                <p className="text-[14px] font-bold font-poppins text-[#252839]">Account Name:-</p>
                                <p className='p-2 border border-[#d1d5db] rounded w-55'>PewElite Care</p>
                            </div>
                            <div className='flex flex-col gap-2.5'>
                                <p className="text-[14px] font-bold font-poppins text-[#252839]">Bank Name:-</p>
                                <span className='p-2 border border-[#d1d5db] rounded w-55'> GT Bank</span>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className=''>
                            <span>pls, send transaction receipt to this WhatsApp Number after Payment</span>
                            <span className='gap-2 text-xl flex items-center justify-center'><a href="https://wa.me/2348066629534" target='_blank'>
                                <FaWhatsapp className='text-[#21C063] cursor-pointer text-xl'/>
                                </a> <a href="https://wa.me/2348066629534" target='_blank' className='underline'>
                                <p>+234 8066629534</p>
                                </a>
                            </span>
                        </div>
                    </div>
                 </div>
                </div>
            )}

            <div className='w-80 h-min p-4 flex flex-col gap-4 bg-[#2528390a] shadow-xl'>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between items-center'>
                       <span className='text-2xl font-poppins'>Summary</span> 
                       <div className=" border border-[#2528398e] p-3 rounded-full">
                        <ShoppingBag size={24} className='text-[#252839]' />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2.5">
                        <div className="flex justify-between items-center">
                        <span>Products <span>{"(2)"}</span></span>
                        <span>₦ 400,000</span>
                        </div>

                        <div className="flex justify-between items-center">
                        <span>PAW <span>{"(1)"}</span></span>
                        <span>₦ </span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                        <span>Services <span>{"(1)"}</span></span>
                        <span>₦ </span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                        <span className='font-semibold'>Delivery / Service Fees</span>
                        {/* <span>₦ </span> */}
                        </div>

                        <div className="flex justify-between items-center">
                        <span>Products Delivery</span>
                        <span>₦ </span>
                        </div>

                        <div className="flex justify-between items-center">
                        <span>Paw Transport</span>
                        <span>₦ </span>
                        </div>

                        <div className="flex justify-between items-center">
                        <span>Services Fee</span>
                        <span>₦ </span>
                        </div>
                    </div>

                    <div className='flex justify-between items-center border-t p-3 border-[#25283963]'>
                        <span className='font-semibold font-poppins'>Total Amount</span>
                        <span className='font-bold text-xl font-poppins'>₦400,000.00</span>
                    </div>

                    <button onClick={()=> setAccotInfo(true)} className='px-3 py-2 rounded cursor-pointer bg-[#252839] text-[#F2B632]  hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'>Pay to Order</button>
                </div>

                <div className='w-73 h-min bg-white'>
                    <div className='w-73 h-23  gap-2 flex flex-col p-2 bg-green-40 py-2 items-center'>
                        <div className='w-15 h-22'>
                            <img src="https://res.cloudinary.com/dl20vocbb/image/upload/v1771933050/4331348c-fc5d-40e1-b35c-cb1bd6d87b9c_uzaqti.jpg" 
                            alt="logo image" 
                            />
                        </div>
                        <div className=' flex items-center '>
                            <span className='text-xl text-[#252839] font-poppins'> PawElite Care</span>
                        </div>
                    </div>

                    <div className='w-73 px-2'>
                        <div className='items-center w-70 flex flex-col justify-center'>
                            <span className="text-[16px] font-medium font-poppins text-[#252839]">Pick Up Slip</span>
                            <span className="text-[16px] font-poppins text-[#252839] font-semibold">Transaction ID: <span>Paw-XE2543657</span></span>
                        </div>

                        <div>
                            <p>Address: <span>Igbogbo Ikorodu Lagos State Nigeria - 101245</span></p>
                        </div>

                        <div>
                            <p>Phone Number: <span>+234 7088576867 <br></br>+234 8066629534</span></p>
                        </div>

                        <div className=' flex justify-around'>
                            <span>Time: <span>2:34pm</span></span>
                            <span>Date: <span>3/4/2026</span></span>
                        </div>
                    </div>

                    <div className='p-2 items-center flex flex-col w-73 justify-center mb-5'>
                        <span className='text-[11px] font-inter  '>pls, screenshot or copy ID and take to a PawElite</span>
                        <span className='text-[11px] font-inter  '>Care Store near you for payment</span>
                    </div>
                </div>


                <span></span>
                <div className='w-73 h-min bg-white'>
                    <div className='w-73 h-23  gap-2 flex flex-col p-2 bg-green-40 py-2 items-center'>
                        <div className='w-15 h-22'>
                            <img src="https://res.cloudinary.com/dl20vocbb/image/upload/v1771933050/4331348c-fc5d-40e1-b35c-cb1bd6d87b9c_uzaqti.jpg" 
                            alt="logo image" 
                            />
                        </div>
                        <div className=' flex items-center '>
                            <span className='text-xl text-[#252839] font-poppins'> PawElite Care</span>
                        </div>
                    </div>

                    <div className='w-73 px-2'>
                        <div className='items-center w-70 flex flex-col justify-center'>
                            <span className="text-[16px] font-medium font-poppins text-[#252839]">Receipt Slip</span>
                            <span className="text-[16px] font-semibold font-poppins text-[#252839]">Transaction ID: <span>Paw-XE2543657</span></span>
                        </div>

                        <div className='grid grid-cols-4'>
                            <div className=' w-25 text-sm'>Description</div>
                            <div className='  flex justify-end text-sm'>Qty</div>
                            <div className=' flex justify-center text-sm'>Rate</div>
                            <div className=' flex justify-center text-sm'>Amt</div>
                        </div>

                        <div className=''>
                            <div className='grid grid-cols-4 mt-1'>
                                <div className='w-25 text-sm'>Dog food </div>
                                <div className='flex justify-end text-sm'>1pk</div>
                                <div className='flex justify-center text-sm'>14,000</div>
                                <div className='flex justify-center text-sm'>14,000</div> 
                            </div>
                        </div> 
                        

                        <div className='grid grid-cols-3 font-semibold mt-2'>
                            <div></div>
                            <div className='flex justify-center text-sm'>Total Amount</div>
                            <div className='flex justify-end text-sm '>₦14,000.00</div>
                        </div>

                        <div>
                            <p>Address:- <span>Igbogbo Ikorodu Lagos State Nigeria - 101245</span></p>
                        </div>
                            
                        <div>
                            <p>Phone Number:- <span>+234 7088576867 <br></br>+234 8066629534</span></p>
                        </div>

                        <div className=' flex justify-around'>
                            <span>Time: <span>2:34pm</span></span>
                            <span>Date: <span>3/4/2026</span></span>
                        </div>
                    </div>

                    <div className='p-2 items-center flex flex-col w-73 justify-center mb-5'>
                        <span className='text-[11px] font-inter  '>Thanks for your patronage.</span>
                        <span className='text-[11px] font-inter  '>@PawElite.</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Summary
