"use client"

import { useParams } from "next/navigation"

const PostId = () => {
    const params = useParams();
    console.log(params)
    const { postId, username } = params
    return (
        <div>Post id : {postId} {" "} Username : {username}</div>
    )
}

export default PostId