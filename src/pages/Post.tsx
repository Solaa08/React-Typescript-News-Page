import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { PostsData } from '../interfaces/postData';
import PostDetail from '../components/PostDetail';
import './post.css'

type PostParams = {
  id: string
}

const Post = () => {

  const { id } = useParams<PostParams>()
  const [onePost, setOnePost] = useState<PostsData | null>(null)

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const data: PostsData = await response.json()
      setOnePost(data)
  }
  getPost()
  }, [id])
  
  return (
    <div className='post__wrap'>
    <div className='post__container'>
        <h1>Détail de la publication</h1>
        <PostDetail onePost={onePost}/>
        <Link style={{ textDecoration: 'none', fontSize: 'x-large'}} to="/">Page d'accueil</Link>
    </div>
    </div>
  )
}

export default Post