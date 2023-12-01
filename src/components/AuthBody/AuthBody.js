import Post from '../Post/Post'
import { useState, useEffect } from 'react'
import styles from "../AuthBody/AuthBody.module.scss"

export default function AuthBody() {
  const [posts, setPosts] = useState(null)
  const getPosts = async () => {
    try {
      const response = await fetch(`/api/posts`)
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getPosts()
  }, [])


  return (
    <div className={styles.postList}>
      <h1>Post List</h1>
      {posts ? posts.map((post) => {
        return <Post key={post._id} post={post} />;
      }) : "Nothing here"}
    </div>
  );
}




