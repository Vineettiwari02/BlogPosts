import React, { useEffect, useState, useRef } from 'react'
import { PostCard  } from '../components/PostCard';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useTitle } from '../hooks/useTitle';
import { SkeletonCard } from '../components';

export const HomePage = () => {
  const [posts,setPosts] = useState(new Array(2).fill(false));
   const [toggle,setToggle] = useState(false)
  const postsRef = useRef(collection(db,"posts"));
  useTitle("Home");
  useEffect(()=>{
    async function getPosts(){
      const data = await getDocs(postsRef.current);
      // console.log(data.docs)
      setPosts(data.docs.map((document)=>({...document.data(), id: document.id})));
    }
    // console.log("---")
  getPosts();
   },[postsRef,toggle] )

  return (
    <section>
      {posts.map((post, index)=>(
        post ? ( <PostCard key={post.id}  post ={post} toggle={toggle} setToggle={setToggle}/>) : (<SkeletonCard key={index}/>)
       
      ))
      }
   
    </section>
  )
}
