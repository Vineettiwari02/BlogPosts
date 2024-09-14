import React from 'react';
import { Link } from "react-router-dom";
import imgs from "../assets/images/monsterink.svg"
import { useTitle } from '../hooks/useTitle';
export const PageNotFound = () => {
  useTitle("Page Not Found")
  return (
   <section className="pageNotFound">
    <img src={imgs} alt="logo" />
    <Link to="/">
        <button>Back To Home</button>
      </Link>
   </section>
  )
}
