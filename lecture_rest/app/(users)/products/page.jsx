

const Products = async ({ searchParams }) => {
    const { category = "all", sort, page = 1 } = await searchParams;

    return (
        <>
            <div>category: {category}</div>
            <div>sort: {sort}</div>
            <div>page: {page}</div>
        </>
    )
}

export default Products