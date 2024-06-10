import React, { useEffect, useState } from "react"

export default function BlogPosts() {

    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null);

    async function fetchPosts(){
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!res.ok){
                throw new Error('Error 404')
            }
            const data = await res.json();
            setPosts(data)
        } catch (err) {
            setError('Data fetching failed')

        }
    }

    useEffect(()=> {fetchPosts()}, [])

    const postElements = posts.map((post, index)=> (
        <div key={post.id}>
            <h2 className="post-title">{`${index + 1}. ${post.title}`}</h2>
            <p className="post-body">{post.body}</p>
        </div>
        )  
    )


  return (
    <div className="posts-container">
     
        {postElements}
        
    </div>
  )
}



 