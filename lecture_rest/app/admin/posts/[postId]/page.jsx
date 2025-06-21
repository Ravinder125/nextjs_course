"use client"

import { useParams } from "next/navigation"

const PostId = () => {
    const params = useParams();
    const id = params.postId
    return (
        <div>PostId : {id}</div>
    )
}

export default PostId