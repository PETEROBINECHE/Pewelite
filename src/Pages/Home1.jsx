import React, { useEffect, useState } from 'react'
import { FaArrowRight} from "react-icons/fa6";
import { TbCurrencyNaira } from 'react-icons/tb';
import { Carousel } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';

function Home1() {

    const [herod, setHerod] = useState(0);

    useEffect(()=> {
        const interval = setInterval(() => {
           setHerod((prev)=> (prev + 1) %3); 
        }, 3000);

        return () => clearInterval(interval);
    },[])

    const navigate = useNavigate()

    const pawadoption = () =>{
        navigate("/pawadoption")
    }

    const Product = [
    {id: 1, productName:"Cat Spoly", price:"29,900", productimg:"https://res.cloudinary.com/dmqhseusw/image/upload/v1773485749/f8e82a0d7ef3d1ae480020ff61ae204a_y1nb8f.jpg" },
    {id: 2, productName:"380 Cat Fit", price:"23,000", productimg:"https://res.cloudinary.com/dmqhseusw/image/upload/v1773485748/b804bdde764132229e5f726f686f853f_ikvd7i.jpg" },
    {id: 3, productName:"Lisa Harland", price:"13,250", productimg:"https://res.cloudinary.com/dmqhseusw/image/upload/v1773485749/03520cd49b627d840bf15dbb7ce96b37_t6e8so.jpg" },
    {id: 4, productName:"7 Signs Your Dog Needs More Mental Stimulation", price:"7,000", productimg:"https://res.cloudinary.com/dmqhseusw/image/upload/v1773485749/9527a146943d0a8b85ff8bfe1ab58f9f_dvmy5c.jpg" },
    {id: 5, productName:"KMR Kitten Milk Replacer Powder - 28-oz can", price:"23,500", productimg:"https://res.cloudinary.com/dmqhseusw/image/upload/v1773485748/84eb59234180fee015957e46fc2fe1cd_p3sdxf.jpg" },
    {id: 6, productName:"High Quality Pet Calcium Tablets Goat Milk Calcium for Cats and Dogs", price:"26,030", productimg:"https://res.cloudinary.com/dmqhseusw/image/upload/v1773485748/27950388dadef9b189b8d4291799a479_ky9g6h.jpg" },
    {id: 7, productName:"PuppyShampoo", price:"18,340", productimg:"https://res.cloudinary.com/dmqhseusw/image/upload/v1773485749/527a67131ce9458913ea9c1149e469ac_dc1j24.jpg" },
    {id: 8, productName:"Clean Feel for Dog Shampoo", price:"35,000", productimg:"https://res.cloudinary.com/dmqhseusw/image/upload/v1773485749/ee039a63f3c81a763b594ae959ca139a_hj0h1n.jpg" },
    {id: 9, productName:"Lamb choice", price:"22,000", productimg:"https://res.cloudinary.com/dmqhseusw/image/upload/v1773185582/4cdb8fb0fe2b7e0d805c96d9cef257e2_fyghzw.jpg" },
    {id: 10, productName:"Ruff Dog Food", price:"25,000", productimg:"https://res.cloudinary.com/dmqhseusw/image/upload/v1773490754/54109ea0dcf2b5e09547e18c25454346_qcj8ls.jpg" },
    {id: 11, productName:"Joyride Harness for Dogs", price:"5,000", productimg:"https://res.cloudinary.com/dmqhseusw/image/upload/v1773485748/3cbf45b58942b9f74879dfe995be24f5_rdk4xp.jpg" },
    {id: 12, productName:"Pet Hand Scrub", price:"8,000", productimg:"https://res.cloudinary.com/dmqhseusw/image/upload/v1773485748/d50ea23f37dc44ffe40a50c94725c0da_bwu4ho.jpg" }
    ]

  return (
    <>
        <main className='w-full h-200  relative size-32'>
        <img src="https://res.cloudinary.com/dl20vocbb/image/upload/v1771944007/copy_of_7dced269-cb81-47c2-890c-08d3b79690bf_fyyjai_f94872.jpg" 
        alt="hero img"
        className='object-cover object-top w-full h-full' 
        />

        <div className='w-full h-200 absolute inset-0 py-60 px-15 flex flex-col gap-32'>
            <h1 className='text-[#002735] text-6xl font-extrabold tracking-[0.45em] antialiased overline leading-30 scale-y-110'> PawElite Care </h1>
            <p className='text-5xl font-semibold tracking-[0.30em] text-[#252839] text-end underline underline-offset-8'>for Every Paw</p>

            <div className='w-full h-45 absolute inset-x-0 bottom-0 p-3'>
                <div className=' relative flex justify-around w-full h-40'>
                    <div className={`w-70 h-35 rounded absolute bottom-0 left-0 size-16 ${herod === 0 ? "block" : "hidden" }`}>
                    <img src="https://res.cloudinary.com/dl20vocbb/image/upload/v1771944007/copy_of_7dced269-cb81-47c2-890c-08d3b79690bf_fyyjai_f94872.jpg" 
                    alt=""
                    className='w-full h-35 object-cover' 
                    />
                    </div>

                    <div className={`w-70 h-35 rounded absolute  bottom-0 ${herod === 1 ? "block" : "hidden" }`}>
                    <img src="https://res.cloudinary.com/dl20vocbb/image/upload/v1772324881/5b18458d866df215a5803ec0af775dbc-removebg-preview_bmqnmv.png" 
                    alt=""
                    className='w-full h-35 object-cover' 
                    />
                    </div>

                    <div className={`w-70 h-35 rounded absolute bottom-0 right-0 size-16 ${herod === 2 ? "block" : "hidden" }`}>
                    <img src="https://res.cloudinary.com/dl20vocbb/image/upload/v1772322316/243337cf1f4574171470dc1cc4fb1908-removebg-preview_iavgu2.png" 
                    alt=""
                    className='w-full h-35 object-cover' 
                    />
                    </div>

                    <div className='flex gap-4 absolute -top-20 left-11'>
                        {/* <NavLink to="/pawadoption"> */}
                        <button onClick={pawadoption } className='p-3 rounded-xl cursor-pointer bg-[#252839] text-[#F2B632] text-xl hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'>Pet Adoption</button>
                        {/* </NavLink> */}
                        <button className='p-4 rounded-xl cursor-pointer bg-[#252839] text-[#F2B632] text-xl hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'>Book Appointment</button>
                    </div>
                </div>
            </div>
        </div>
      </main>


      <section className='w-full h-min'>
        <div className='w-full h-70 flex items-center justify-center px-2 bg-[#e3e3e3]'>
            <div className='w-150 h-60 relative'>
                        <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1773497105/91b6efe1042fa713bea150efcab9c607_zl9ulq.jpg" 
                        alt="product header" 
                        className=' bg-top w-150 h-60 rounded'
                        />
                        <div className='absolute inset-0 p-2 flex items-center'>
                            <div className='flex flex-col text-center items-center gap-6 text-[#222222] w-140'>
                                <h1 className='font-inter antialiased text-3xl font-bold items-stretc'>Our Services on PawElite </h1>
                                <h1 className='font-inter antialiased text-2xl font-semibold items-stretc'>Because Your Pet Deserves the Best Care</h1>
                                <span className='text-3xl font-bold flex gap-3 items-center font-inter'>We Offer. <FaArrowRight /></span>
                            </div>
                        </div>
                    </div>
            <div className='w-160 h-70 p-2'>
                <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
                    <div className='w-160 h-65 relative size-32'>
                        <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1773916187/fluffy-bat_1755200194ohU5WD_ejbc2n.jpg" 
                        alt="seriveimag" 
                        className='w-160 h-65 bg-origin-content bg-center object-cover'
                        />
                         <div className='absolute right-0 bottom-0 size-16 bg-[#978e6622] w-80 h-25 p-2 flex flex-col items-center'>
                            <p className='font-iosevka text-2xl font-medium'>Grooming Made Simple</p>
                            <span className='text-xl font-sans'>guarantee a spotless experience.</span>
                         </div>
                    </div>
                    <div className='w-160 h-65 relative size-32'>
                        <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1773918299/heroimage0.127309001762169760_dqdttb.jpg" 
                        alt="seriveimag" 
                        className='w-160 h-65  object-fill'
                        />
                        <div className='absolute bottom-0 left-0 size-16 w-80 h-25 p-2 flex flex-col items-center'>
                            <p className='font-iosevka text-2xl font-medium'>Vaccination Services</p>
                            <span className='text-xl font-sans'>protect your pet year-round.</span>
                         </div>
                    </div>
                    <div className='w-160 h-65 relative size-32'>
                        <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1773919394/dd53b96e124225d6499e810305719773_bhunyg.jpg" 
                        alt="seriveimag" 
                        className='w-160 h-65  bg-top'
                        />
                        <div className='absolute right-0 bottom-0 size-16 bg-[#978e6622] w-80 h-25 p-2 flex flex-col items-center'>
                            <p className='font-iosevka text-2xl font-medium'>Surgical Services</p>
                            <span className='text-xl font-sans'>protect your pet year-round.</span>
                         </div>
                    </div>
                    <div className='w-160 h-65 relative size-32'>
                        <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1773918299/shutterstock_1523596505_1__iawch2.jpg" 
                        alt="seriveimag" 
                        className='w-160 h-65  bg-top'
                        />
                        <div className='absolute bottom-0 left-0 size-16  w-80 h-25 p-2 flex flex-col items-center'>
                            <p className='font-iosevka text-2xl font-medium'>Laboratory & Diagnostics</p>
                            <span className='text-xl font-sans'>protect your pet year-round.</span>
                         </div>
                    </div>
                    <div className='w-160 h-65 relative size-32'>
                        <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1773919394/c3c2b3cb2e79b8851c5e461a954c7ebb_npgrqi.jpg" 
                        alt="seriveimag" 
                        className='w-160 h-65  bg-top'
                        />
                        <div className='absolute right-0 bottom-0 size-16  w-80 h-25 p-2 flex flex-col items-center'>
                            <p className='font-iosevka text-2xl font-medium'>Veterinary Consultation</p>
                            <span className='text-xl font-sans'>protect your pet year-round.</span>
                         </div>
                    </div>
                    <div className='w-160 h-65 relative size-32'>
                        <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1774034717/4345dcb5fd90be1a36dc960bf6664304_zh3ukq.jpg" 
                        alt="seriveimag" 
                        className='w-160 h-65  bg-top'
                        />
                        <div className='absolute bottom-0 left-0 size-16  w-80 h-25 p-2 flex flex-col items-center'>
                            <p className='font-iosevka text-2xl font-medium'>Boarding & kennel</p>
                            <span className='text-xl font-sans'>Home for all.</span>
                         </div>
                    </div>
                    <div className='w-160 h-65 relative size-32'>
                        <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1774034715/5ff98a463a00fae40b94fe8ebb11dd13_lvvhuq.jpg" 
                        alt="seriveimag" 
                        className='w-160 h-65  bg-top'
                        />
                        <div className='absolute right-0 bottom-0 size-16  w-80 h-25 p-2 flex flex-col items-center'>
                            <p className='font-iosevka text-2xl font-medium'>Pet Adoption</p>
                            <span className='text-xl font-sans'>protect your pet year-round.</span>
                         </div>
                    </div>

                </Carousel>
            </div>
        </div>
              

        <div className='w-full h-110 flex flex-row p-5 flex-wrap gap-2 overflow-y-auto no-scrollbar scroll-smooth'>
            <div className='w-150 h-100 relative size-32'>
              <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1774036434/8e212b86bedb6d1768a7480c1efa8699_iii6yg.jpg" 
              alt="seriveimag" 
              className='w-150 h-100 object-cover'
              />
              <div className='w-100 h-45 absolute left-0 bottom-0 size-16 p-7 flex flex-col gap-4'>
                <h1 className='font-iosevka text-3xl font-bold text-white'>Grooming Made Simple</h1>
                <div className='flex gap-4'>
                    <button className='p-3 rounded-xl cursor-pointer bg-[#252839] text-[#F2B632] text-xl hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'>preview</button>
                    <button className='p-4 rounded-xl cursor-pointer bg-[#252839] text-[#F2B632] text-xl hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'>Book Appointment</button>
                </div>
              </div>  
            </div>
            <div className='w-150 h-100 relative size-32'>
              <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1774034717/07055812ea6279459a55e8a754c07bd9_ltvqtv.jpg" 
              alt="seriveimag" 
              className='w-150 h-100 object-cover'
              />
              <div className='w-100 h-45 absolute left-0 bottom-0 size-16 p-7 flex flex-col gap-4'>
                <h1 className='font-iosevka text-3xl font-bold'>Pet Adoption</h1>
                <div className='flex gap-4'>
                    <button className='p-3 rounded-xl cursor-pointer bg-[#252839] text-[#F2B632] text-xl hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'>preview</button>
                    <button className='p-4 rounded-xl cursor-pointer bg-[#252839] text-[#F2B632] text-xl hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'>Book Appointment</button>
                </div>
              </div>
            </div>
             <div className='w-150 h-100 relative size-32'>
              <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1774034718/c2b823f94d1e144f2b4b35c79e3cb27a_oapy5j.jpg" 
              alt="seriveimag" 
              className='w-150 h-100 object-cover'
              />
              <div className='w-100 h-45 absolute left-0 bottom-0 size-16 p-7 flex flex-col gap-4'>
                <h1 className='font-iosevka text-3xl font-bold'>Boarding & kennel</h1>
                <div className='flex gap-4'>
                    <button className='p-3 rounded-xl cursor-pointer bg-[#252839] text-[#F2B632] text-xl hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'>preview</button>
                    <button className='p-4 rounded-xl cursor-pointer bg-[#252839] text-[#F2B632] text-xl hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'>Book Appointment</button>
                </div>
              </div>  
            </div>
            <div className='w-150 h-100 relative size-32'>
              <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1773919392/6ac7a789779a697b589353c2dcfb8e1d_vt9mhm.jpg" 
              alt="seriveimag" 
              className='w-150 h-100 object-cover'
              />
              <div className='w-100 h-45 absolute left-0 bottom-0 size-16 p-7 flex flex-col gap-4'>
                <h1 className='font-iosevka text-3xl font-bold'>Veterinary Consultation</h1>
                <div className='flex gap-4'>
                    <button className='p-3 rounded-xl cursor-pointer bg-[#252839] text-[#F2B632] text-xl hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'>preview</button>
                    <button className='p-4 rounded-xl cursor-pointer bg-[#252839] text-[#F2B632] text-xl hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'>Book Appointment</button>
                </div>
              </div> 
            </div>
             <div className='w-150 h-100 relative size-32'>
              <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1773918301/shutterstock_1979575187_w6my7q.jpg" 
              alt="seriveimag" 
              className='w-150 h-100 object-cover'
              />
              <div className='w-100 h-45 absolute left-0 bottom-0 size-16 p-7 flex flex-col gap-4'>
                <h1 className='font-iosevka text-3xl font-bold'>Vaccination Services</h1>
                <div className='flex gap-4'>
                    <button className='p-3 rounded-xl cursor-pointer bg-[#252839] text-[#F2B632] text-xl hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'>preview</button>
                    <button className='p-4 rounded-xl cursor-pointer bg-[#252839] text-[#F2B632] text-xl hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'>Book Appointment</button>
                </div>
              </div>  
            </div>
            <div className='w-150 h-100 relative size-32'>
              <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1773919393/9974f022598c393f68479bcb39efd4e5_hsajmp.jpg" 
              alt="seriveimag" 
              className='w-150 h-100 object-cover'
              />
              <div className='w-100 h-45 absolute left-0 bottom-0 size-16 p-7 flex flex-col gap-4'>
                <h1 className='font-iosevka text-3xl font-bold'>Surgical Services</h1>
                <div className='flex gap-4'>
                    <button className='p-3 rounded-xl cursor-pointer bg-[#252839] text-[#F2B632] text-xl hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'>preview</button>
                    <button className='p-4 rounded-xl cursor-pointer bg-[#252839] text-[#F2B632] text-xl hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'>Book Appointment</button>
                </div>
              </div> 
            </div>
             <div className='w-150 h-100 relative size-32'>
              <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1774034716/58c4d79badd08d123a70553b055ba241_vehnme.jpg" 
              alt="seriveimag" 
              className='w-150 h-100 object-cover'
              />
              <div className='w-100 h-45 absolute left-0 bottom-0 size-16 p-7 flex flex-col gap-4'>
                <h1 className='font-iosevka text-3xl font-bold'>Laboratory & Diagnostics</h1>
                <div className='flex gap-4'>
                    <button className='p-3 rounded-xl cursor-pointer bg-[#252839] text-[#F2B632] text-xl hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'>preview</button>
                    <button className='p-4 rounded-xl cursor-pointer bg-[#252839] text-[#F2B632] text-xl hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'>Book Appointment</button>
                </div>
              </div>  
            </div>
            <div className='w-150 h-100 relative size-32'>
              <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1774037524/d07e11aa3172712816dce7008d7af024_j72mf8.jpg" 
              alt="seriveimag" 
              className='w-150 h-100 object-cover'
              />
              <div className='w-100 h-45 absolute left-0 bottom-0 size-16 p-7 flex flex-col gap-4'>
                <h1 className='font-iosevka text-3xl font-bold'>Home Services</h1>
                <div className='flex gap-4'>
                    <button className='p-3 rounded-xl cursor-pointer bg-[#252839] text-[#F2B632] text-xl hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'>preview</button>
                    <button className='p-4 rounded-xl cursor-pointer bg-[#252839] text-[#F2B632] text-xl hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'>Book Appointment</button>
                </div>
              </div> 
            </div>
        </div>

        <div className='w-full h-min'>
            <div className='w-full h-60 relative'>
                <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
                <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1773497104/8a2d7a45ef0a585c6bc5d5368496ad07_cxtcsb.jpg" 
                alt="product header" 
                className=' bg-top w-full h-60 relative'
                />
                <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1773497108/7923fcb9398758c28fa56e445bc6e487_gz0gkk.jpg" 
                alt="product header" 
                className=' bg-top w-full h-60 relative'
                />
                <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1773497106/48e66d3d1fda654bc48df2214bbca8a8_spjyir.jpg" 
                alt="product header" 
                className=' bg-top w-full h-60 relative'
                />
                <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1773505333/copy_of_5ea6f454e92f83a264bbbbf6f70d2924_tjua66_a6ff0f.jpg" 
                alt="product header" 
                className=' bg-top w-full h-60 relative'
                />
                <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1773497107/7742b5ce3707a3c119dc96aba858e446_q2z0ao.jpg" 
                alt="product header" 
                className=' bg-top w-full h-60 relative'
                />
                <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1773497104/24e10fe08f13403af19de9e6173963b3_ebzwb8.jpg" 
                alt="product header" 
                className=' bg-top w-full h-60 relative'
                />
                <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1773497108/a74e2efadb2ce7052348155b331a9932_wxsjgv.jpg" 
                alt="product header" 
                className=' bg-top w-full h-60 relative'
                />
                </Carousel>
                <div className='absolute inset-0 bg-[#414343da]'> </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center  gap-5">
                    <h1 className='text-4xl font-bold font-Poppins'>🐾 Everything Your Pet Needs in One Place</h1>
                    <p className='text-2xl text-[#131520] font-medium font-iosevka'>Shop quality food, grooming essentials, and accessories designed for all pet</p>
                    <button className='p-5 rounded-xl bg-[#252839] text-[#F2B632] text-xl hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'>Find More</button>
                </div>
            </div>
            <div className='w-full h-min bg-white py-4 px-12 flex flex-row flex-wrap gap-7 '>
               {Product.map(Items => (
                <>
                <div key={Items.id} className='w-55 h-55 rounded-xl bg-gray-300'>
                    <img src={Items.productimg}
                     alt="product img" 
                     className='object-cover rounded-xl w-55 h-55'
                     />
                </div>
                <div className='w-30 h-min rounded-l-lg bg-gray-200 flex flex-col items-center justify-center'>
                    <p className='w-29 h-min text-center p-1'>{Items.productName} </p>
                    <div className='w-30 h-28 flex flex-col gap-2 justify-center items-center'>
                        <span className='w-22 h-13 flex flex-col items-center justify-center'>
                            <p className='text-red-500 text-m'>Price:</p>
                            <span className='flex flex-row items-center text-base'><TbCurrencyNaira className='text-red-500 text-xl' />{Items.price}</span>
                        </span>
                        <button className='w-20 h-18 border-none rounded cursor-pointer bg-[#252839] text-[#F2B632] text-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-500 hover:text-[#ffff] hover:text-x1'>GET</button>
                    </div>   
                </div>
                </>  
               ))}           
            </div>
        </div>
        <div className='w-full h-110 bg-[#FFFFFF] flex items-center justify-center '>
            <div className='w-250 h-100 bg-red-300 rounded-2xl p-2 flex gap-2 relative'>
                <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1774037526/11b0e0512242e8ff9aafa4cba8fac63b_qxzlir.jpg" 
                alt="" 
                className='rounded-2xl object-cover absolute inset-0 h-100 w-250 '
                />

                <div className='w-80 h-100 bg-[#252839ac] flex flex-col py-6 items-center gap-8 transform -skew-x-1'>
                    <div className='flex flex-col items-center gap-2 text-[#F2B632]'>
                        <span className='font-inter text-2xl text-bold'>Let's get you started</span>
                        <span className='font-iosevka text-xl'>Pet Adoption</span>
                    </div>
                </div>
                <div className='w-80 h-100 bg-[#252839ac] flex flex-col py-25 items-center gap-8 transform -skew-x-12'>
                    <div className='flex flex-col items-center gap-2 text-[#F2B632]'>
                        <span className='font-inter text-2xl text-bold'>Let's get you started</span>
                        <span className='font-iosevka text-xl'>Home Services</span>
                    </div>
                   
                </div>
                <div className='w-80 h-100 bg-[#252839ac] flex flex-col py-50 items-center gap-8 transform -skew-x-12'>
                    <div className='flex flex-col items-center gap-2 text-[#F2B632]'>
                        <span className='font-inter text-2xl text-bold'>Let's get you started</span>
                        <span className='font-iosevka text-xl'>Book Appointment</span>
                    </div>
                   
                </div>
                <div className='w-80 h-100 bg-[#252839ac] flex flex-col py-60 items-center gap-8 transform skew-y-2'>
                    <div className='flex flex-col items-center gap-2 text-[#F2B632]'>
                        <span className='font-inter text-2xl text-bold'>Let's get you started</span>
                        <span className='font-iosevka text-xl'>Pet Registration</span>
                    </div>
                   
                </div>
            </div>
        </div>
        
      </section>
    </>
  )
}

export default Home1
