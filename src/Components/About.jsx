import React from "react";
import thunder from "./images/thunderbolt.png"
import mypic from "./images/mypic.png"
import { AnimationOnScroll } from 'react-animation-on-scroll';
export default function About()
{
    return(
        <>
            <div id="about" className="sm:mt-10  sm:h-screen flex items-center justify-center w-[100%]">
            <div className=" w-[80%]">
            <div className="flex gap-3">
                <img src={thunder} className="h-9 w-8 "/>
                <h2 className=" text-xl sm:text-2xl text-white font-bold">About Me</h2>
            </div>
            <AnimationOnScroll animateIn="scale-up-top">
                <div className=" sm:mt-3 scale-up-top sm:flex sm:justify-between">
                    <div className=" sm:max-w-[60%]">
                    <p className="text-md sm:text-lg text2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    </div>
                    <img src={mypic} className="h-48 w-48 sm:h-60 sm:w-60 mt-5 sm:mt-0 mx-auto sm:mx-0 "/>
                </div>
            </AnimationOnScroll>    
                    
            </div>    
            </div>
        </>
    )
}