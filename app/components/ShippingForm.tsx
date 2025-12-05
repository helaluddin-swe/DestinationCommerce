import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const ShippingForm = () => {
    const router=useRouter()
  return (
    <div>
         <div> 
              <h2 className="text-center text-2xl font-bold mb-10">
                 Shipping Details</h2>
                 <form  className="flex flex-col  gap-5">
                  <label > Name: <input type="text" className="border border-gray-300 rounded-2xl w-[90%]"/></label>
                   <label > Phone: <input type="mobile" className="border border-gray-300 rounded-2xl w-[80%]"/></label>
                    <label > Home Address: <input type="text" className="border border-gray-300 rounded-2xl w-[70%]"/></label>
                     <label > Location: <input type="text" className="border border-gray-300 rounded-2xl w-[70%]"/></label>
                 </form>
            <button
              className="bg-blue-400 rounded-2xl p-2 w-full text-white flex justify-center gap-4 hover:bg-blue-600 cursor-pointer mt-10"
              onClick={() => router.push("/Cart?steps=3")}
            >
              Continue <ArrowRight />
            </button></div>
      
    </div>
  )
}

export default ShippingForm
