import React, { useEffect } from 'react'

export const useTitle = (title) => {
  useEffect(()=>{
    document.title = `${title}- BlogNote`;
  },[title])
  return (
    <div>useTitle</div>
  )
}
