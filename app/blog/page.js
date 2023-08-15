import getAllPost from '@/lib/getAllPost';
import React from 'react';
import Link from 'next/link';
import products from './products';



export default async function page() {
       const product= await products()
       const posts= await getAllPost()
    // এখানে গেটঅলপোস্ট থেকে ডাটা ফাংশন কল করে আনা হয়েছে যা ইউজার কে দেখানো হবে।
    // এখানে এওয়েট ব্যবহার করা হয়েছে কারন ডাটা আসতে দেরি হতে পারে তাই এটিকে ‍এসিংক্রোনাইজ ফাংশন এ করা হয়েছে।
    console.log(posts)
    return (
        <div>
             <section>
                <div>
                    {product.map((item)=>
                       <p key={item.id}>post by: {item.product_name}<br/>{item.price}</p>
                )}
                </div>
            </section>
            <section>
                <h1 className='font-bold mb-2'>All Post Here</h1>
                <div>
                    {posts.map((item)=>{
                        return(
                            <p key={item.id} className='pb-3'>
                                <Link href={`/blog/${item.id}`}>
                                {item.id}: 
                                {item.title}
                                </Link>                             
                            </p>
                          
                        )
                    })}
                </div>
            </section>
           
        </div>
    );
   
  
}


