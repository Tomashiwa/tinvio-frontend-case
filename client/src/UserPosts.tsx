import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Card, CardSubtitle, CardTitle } from 'reactstrap';
import { Post } from './Types'

import './UserPosts.css'

const URL_USER_POSTS = "https://jsonplaceholder.typicode.com/posts?userId=";

type Props = {
    id: number,
    name: String
};

export default function UserPosts(props : Props) {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        axios.get(`${URL_USER_POSTS}${props.id}`)
            .then(results => {
                setPosts(results.data);
            })
    }, [props.id])

    return (
        <div className="posts">
            <Card>
                <CardTitle tag="h2">{`${props.name.split(" ")[0]}'s Posts`}</CardTitle>
                <CardSubtitle>{`${posts.length} POSTS`}</CardSubtitle>
                <div className="post-preview">
                    {
                        posts.map(post => {
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
