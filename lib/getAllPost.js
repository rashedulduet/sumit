import React from 'react'

export default async function getAllPost() {

      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
        next:{
          revalidate:600
        },
      });
    //এখানে লিমিট 5 অর্থ হলো ‍এপিআই এ অনেক পোষ্ট হইতে 5 টি স্টাটিক হবে বা আগে থেকেই সারভার এ লোড থাকবে বাকি সারভারে
    // রিকোয়েস্ট পাঠানো হলো তা লোড হয়ে ইউজার কে দেখাবে অর্থাৎ ডাইনামিক হবে।
    // revalidate করলে ডাটা 600 ‍সেকেন্ট পর পর ডাইনামিক ভাবে আপডেট হয়ে স্টাটিক ভাবে সো করানোর জন্য তলা দিয়ে তৈরি থাকবে।

      if(!res.ok){
        throw new Error('Error fetching posts')
      }
      return res.json();   
    //   এখানে একটি প্রমিস রিটার্ন করবে যা যেকোন পেইজ এ ইমপোট করে দেখানো যাবে এবং এই প্রমিস সার্ভারে থাকে।
  
}
