import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>
    <footer className=' bg-black text-gray-400 py-12 grid md:grid-cols-4 gap-5 m-5  place-content-center sm:grid-cols-2 sm:gap-5 sm:space-x-0'>
        <div className="" >
            <h1 className='text-white text-lg font-semibold mb-4'>About Us</h1>
            <p className='max-w-sm mb-4' >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Ipsum porro delectus blanditiis eum reiciendis similique 
                 ab aspernatu.</p>
        </div>
        <div className='w-[150px]'>
        <h1 className='text-white text-lg font-semibold mb-4'>Quick Links</h1>
        <Link href={"/"}><p>Home </p></Link>
        <Link href={"/"}><p>Our Courses</p></Link>
        <Link href={"/"}><p>About </p></Link>
        <Link href={"/"}><p>Categories </p></Link>
        </div>
        <div>
            <h1 className='text-white text-lg font-semibold mb-4'>Follow Us</h1>
            <div className='flex flex-wrap md:justify-between space-x-4 sm:space-x-0' >
            <Link className="hover:text-white transition-colors duration-300" href={"/"} ><span>FaceBook</span></Link>
            <Link className="hover:text-white transition-colors duration-300" href={"/"} ><span>Instagram</span></Link>
            <Link className="hover:text-white transition-colors duration-300" href={"/"} ><span>Twitter</span></Link>   
            </div>
        </div>
        <div>
            <h1 className='text-white text-lg font-semibold mb-4'>Contact Us</h1>
          
            <p>Shah Faisal Colony, Block 2</p>
            <p>Email: mohammthegreat@gmail.com</p>
            <p>Phone: +92 3125321226</p>
            </div>
       
    </footer>
        <p className='mx-auto text-center mt-2 text-gray-400 mb-10'>&#169;2024 Music School. All rights reserved</p>
    </>
  )
}

export default Footer
