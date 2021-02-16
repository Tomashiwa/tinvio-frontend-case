import React, { useEffect } from 'react'
import { Card, CardSubtitle, CardTitle } from 'reactstrap';
import { Post } from './Types'

import './UserPosts.css'

type Props = {
    name: String,
    posts: Post[]
};

export default function UserPosts(props : Props) {
    useEffect(() => {
        console.log("posts updated");
    }, [props.posts])

    return (
        <div className="posts">
            <Card>
                <CardTitle tag="h2">{`${props.name.split(" ")[0]}'s Posts`}</CardTitle>
                <CardSubtitle>{`${props.posts.length} POSTS`}</CardSubtitle>
                <div className="post-preview">
                    {
                        props.posts.map(post => {
                            return <Card key={post.id}>
                                <CardTitle tag="h4">{post.title}</CardTitle>
                                <CardSubtitle>{post.body}</CardSubtitle>
                            </Card>
                        })
                    }
                </div>
            </Card>
        </div>
    )
}
