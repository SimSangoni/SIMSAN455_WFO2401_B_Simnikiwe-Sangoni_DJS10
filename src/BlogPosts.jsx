import React, { useEffect, useState } from "react"

export default function BlogPosts() {

    const [posts, setPosts] = useState([])

    async function fetchPosts(){
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            setPosts(data)
            console.log(data[0])
        } catch (err) {

        }
    }

    useEffect(()=> {fetchPosts()}, [])

    const postElements = posts.map((post)=> {
        <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
        
    })


  return (
    <div>
      {postElements}
    </div>
  )
}



 