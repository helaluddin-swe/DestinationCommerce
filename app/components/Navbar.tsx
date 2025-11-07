import Link from 'next/link'
import {Bell, Home, Search, ShoppingCart} from "lucide-react"

const Navbar = () => {
  return (
    <div className='bg-gray-200 flex justify-between  gap-5 items-center px-6 py-2'>
      <div className='text-xl md:text-3xl'>DestinationCommerce</div>
      <div className=' hidden md:flex relative items-center'><Search size={24} className='absolute items-center justify-center ml-24'/><input type="text" id='search' placeholder='Search...' className='px-4 py-2  border border-gray-400 rounded-xl shadow-2xl shadow-gray-300'/></div>
      <div className='flex gap-4 items-center'>
      <Link href="/"><Home/></Link>  
        <Bell/>
        <ShoppingCart/>
        <Link href="/">
        SignIn
      </Link>
      </div>
    </div>
  )
}

export default Navbar
