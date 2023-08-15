import React from 'react'
import getSinglePost from '@/lib/getSinglePost'
import getAllPost from '@/lib/getAllPost'
import getAllComment from '@/lib/getAllComment'
import { Suspense } from 'react'
import CommentsPost from '@/app/component/CommentsPost'

export const dynamicParams = false;
export default async function page({params}) {
    // এখানে প্যারামস দিয়ে ইউআরএল টোটাল ডাটা আনা হয়েছে যা পরবর্তীতে এই ডাটা হইতে নির্দিষ্ট কিছু ধরে কাজ করা হইবে।
    const id=params.id
    // এখানে প্যারাম হইতে আইডি ধরা হয়েছে।
    // const singlePost= await getSinglePost(id)
    // এখানে গেটসিংগেলপোষ্ট এ আইডি ডুকিয়ে দেওয়া হয়েছে যাতে সাভার থেকে  এই আইডি যুক্ত পোষ্ট এনে singlePost এ ডিইনামিক ভাবে সংরক্ষন করা যায়
    // const comments=await getAllComment(id)
    //  এখানে নির্দিস্ট আইডি যুক্ত পোস্ট এর সকল কমেন্ট দেখতে এই ‍এপিআই কল করা হয়েছে।
    // উপরের দুটি এপিআই কল async উপায়ে করা হয়েছে বিধায় প্রথমে singlePost ‍আসবে এর পর কিছু সময় পর comments আসবে যদি আমরা দুটি জিনিস ই এক সাথে আনতে চাই তাহলে নিম্ন ভাবে লিখতে হবে।
    const singlePostPromise= getSinglePost(id)
    const commentsPromise= getAllComment(id)
    // const [singlePost,comments]= await Promise.all([singlePostPromise, commentsPromise]);
    // একে প্যারালেল ডাটা ফেসিং বলে। এইভাবে দুটি ফাংশন একসাথে চালু হবে এবং দুটি ফাংশন এর রেজাল্ট এক সাথে আসবে। এর ফলে আউটপুট এক সাথে দেখাবে কিন্তু ২য় টির জন্য ১ম টির রেজাল্ট সো হতে দেরি হবে।
    const singlePost= await singlePostPromise
    // একে ইনক্রিমেন্টাল ডাটা ফেচিং বলে । এখানে যে ডাটা বড় সেটি পরে আসবে এবং বাকি ডাটা গুলো লোড হবে। 
    // ইনক্রিমেন্টাল ডাটা ফেচিং করেলে Suspense ব্যবহার করতে হয় এই ডাটা ফেসিং  ই বেস্ট।
   
    return (
    <div>
        <h1 className='text-center mb-3'>{singlePost.title}</h1>
        <p>{singlePost.body}</p> 
        <Suspense fallback={<p>loading......</p>}>
          <CommentsPost commentsPromise={commentsPromise}/>
        </Suspense>
        
        
        
    </div>
  )
}
// এখানে ডাটা সাভার থেকে রান টাইম এ লোড হবে। যা সময় সাপেক্ষ ব্যাপার কিন্তু এটি স্টাটিক আকারে করা যায় নিম্ন লিখিত ভাবে।
export async function generateStaticParams() { // এই ফাংশান এর মাধ্যমে ‍ডাইনামিক পোষ্টকে সেমি স্টাটিক পোষ্ট এ পরিনত করা যায় 
    const posts=await getAllPost() // এখানে যে কয়টা পোষ্ট আসবে সে কয়টা সার্ভার ক্লিক করার আগেই এনে রাখবে তাই এটি স্টাটিক পেইজ এর মতই হবে কিন্তু এটি প্রকিত পক্ষে ডাইনামিক পেইজ।
    
        {
          return( posts.map((item)=>{
                  
                        {id: ""+ item.id} // এটি String আকারে রিটার্ণ করতে হয় তাই এই ফরমেট এ করা হয়েছে।
          })
            )
        }
}
  
//   এটি একটি ‍array of Object রিটার্ন করে অথাৎ [{id: 1},{id:2}....]