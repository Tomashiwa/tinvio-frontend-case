import React from 'react'
import { Post } from './Types'

type Props = {
    posts: Post[]
};

export default function UserPosts(props : Props) {
    return (
        <div>
            <h1>USER POSTS</h1>
        </div>
    )
}
