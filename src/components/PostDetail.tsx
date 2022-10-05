import React from 'react'
import { PostsData } from '../interfaces/postData'
import './postDetail.css'

interface PostDetailProps {
    onePost: PostsData | null
}

const PostDetail: React.FC<PostDetailProps> = ({onePost}) => {
  return (
    <div className='post'>
      <h1>Publication n°{onePost?.id}</h1>
      <h2>Titre : {onePost?.title}</h2>
      <p>{onePost?.body}</p>
    </div>
  )
}

export default PostDetail