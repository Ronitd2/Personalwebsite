import React from "react";
 import menu from "./images/menu.png"
 import '../App.css';
 import { useState } from "react";
 import cross from "./images/close.png";
export default function Navbar()
{
    const [navbarStatus,setNavbarStatus]=useState(false);
    const navsidebar=()=>{

    }
    return(
    <>
    <div className="flex justify-center w-[100%] ">
        <nav className="p-0 mt-7 sm:flex justify-between items-center nav-color w-[80%] sm:border-b-2 sm:border-gray-700">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-blue-500 text-2xl">Ronit Das</h1>

                {!navbarStatus &&
                <div className="p-2 sm:invisible">
                     <img className="h-11 w-10"  onClick={()=>{setNavbarStatus(true)}} src={menu} alt="menu"/>
                </div>
                }
            {navbarStatus &&
                <div className="fixed h-full top-0 right-0 p-4 w-[60%] backdrop-blur-md z-50 scale-up-hor-right">
                <div className=" text-center h-screen ">
                <img  className=" h-7 w-7 " src={cross} onClick={()=>{setNavbarStatus(false)}}></img>
                <ul className="text-green-100 font-semibold">
                    <li className=" mt-10 sm:m-0"><a href="#home" onClick={()=>{setNavbarStatus(false)}}>Home</a></li>
                    <li className=" mt-10 sm:m-0"><a href="#about" onClick={()=>{setNavbarStatus(false)}}>About</a></li>
                    <li className=" mt-10 sm:m-0"><a href="#skills" onClick={()=>{setNavbarStatus(false)}}>Skill</a></li>
                    <li className=" mt-10 sm:m-0"><a href="#project" onClick={()=>{setNavbarStatus(false)}}>Project</a></li>
                    <li className=" mt-10 sm:m-0"><a href="#contact" onClick={()=>{setNavbarStatus(false)}}>Contact</a></li>
                </ul>
                </div>
                </div> 
            } 
             
            </div>

         
            <div className="invisible sm:visible">
            <ul className=" flex gap-4 text-white font-bold">
                    <li className="cursor-pointer hover:text-[#59CE8F]"><a href="#home">Home</a></li>
                    <li className="cursor-pointer hover:text-[#59CE8F]"><a href="#about">About</a></li>
                    <li className="cursor-pointer hover:text-[#59CE8F]"><a href="#skills">Skills</a></li>
                    <li className="cursor-pointer hover:text-[#59CE8F]"><a href="#project">Projects</a></li>
                    <li className="cursor-pointer hover:text-[#59CE8F]"><a href="#contact">Contact</a></li>
                </ul>
            </div> 
               
        </nav>
        
    </div>
    </>
    )
}