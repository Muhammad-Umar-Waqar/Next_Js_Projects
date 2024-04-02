"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
 import movingCardsData from '../data/movingCardsData.json'

function Moving_cards() {

  interface MovingCard {
    quote: string;
    name: string;
    title: string;
  }
  
  const testimonial: MovingCard[] = movingCardsData.featuredCourses.map(course => ({
    quote: course.description,
    name: course.name,
    title: course.instructor,
  }));
  

    return (
      <div className="h-[40rem]  rounded-md flex flex-col  antialiased bg-white dark:bg-black dark:bg-grid-white/[0.2] items-center justify-center relative overflow-hidden">
          <h2 className="mt-2 text-3xl absolute top-20 leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Hear Our Harmony: Voice of Success</h2>
            <InfiniteMovingCards
              items={testimonial}
              direction="right"
              speed="slow"
              className=""
            />
          </div>
        );
     
      
  }
 
  
export default Moving_cards
