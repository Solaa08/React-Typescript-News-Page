import React from 'react'
import PostsList from '../components/PostsList'
import { useState, useEffect } from 'react'
import { PostsData } from '../interfaces/postData'
import './posts.css'


const Posts: React.FC = () => {

const [allPosts, setAllPosts] = useState<PostsData[] | null>(null)  
const [postsNumber, setPostsNumber] = useState<number>(5)

const localOrStateFunc = () => localStorage.getItem('number') || postsNumber
const localOrState = localOrStateFunc()

useEffect(() => {
    const getPosts =async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${localOrState}`)
        const data: PostsData[] = await response.json()
        setAllPosts(data)
    }
    getPosts()
}, [localOrState])

const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPostsNumber(+e.target.value)
    localStorage.setItem('number', e.target.value)
}

  return (
    <div className='posts__container'>
        <label htmlFor="posts">Nombre de publications {localOrState}</label>
        <input type="range" min={1} max={20} onChange={handleChange} defaultValue={localOrState} />
    <div>
        <PostsList allPosts={allPosts}/>
    </div>
    </div>
  )
}

export default Posts