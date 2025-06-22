
// searchParams (Server)
// const Products = async ({ searchParams }) => {
//     const { category = "all", sort, page = 1 } = await searchParams;

//     return (
//         <>
//             <div>category: {category}</div>
//             <div>sort: {sort}</div>
//             <div>page: {page}</div>
//         </>
//     )
// }

// export default Products



// useSearchParams (Client)
"use client"

import { useSearchParams } from "next/navigation"
import { use } from "react"

const Products = ({ searchParams }) => {
    // const searchParams = useSearchParams();
    // const categories = searchParams.getAll("category")
    // console.log(categories)
    // const page = searchParams.get("page")
    // const sort = searchParams.get("sort")

    // React.use with searchParams
    const searchParam = use(searchParams)
    const category = searchParam.category
    const page = searchParam.page
    const sort = searchParam.sort
    return (
        <>
            <div>category: {category}</div>
            <div>sort: {sort}</div>
            <div>page: {page}</div>
        </>
    )
}

export default Products