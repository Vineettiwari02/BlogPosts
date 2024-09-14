import React from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/config';

export const PostCard = ({post, toggle, setToggle}) => {
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  async function handelDelete(){
     const document = doc(db,"posts",post.id  )
      await deleteDoc(document) ;
      setToggle(!toggle);

  }
  return (
    <div className="card">
    <p className="title">{post.title}</p>
    <p className="description">{post.description}</p>
    <p className="control">
        <span className="author">{post.author.name}</span>
        {
          isAuth && (post.author.id === auth.currentUser.uid) && (<span onClick={handelDelete}  className="delete"><i className="bi bi-trash3"></i></span> )
        }
        
    </p>
</div>
  )
}
