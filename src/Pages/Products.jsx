import React from 'react'
import { TbCurrencyNaira } from 'react-icons/tb'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { button, div, span } from 'framer-motion/client';
import { ChevronLeft, ShoppingBag, Smartphone, MapPin, ChevronDown } from "lucide-react";


const categories = ["Supplement", "Body Care", "Accessories", "Food", "All Product"];

  const allProduct = [
    {id: "sp-ejdg37", productImage: "", productName: "", productPrice: "15, 000.00", bestSelling: "Best Selling", buyNow: "Get Now", productCategories: "", productType: "", numavalible: "", productdis: "",  },
    {id: "SP-di30uf", productImage: "", productName: "", productPrice: "11, 500.00", bestSelling: "Best Selling", buyNow: "Get Now", productCategories: "", productType: "", numavalible: "", productdis: "",  },
    {id: "SP-di3wwf", productImage: "", productName: "", productPrice: "20, 210.00", bestSelling: "Best Selling", buyNow: "Get Now", productCategories: "", productType: "", numavalible: "", productdis: "",  },
    {id: "SP-dii0uf", productImage: "", productName: "", productPrice: "13, 700.00", bestSelling: "Best Selling", buyNow: "Get Now", productCategories: "", productType: "", numavalible: "", productdis: "",  },
    {id: "SP-di9ndf", productImage: "", productName: "", productPrice: "12, 700.00", bestSelling: "Best Selling", buyNow: "Get Now", productCategories: "", productType: "", numavalible: "", productdis: "",  },
    {id: "SP-eo20uf", productImage: "", productName: "", productPrice: "33, 700.00", bestSelling: "Best Selling", buyNow: "Get Now", productCategories: "", productType: "", numavalible: "", productdis: "",  },
    {id: "SP-kit0uf", productImage: "", productName: "", productPrice: "3, 700.00", bestSelling: "Best Selling", buyNow: "Get Now", productCategories: "" , productType: "", numavalible: "", productdis: "", },
    {id: "SP-di3234", productImage: "", productName: "", productPrice: "23, 700.00", bestSelling: "Best Selling", buyNow: "Get Now", productCategories: "", productType: "", numavalible: "", productdis: "",  },
    {id: "SP-diiskf", productImage: "", productName: "", productPrice: "33, 700.00", bestSelling: "Best Selling", buyNow: "Get Now", productCategories: "", productType: "", numavalible: "", productdis: "",  },
    {id: "SP-di311p",  productImage: "", productName: "", productPrice: "6, 000.00", bestSelling: "Best Selling", buyNow: "Get Now", productCategories: "", productType: "", numavalible: "", productdis: "",  },
    {id: "SP-di10oc",  productImage: "", productName: "", productPrice: "30, 000.00", bestSelling: "InStock", buyNow: "Get Now", productCategories: "", productType: "", numavalible: "", productdis: "", },
    {id: "SP-plo0iw",  productImage: "", productName: "", productPrice: "66, 000.00", bestSelling: "InStock", buyNow: "Get Now", productCategories: "", productType: "", numavalible: "", productdis: "", },
    {id: "SP-soi098",  productImage: "", productName: "", productPrice: "55, 000.00", bestSelling: "InStock", buyNow: "Get Now", productCategories: "", productType: "", numavalible: "", productdis: "", },
    {id: "SP-laoidj",  productImage: "", productName: "", productPrice: "3, 000.00", bestSelling: "InStock", buyNow: "Get Now", productCategories: "" , productType: "", numavalible: "", productdis: "", },
    {id: "SP-pleiyt",  productImage: "", productName: "", productPrice: "61, 000.00", bestSelling: "InStock", buyNow: "Get Now", productCategories: "", productType: "", numavalible: "", productdis: "", },
    {id: "SP-di0eop",  productImage: "", productName: "", productPrice: "22, 000.00", bestSelling: "InStock", buyNow: "Get Now", productCategories: "", productType: "", numavalible: "", productdis: "", },
    {id: "SP-plidft",  productImage: "", productName: "", productPrice: "25, 000.00", bestSelling: "InStock", buyNow: "Get Now", productCategories: "", productType: "", numavalible: "", productdis: "", },
    {id: "SP-iyrexn",  productImage: "", productName: "", productPrice: "39, 000.00", bestSelling: "InStock", buyNow: "Get Now", productCategories: "", productType: "", numavalible: "", productdis: "", },
    {id: "SP-mkhsfs",  productImage: "", productName: "", productPrice: "41, 000.00", bestSelling: "InStock", buyNow: "Get Now", productCategories: "", productType: "", numavalible: "", productdis: "", },
    {id: "SP-p09tfu",  productImage: "", productName: "", productPrice: "29, 000.00", bestSelling: "InStock", buyNow: "Get Now", productCategories: "", productType: "", numavalible: "", productdis: "", },
    {id: "SP-piou39",  productImage: "", productName: "", productPrice: "44, 000.00", bestSelling: "InStock", buyNow: "Get Now", productCategories: "", productType: "", numavalible: "", productdis: "", }, 
  ]

function Products() {
  const [inputSearch, setInputSearch] = useState("")
  const [setActive, setSetActive] = useState("All Product");
  const [expanded, setExpanded] = useState(false);
  const [getnowModel, setGetnowModel] = useState(false);

  const handleButtonClick = (cat) => {
    setSetActive(cat);
    setExpanded(false)
  }

  const handleSpanClick = () => {
    if(expanded){
      setSetActive(setActive);
    }
    setExpanded(prev => !prev);
  };


  const navigate = useNavigate();
      
  const { id } = useParams();
  const StoreProduct = allProduct.find(items => items.id === id)
  
  function closeModal() {
    navigate("/product");
  }

  function gotosummary() {
    navigate("/summary1");
  }



  

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
              <button className='w-45 h-10 rounded-xl cursor-pointer bg-[#252839] text-[#F2B632] text-xl hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839] flex items-center justify-center gap-2.5 '>Our Product <ChevronDown className='text-3xl font-bold'/></button>
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

      <section className="w-full h-min bg-red-400">
        <div className='w-full h-20 bg-yellow-400 flex px-2 items-center justify-between'>
          
          <div className='w-max h-14 bg-[#25283958] flex gap-3 justify-center p-2 rounded-r-lg'>
            {
              expanded ? (
                <>
                  {
                  categories.map((cat) => (
                  <button key={cat}
                  onClick={() => handleButtonClick(cat)}
                  className='px-3 py-2 rounded cursor-pointer bg-[#252839] text-[#F2B632]  hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'
                  >
                  {cat}
                  </button>
                  ))
                  }
                </>
              ) : (
                <span className='px-3 py-2 text-[#252839] font-semibold'>
                  {setActive}
                </span>
              )
            }
            
            <span 
            onClick={handleSpanClick}
            className='px-3 py-2 cursor-pointer text-[#252839] font-bold select-none'
            >
              {expanded ? (<div className='text-[#252839] hover:text-red-600'>X</div>) : (<div className='text-[#252839]'>☰</div>)}
            </span>
          </div>

          <div className='w-120 h-14 flex items-center justify-end px-2' >
            <div className='rounded-l-lg w-max h-10 bg-[#25283958] '>
              <input type="text" 
              placeholder='Search eg: catfood, dog supplement'
              value={inputSearch}
              onChange={(e)=> setInputSearch(e.target.value) }
              className='w-70 h-10 items-center p-2 rounded-l-lg text-[#252839] outline-0'
              />
            </div>
          </div>
        </div>

        <div className='w-full h-min bg-green-400 px-10 py-2 flex flex-wrap gap-x-5 gap-y-3'>
          {
            allProduct.map((items) => ( 
              <div key={items} className='w-70 h-95 bg-pink-400 flex flex-col gap-5'>
            <div className='w-70 h-60 bg-blue-400 relative p-2'>
              <img src="" 
              alt="" 
              />
              <span className='absolute rounded-r-lg bg-white flex items-center p-1.5'>
                <p className='font-inter text-red-500'>{items.bestSelling}</p>
              </span>
            </div>

            <div className='w-70 h-30 bg-white p-2 flex flex-col gap-7'>
              <span className='w-70 h-8'>
                Alex Food "Calcuim Feed"
              </span>
              <span className='w-70 h-12 flex flex-row items-center justify-ce'>
                <p className='text-red-500 text-m font-semibold'>Price:</p>
                <span className='flex flex-row items-center text-base '><TbCurrencyNaira className='text-[#222222] text-xl font-nomal' />{items.productPrice}</span>
                <div className='ml-10'>
                <Link to={`/prolist/${items.id}`} >
                <button className='px-3 py-2 rounded cursor-pointer bg-[#252839] text-[#F2B632]  hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'>
                {items.buyNow}
                </button>
                </Link>
              </div>
              </span>
              
            </div>
          </div>
            ))
          }
        </div>
      </section>

      {
        StoreProduct && (
          <div onClick={closeModal} className='bg-gray-400 w-full h-screen flex items-center justify-center fixed top-0 z-999'>
          <div onClick={(e) => e.stopPropagation()} className='bg-gray-100 w-250 h-130 relative p-2 flex items-center justify-center rounded-2xl'>
            <span className='p-3 bg-[#252839] rounded text-[#F2B632] absolute right-3 top-3 cursor-pointer' onClick={closeModal}>
              X
            </span>

            <div className='w-200 h-120 bg-amber-400 p-5 flex gap-14 items-center justify-center rounded-2xl'>
              <div className='w-70 h-100 bg-green-500 flex flex-col justify-between'>
                <div className='w-70 h-80 bg-blue-500 rounded-xl'>
                  <img src="" 
                  alt="DisplayProduct" 
                  className='rounded-xl'
                  />
                </div>
                <div className='w-70 h-15 bg-pink-500'>
                    <div className='flex flex-row gap-4 items-center p-3'  >
                    <span>Number Available</span>
                  
                    <div className='flex flex-row gap-2 border w-20 items-center justify-center rounded px-2'>
                        <span className='text-2xl'>4</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className='w-90 h-100 bg-red-500 rounded-xl p-2.5 gap-4 flex flex-col text-[#252839]'>
                <div className='flex flex-col gap-2'> 
                  <h2 className='font-Poppins text-2xl text-[#252839] font-semibold'>Alex Food "Calcuim Feed" </h2>
                  <p className='font-Poppins font-normal '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempora? Voluptatibus repellat at recusandae illum, minus quae architecto.</p>
                </div>
                <div className='flex flex-row gap-3'>

                  <div className='flex flex-col gap-1' >
                    <span>Number of Items</span>
                  
                  <div className='flex flex-row gap-4 border w-25 items-center justify-center rounded px-2'>
                    <span className='text-2xl cursor-pointer'>+</span>
                    <span className='text-2xl'>1</span>
                    <span className='text-2xl cursor-pointer'>-</span>
                  </div>
                  </div>

                  <div className='flex flex-col gap-1.5 w-50 items-end'>
                    <p className='text-[#252839] textflex flex-col gap-1 font-medium '>Price per one</p>
                    <span className='flex flex-row items-center text-base '><TbCurrencyNaira className='text-[#222222] text-xl font-nomal' />{StoreProduct.productPrice}</span>

                    <p className='text-[#252839] text-xl font-medium'>Total Price:</p>
                    <span className='flex flex-row items-center text-base '><TbCurrencyNaira className='text-[#222222] text-xl font-nomal' />400000</span>
                  </div>
                </div>
                <div className=' flex flex-col gap-2'>
                  <button className='px-3 py-2 rounded cursor-pointer bg-[#252839] text-[#F2B632]  hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]' onClick={()=> navigate(-1)}> Add to Order</button>
                  <Link to={`/summary1`} className='px-3 py-2 flex justify-center rounded cursor-pointer bg-[#252839] text-[#F2B632]  hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'>
                   Proceed to Payment
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </div>
        )
      }

    </div>
  )
}

export default Products
