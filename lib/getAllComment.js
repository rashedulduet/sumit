import React from 'react'

export default async function getAllComment(id) {
 
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`,{
        cache: 'no-store'
      });
      if(!res.ok){
            throw new Error('problem of comments')
      }
   return res.json();
  
}
