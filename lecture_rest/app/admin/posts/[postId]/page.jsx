"use client"

import { useParams, useRouter } from "next/navigation"

const PostId = () => {
    const params = useParams();
    const router = useRouter()
    console.log(router)
    console.log(params)
    const id = params.postId
    return (
        <div>PostId : {id}</div>
    )
}

export default PostId