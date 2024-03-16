import { pricing } from "@/data/PricingData"
import check from "@/assets/check.svg"
import Image from "next/image"
import grid from "@/assets/gradient.png"



const Pricing = () => {
  return (
    <div className="">
    <div className="text-center   mb-7 text-2xl sm:text-4xl font-bold  " >
      Get start with{" "}
      <span className=" bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Dhruvacode</span>
        </div>
        <div  id="pricing"className=' mb-[10rem] mx-auto flex w-2/3 gap-5   max-lg:flex-wrap'>
        
        {
          pricing.map((item)=>(
            <div  key={item.id} className='w-[10rem] shadow  shadow-blue-800  even:bg-blue-800 max-lg:w-full h-[43rem] px-6 
             border border-gray-600 rounded-[2rem] mx-auto  lg:w-[35rem] even:py-12 odd:my-4 odd:py-8
               '>
              <h4 className={`${item.id==="0"?" text-red-700":" text-white"} text-2xl
                font-semibold sm:text-4xl`}>{item.title}</h4>
              
               <div className='flex items-center h-[5.5rem] mb-6'>
                  {
                      item.price && (
                          <>
                           {/* <div className='h3'>$</div> */}
                          <div className={`${item.id==="0"?" text-blue-900":" text-white"}  font-semibold text-3xl`}>{item.price}</div>
                          </> 
                      )
                  }
               </div>
                  
               <ul>
                  {item.features.map((feature,index)=>(
                      <li className='flex items-start py-5 border-t ' key={index}>
                        <Image src={check} width={24} alt="" height={24}/>
                          <p className={`${item.id==="0"?" text-blue-900":" text-white"} font-semibold ml-4`}>{feature}</p>
                      </li>
                  ))}
               </ul>
              
            </div>
          ))
        }

  </div>
    </div>
   
  )
}

export default Pricing