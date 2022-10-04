import React from 'react'
import PostsList from '../components/PostsList'
import { useState, useEffect } from 'react'

export interface PostsData {
    userId: number
    id: number
    title: string
    body: string
}


const Posts: React.FC = () => {

const [allPosts, setAllPosts] = useState<PostsData[] | null>(null)  
const [postsNumber, setPostsNumber] = useState<number>(5)
console.log(allPosts)

useEffect(() => {
    const getPosts =async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${postsNumber}`)
        const data: PostsData[] = await response.json()
        setAllPosts(data)
    }
    getPosts()
}, [postsNumber])

const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPostsNumber(+e.target.value)
}

  return (
    <div className='posts__container'>
    <div>
        <label htmlFor="posts">Nombre de publications {postsNumber}</label>
        <input type="range" min={1} max={20} onChange={handleChange} />
        <PostsList allPosts={allPosts}/>
    </div>
    </div>
  )
}

export default Posts