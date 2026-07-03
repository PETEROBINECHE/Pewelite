import React from 'react'
import { TbCurrencyNaira } from 'react-icons/tb';
import { useParams } from 'react-router-dom';

const pawadoption = [
    {id: "DG-83dj4r", PerentBreedMom: "parlor dog", PerentBreedDad: "parlor dog", gender: "M", Name: "jac jac", btn: "I Like", Breed: "Parlor dog", Price: "₦400,000.00", PawBehaviour: "clam", Healthy: "98%", Weight: "30pound", Height: "1meter", Length: "1feet", adoptionimage: "", type: "dog", },
    {id: "CT-83d02r", PerentBreedMom: "parlor dog", PerentBreedDad: "parlor dog", gender: "M", Name: "jac jac", btn: "I Like", Breed: "Parlor dog", Price: "₦300,000.00", PawBehaviour: "clam", Healthy: "98%", Weight: "3pound", Height: "1meter", Length: "1feet", adoptionimage: "", type: "cat",},
    {id: "CT-l3dj4r", PerentBreedMom: "parlor dog", PerentBreedDad: "parlor dog", gender: "F", Name: "jac jac", btn: "I Like", Breed: "Parlor dog", Price: "₦40,000.00", PawBehaviour: "clam", Healthy: "98%", Weight: "20pound", Height: "1meter", Length: "1feet", adoptionimage: "", type: "cat"},
    {id: "DG-83djxx", PerentBreedMom: "parlor dog", PerentBreedDad: "parlor dog", gender: "M", Name: "jac jac", btn: "I Like", Breed: "bowrbo dog", Price: "₦800,000.00", PawBehaviour: "Aggressive", Healthy: "98%", Weight: "13pound", Height: "1meter", Length: "1feet", adoptionimage: "", type: "dog",},
    {id: "BD-ppsj4r", PerentBreedMom: "parlor dog", PerentBreedDad: "parlor dog", gender: "M", Name: "jac jac", btn: "I Like", Breed: "Parlor dog", Price: "₦120,000.00", PawBehaviour: "clam", Healthy: "98%", Weight: "8pound", Height: "1meter", Length: "1feet", adoptionimage: "", type: "brid"},
    {id: "RT-dime43", PerentBreedMom: "parlor dog", PerentBreedDad: "parlor dog", gender: "F", Name: "jac jac", btn: "I Like", Breed: "Parlor dog", Price: "₦200,000.00", PawBehaviour: "clam", Healthy: "98%", Weight: "200pound", Height: "1meter", Length: "1feet", adoptionimage: "", type: "Rabbit"},
    {id: "BD-0943ik", PerentBreedMom: "parlor dog", PerentBreedDad: "parlor dog", gender: "M", Name: "jac jac", btn: "I Like", Breed: "Parlor dog", Price: "₦353,000.00", PawBehaviour: "clam", Healthy: "98%", Weight: "40pound", Height: "1meter", Length: "1feet", adoptionimage: "", type: "brid"},
    {id: "CT-8vrj4r", PerentBreedMom: "parlor dog", PerentBreedDad: "parlor dog", gender: "F", Name: "jac jac", btn: "I Like", Breed: "House cat", Price: "₦60,000.00", PawBehaviour: "clam", Healthy: "98%", Weight: "30pound", Height: "1meter", Length: "1feet", adoptionimage: "", type: "cat",},
    {id: "DG-83ddde", PerentBreedMom: "parlor dog", PerentBreedDad: "parlor dog", gender: "M", Name: "jac jac", btn: "I Like", Breed: "Parlor dog", Price: "₦180,000.00", PawBehaviour: "clam", Healthy: "98%", Weight: "55pound", Height: "1meter", Length: "1feet", adoptionimage: "", type: "dog"},
    {id: "DG-83diop", PerentBreedMom: "parlor dog", PerentBreedDad: "parlor dog", gender: "M", Name: "jac jac", btn: "I Like", Breed: "Parlor dog", Price: "₦210,000.00", PawBehaviour: "clam", Healthy: "98%", Weight: "60pound", Height: "1meter", Length: "1feet", adoptionimage: "", type: "dog",},
    {id: "CT-3esj4r", PerentBreedMom: "parlor dog", PerentBreedDad: "parlor dog", gender: "F", Name: "jac jac", btn: "I Like", Breed: "Loddom breed", Price: "₦290,000.00", PawBehaviour: "clam", Healthy: "98%", Weight: "70pound", Height: "1meter", Length: "1feet", adoptionimage: "", type: "cat"},
]

function Prouctdelits() {

    const { id } = useParams();

    const singleProduct = pawadoption.find(adop => adop.id === id)

    if (!singleProduct) {
        return<h1>Loading...</h1>
    }

  return (
    <>
      <div className='bg-gray-400 w-full h-screen flex items-center justify-center fixed top-0 z-999'>
          <div className='bg-gray-100 w-250 h-130 relative p-2 flex items-center justify-center rounded-2xl'>
            <span className='p-3 bg-[#252839] rounded text-[#F2B632] absolute right-3 top-3 cursor-pointer hover:bg-red-600 hover:text-white' onClick={()=> setPawadoptionmodel(false)}>
              X
            </span>

            <div className='w-220 h-120 bg-amber-400 p-5 flex gap-8 items-center justify-center rounded-2xl'>
              <div className='w-70 h-100 bg-green-500 flex flex-col justify-between'>
                <div className='w-70 h-80 bg-blue-500 rounded-xl'>
                  <img src="" 
                  alt="DisplayProduct" 
                  className='rounded-xl'
                  />
                </div>
                <div className='w-70 h-15 bg-pink-500'>
                    <div className='flex flex-row gap-4 items-center p-3'  >
                    <span>Num of Paw Available</span>
                  
                    <div className='flex flex-row gap-2 border w-20 items-center justify-center rounded px-2'>
                        <span className='text-2xl'>4</span>
                    </div>
                  </div>

                </div>
              </div>
              
              <div className='w-120 h-110 bg-red-500 rounded-xl p-2.5 gap-6 flex flex-col text-[#252839]'>
                <div className='w-115 h-50 bg-white flex flex-col p-2 gap-2 text-[#252839]'>
                <span className='font-semibold font-mono'> Name: <span className='font-normal'>jac jac</span></span>

                <div className='flex flex-row justify-between'>
                    <span className='font-semibold font-mono'>Age: <span className='font-normal'>3 months</span></span>
                    <span className='font-semibold font-mono'>Paw Breed: <span className='font-normal'>parlor dog</span></span>
                </div>

                {/* <div className='flex flex-row flex-wrap justify-between'> */}
                <div className='grid grid-cols-2 gap-1'>
                    <span className='font-semibold font-mono'>Height: <span className='font-normal'>1M</span></span>
                    <span className='font-semibold font-mono flex justify-end gap-1'>Length: <span className='font-normal'>1M</span></span>
                    <span className='font-semibold font-mono'>Weight: <span className='font-normal'>30pound</span></span>
                    <span className='font-semibold font-mono flex justify-end gap-1'>Healthy: <span className='font-normal'>98%</span></span>
                </div>

                <div className='grid grid-cols-2 gap-1'> 
                    <p className='font-semibold font-mono w-80'>Paw Behaviour: <span className='font-normal'>Aggressive</span></p>
                    <p className='font-semibold font-mono flex justify-end gap-1'>Gender: <span className='font-normal'>M</span></p>
                </div>

                <div className='grid grid-cols-2 gap-1'>
                    <p className='font-semibold font-mono '>Dad Breed: <span className='font-normal'>parlor dog</span></p>
                    <p className='font-semibold font-mono flex justify-end gap-1'>Mom Breed: <span className='font-normal'>parlor dog</span></p>
                </div>
            </div>
                <div className='grid grid-cols-3 gap-1'>

                  <div className='flex flex-col gap-1' >
                    <span>Num of paw</span>
                  
                    <div className='flex flex-row gap-4 border w-25 items-center justify-center rounded px-2'>
                        <span className='text-2xl cursor-pointer font-bold'>+</span>
                        <span className='text-2xl'>1</span>
                        <span className='text-2xl cursor-pointer font-bold'>-</span>
                    </div>
                  </div>

                  

                  <div className='flex flex-col gap-1.5 items-center'>
                    <p className='text-[#252839] textflex flex-col gap-1 font-medium '>Price per one</p>
                    <span className='flex flex-row items-center text-base '><TbCurrencyNaira className='text-[#222222] text-xl font-nomal' />{singleProduct.Price}</span>
                  </div>

                  <div className='flex flex-col gap-1.5  items-end'>
                    <p className='text-[#252839] text-xl font-medium'>Total Price:</p>
                    <span className='flex flex-row items-center text-base '><TbCurrencyNaira className='text-[#222222] text-xl font-nomal' />400000</span>
                  </div>
                </div>

                <div className=' flex flex-col gap-4'>
                   <button className='px-3 py-2 rounded cursor-pointer bg-[#252839] text-[#F2B632]  hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'> Add to Order</button>
                  <button className='px-3 py-2 rounded cursor-pointer bg-[#252839] text-[#F2B632]  hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]' > Proceed to Payment</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Prouctdelits
