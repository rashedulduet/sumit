import React from 'react'

export default async function getSinglePost(id) {
  const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if(!res.ok){
     throw new Error('there is a problem of post')
  }
  return res.json();
  

}
