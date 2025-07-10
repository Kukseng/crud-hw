
import FetchCar from '@/lib/api'
import React from 'react'
import DisplayProductComponent from "@/components/Display";
import {CreateCarType} from "../../lib/types";

const ProductPage = async () => {
    const  data:CreateCarType[] = await FetchCar()
    console.log(data)
    return (
        <div>
            {/* <SWRComponent/> */}
            <DisplayProductComponent tagline={'Latest Updates'} heading={'New Comming'} description={'Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.'} buttonText={'View all cars'} buttonUrl={''} posts={data}/>
        </div>
    )
}

export default ProductPage
