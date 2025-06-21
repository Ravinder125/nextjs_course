'use client'

import { use } from "react"


// Let's do it with React.use
const Post = (props) => {
    const user = use(props.params)
    console.log(user)
    if (!user) return <div>Loading...</div>
    return (
        <div>Post id : {user.postId} {" "} Username : {user.username}</div>
    )
}

export default Post