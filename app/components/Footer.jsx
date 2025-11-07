import Link from "next/link"


const Footer = () => {
  return (
    <div className="bg-gray-500 flex flex-col items-center md:flex-row  text-sm md:items-start gap-8 py-4 justify-between px-8 ">
        <div className="flex flex-col items-center md:items-start gap-3 justify-center " > <h3 className="text-2xl md:4xl">DestinationCommerce</h3> <p>Made By DestinationCoder @{new Date().getFullYear()}</p> <p>All Right Reserved</p></div>
        <div className="flex flex-col items-center md:items-start gap-3 justify-center text-gray-300 "><p className="text-white">links</p> 
        <Link href="/">HomePage</Link>
        <Link href="/">Contact Us</Link>
        <Link href="/">Privacy policy</Link>
        <Link href="/">Product policy</Link>
        
        </div>
          <div className="flex flex-col items-center md:items-start gap-3 justify-center text-gray-400  "><p className="text-white"> Products</p> 
        <Link href="/">All Products</Link>
        <Link href="/">New Arrival </Link>
        <Link href="/">Best Seller</Link>
        <Link href="/">Sale</Link>
       
        </div>
          <div className="flex flex-col items-center md:items-start gap-3 justify-center text-gray-400 "><p className="text-white">links</p> 
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Affiliate Program</Link>
        
        </div>
      
    </div>
  )
}

export default Footer
