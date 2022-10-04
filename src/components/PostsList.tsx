import React from 'react'
import { PostsData } from '../interfaces/postData'
import {useNavigate} from 'react-router-dom'
import 'postsList.css'

interface PostsListProps {
    allPosts : PostsData[] | null
}

const PostsList: React.FC<PostsListProps> = ({ allPosts }) => {
    
    const navigate = useNavigate


  return (
    <div>
        <ul className='Posts'>
            {allPosts?.map(post => (
                <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>Lire l'article</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PostsList