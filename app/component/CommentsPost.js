import React from 'react'

export default async function CommentsPost({commentsPromise}) {
    const comments=await commentsPromise;
  return (
    <div>
      <div className='pt-3'>
        
        {comments.map((comment)=>
            <p key={comment.id}>post by: {comment.email}<br/>{comment.body}</p> // এখানে সাকল কমেন্ট ‍ আসবে
        )} 
            
      </div>
    </div>
  )
}
