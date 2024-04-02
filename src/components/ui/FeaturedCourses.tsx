"use client"

import React from 'react'
import PersonData from '@/data/music_courses.json'
import Link from 'next/link'
import { BackgroundGradient } from './background-gradient';

interface User {
    images: string,
        id: number;
        name: string;
        email: string;
        age: number;
        isFeatured: boolean;
}


function FeaturedCourses() {
    const FeaturedUsers = PersonData.users.filter((users:User)=> users.isFeatured === true)
  return (
    <div className='bg-gray-900 py-12'>
        <div>
            <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
            </div>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-10 p-10' >
            {FeaturedUsers.map((user: User)=>(
                <div key={user.id} >
                    <BackgroundGradient className="rounded-[22px]  p-4 sm:p-10 bg-white dark:bg-zinc-900 ">
                    
                        <img 
                        src={"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        height="400"
                        width="400"
                        className="object-contain" />
                       
                       <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {user.name}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{user.email}</p>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span className=''>{user.email} </span>
                  </button>
                        </BackgroundGradient>
                </div>
            ))}
        </div>
        <div className="mt-20 text-center">
         <Link href={"/courses"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">View All Courses</Link>
        </div>
    </div>
  )
}

export default FeaturedCourses
