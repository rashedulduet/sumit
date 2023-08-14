import React from 'react'
import getSinglePost from '@/lib/getSinglePost'
import getAllPost from '@/lib/getAllPost'

export default async function page({params}) {
    // এখানে প্যারামস দিয়ে ইউআরএল টোটাল ডাটা আনা হয়েছে যা পরবর্তীতে এই ডাটা হইতে নির্দিষ্ট কিছু ধরে কাজ করা হইবে।
    const id=params.id
    // এখানে প্যারাম হইতে আইডি ধরা হয়েছে।
    const singlePost= await getSinglePost(id)
    // এখানে গেটসিংগেলপোষ্ট এ আইডি ডুকিয়ে দেওয়া হয়েছে যাতে সাভার থেকে  এই আইডি যুক্ত পোষ্ট এনে singlePost এ ডিইনামিক ভাবে সংরক্ষন করা যায়
  return (
    <div>
        <h1 className='text-center mb-3'>{singlePost.title}</h1>
        <p>{singlePost.body}</p>
    </div>
  )
}
// এখানে ডাটা সাভার থেকে রান টাইম এ লোড হবে। যা 
// export async function generateStaticParams() {
//     const posts=await getAllPost()
    
//         {
//             posts.map((item)=>{
//                    return( 
//                         {id: ""+ item.id}
//                    )
//             })
//         }
    
//   }
//   