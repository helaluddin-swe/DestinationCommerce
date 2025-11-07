import { useEffect, useState } from "react"
import { categoryData, CategoryType } from "../utils/categoryData"
import { usePathname, useRouter, useSearchParams } from "next/navigation"



const Category = () => {
    const [categories,setCategories]=useState <CategoryType[] >([])
    const searchParams=useSearchParams()
    const router=useRouter()
    const pathName=usePathname()
   
    const selectedCategory=searchParams.get("category")
    const handleChange=(val:string|null)=>{
         const params=new URLSearchParams(searchParams)
        params.set("category",val || "all")
        router.push(`${pathName}?${params.toString()}`,{scroll:false})
    }
    useEffect(()=>{
        const fetchCategory=()=>{ 
        setCategories(categoryData)}
        fetchCategory()
    },[])
  return (
    <div className="grid grid-cols-2  sm:grid-cols-3  px-2 py-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 bg-gray-100 border ">
        {categories.map((category)=>(
            <div key={category.name} className={`flex px-2 py-2 rounded-lg ${category.slug===selectedCategory?"bg-gray-700 text-white ":" text-gray-900"} gap-3 justify-center hover:bg-gray-700 hover:text-white cursor-pointer border  border-gray-300 text-center items-center`} onClick={()=>handleChange(category.slug)}>
                <category.icon className="  text-blue-500 "/>
                {category.name}
            </div>
        ))}
      
    </div>
  )
}

export default Category
