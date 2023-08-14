import React from 'react'

export default async function getAllPost() {

      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    //এখানে লিমিট 5 অর্থ হলো ‍এপিআই এ অনেক পোষ্ট হইতে 5 টি স্টাটিক হবে বা আগে থেকেই সারভার এ লোড থাকবে বাকি সারভারে
    // রিকোয়েস্ট পাঠানো হলো তা লোড হয়ে ইউজার কে দেখাবে অর্থাৎ ডাইনামিক হবে।

      if(!res.ok){
        throw new Error('Error fetching posts')
      }
      return res.json();   
    //   এখানে একটি প্রমিস রিটার্ন করবে যা যেকোন পেইজ এ ইমপোট করে দেখানো যাবে এবং এই প্রমিস সার্ভারে থাকে।
  
}
