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

    // const postElements = 


  return (
    <>
      
      <h1>This is the BlogPosts Page</h1>
      
    </>
  )
}

// {
//     userId: 1, 
//     id: 1, 
//     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 
//     body: 'quia et suscipit\nsuscipit recusandae consequuntur 
//     …strum rerum est autem sunt rem eveniet architecto'
// }

 