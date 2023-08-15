import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div>
      <p className='text-center font-bold'> welcome, this is our Home page</p>
     
      <div><Link href='/blog'>Blog</Link></div>
    </div>
  )
}
