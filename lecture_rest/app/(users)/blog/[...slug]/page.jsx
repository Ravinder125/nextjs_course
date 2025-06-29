import React from 'react'

const Blog = async (props) => {
    const { slug } = await props.params
    console.log(slug)
    return (
        <div></div>
    )
}

export default Blog