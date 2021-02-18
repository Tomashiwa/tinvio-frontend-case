import { useState, useEffect } from 'react'
import { Post } from './Types'

import axios from 'axios';
import { Card, CardBody, CardSubtitle, CardTitle, Spinner } from 'reactstrap';

import './css/UserPosts.css'

const URL_USER_POSTS = "https://jsonplaceholder.typicode.com/posts?userId=";

type Props = {
    id: number,
    name: String
};

export default function UserPosts(props : Props) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState<Boolean>(false);

    const resetPreviewScroll = () => {
        let previewElement : HTMLCollectionOf<Element> = document.getElementsByClassName("post-preview");
        previewElement.item(0)!.scrollTop = 0;
    }

    useEffect(() => {
        setIsLoading(true);

        axios.get(`${URL_USER_POSTS}${props.id}`)
            .then(results => {
                let newPosts = results.data.map((post: Post) => {
                    return {
                        ...post,
                        title: post.title.charAt(0).toUpperCase() + post.title.substr(1)
                    }
                })

                setIsLoading(false);
                setPosts(newPosts);
                resetPreviewScroll();
            })
    }, [props.id])

    return (
        <div className="posts">
            <Card className="posts-card">
                <CardBody>
                    <CardTitle tag="h4">{`${props.name.split(" ")[0]}'s Posts`}</CardTitle>
                    {
                        isLoading
                        ? <div className="spinner-area">
                                <Spinner color="secondary"/>
                            </div>
                            : <>
                                <CardSubtitle>{`${posts.length} POSTS`}</CardSubtitle>
                                <div className="post-preview">
                                    {
                                        posts.map(post => {
                                            return <Card key={post.id} className="posts-entry-card">
                                                <CardTitle tag="div" className="post-title">{post.title}</CardTitle>
                                                <CardSubtitle>{post.body}</CardSubtitle>
                                            </Card>
                                        })
                                    }
                                </div>
                            </>
                            
                    }
                </CardBody>
            </Card>
        </div>
    )
}
