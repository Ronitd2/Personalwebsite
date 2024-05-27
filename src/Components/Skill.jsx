import React from "react";
import Slider from "react-slick";
import htmllogo from "./images/html-5.png";
import csslogo from "./images/css-3.png";
import jslogo from "./images/js.png";
import nodelogo from "./images/nodejs.png";
import reactlogo from "./images/atom.png";
import expresslogo from "./images/express.png";
import mongologo from "./images/mongodb.png";
import gitlogo from "./images/git.png";
import githublogo from "./images/gitcon.png";
import javalogo from "./images/java.png";
import clogo from "./images/c.png";
import pythonlogo from "./images/python.jpg";
import telwindlogo from "./images/telwind.png";
import thunder from "./images/thunderbolt.png"
import socket from "../assets/socket.png"
import firebase from "../assets/firebase.png"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Element from "./Element";

export default function Skill()
{
    return(
        <>
            <div id="skills" className="flex items-center justify-center sm:h-screen w-[100%] mt-20 sm:mt-5 ">
                <div className="w-[80%]">
                <div className="flex gap-3 ">
                <img src={thunder} className="h-9 w-8"/>
                <h2 className="text-2xl text-white font-bold">Technical Skills</h2>
                </div>
                
                
                <div className="flex flex-wrap gap-8 w-[100%] mt-4 ">
                    <div className="   sm:h-20 sm:w-[23%] h-18 w-[45%]    hover:slide-fwd-center">
                    <AnimationOnScroll animateIn="animate-scale-up-center">
                      <div className="flex justify-center items-center gap-2 p-2 rounded-2xl bg-[#2C3639] w-full h-18 sm:h-20">
                        <img className="h-10 w-10 sm:h-14 sm:w-14" src={htmllogo}></img>
                        <p className="text-lg sm:text-xl font-semibold text-white">HTML</p>
                    </div>
                    </AnimationOnScroll>
                    </div>
                    <div className="   sm:h-20 sm:w-[23%] h-18 w-[45%]    hover:slide-fwd-center">
                    <AnimationOnScroll animateIn="animate-scale-up-center">
                      <div className="flex justify-center items-center gap-2 p-2 rounded-2xl bg-[#2C3639] w-full h-18 sm:h-20">
                        <img className="h-10 w-10 sm:h-14 sm:w-14" src={csslogo}></img>
                        <p className="text-lg sm:text-xl font-semibold text-white">CSS</p>
                    </div>
                    </AnimationOnScroll>
                    </div>
                    <div className="   sm:h-20 sm:w-[23%] h-18 w-[45%]    hover:slide-fwd-center">
                    <AnimationOnScroll animateIn="animate-scale-up-center">
                      <div className="flex justify-center items-center gap-2 p-2 rounded-2xl bg-[#2C3639] w-full h-18 sm:h-20">
                        <img className="h-10 w-10 sm:h-14 sm:w-14" src={jslogo}></img>
                        <p className="text-lg sm:text-xl font-semibold text-white">Javascript</p>
                    </div>
                    </AnimationOnScroll>
                    </div>
                    <div className="   sm:h-20 sm:w-[23%] h-18 w-[45%]    hover:slide-fwd-center">
                    <AnimationOnScroll animateIn="animate-scale-up-center">
                      <div className="flex justify-center items-center gap-2 p-2 rounded-2xl bg-[#2C3639] w-full h-18 sm:h-20">
                        <img className="h-10 w-10 sm:h-14 sm:w-14" src={reactlogo}></img>
                        <p className="text-lg sm:text-xl font-semibold text-white">React</p>
                    </div>
                    </AnimationOnScroll>
                    </div>
                    <div className="   sm:h-20 sm:w-[23%] h-18 w-[45%]    hover:slide-fwd-center">
                    <AnimationOnScroll animateIn="animate-scale-up-center">
                      <div className="flex justify-center items-center gap-2 p-2 rounded-2xl bg-[#2C3639] w-full h-18 sm:h-20">
                        <img className="h-10 w-10 sm:h-14 sm:w-14" src={nodelogo}></img>
                        <p className="text-lg sm:text-xl font-semibold text-white">NodeJs</p>
                    </div>
                    </AnimationOnScroll>
                    </div>
                    <div className="   sm:h-20 sm:w-[23%] h-18 w-[45%]    hover:slide-fwd-center">
                    <AnimationOnScroll animateIn="animate-scale-up-center">
                      <div className="flex justify-center items-center gap-2 p-2 rounded-2xl bg-[#2C3639] w-full h-18 sm:h-20">
                        <img className="h-10 w-10 sm:h-14 sm:w-14" src={expresslogo}></img>
                        <p className="text-lg sm:text-xl font-semibold text-white">ExpressJs</p>
                    </div>
                    </AnimationOnScroll>
                    </div>
                    <div className="   sm:h-20 sm:w-[23%] h-18 w-[45%]    hover:slide-fwd-center">
                    <AnimationOnScroll animateIn="animate-scale-up-center">
                      <div className="flex justify-center items-center gap-2 p-2 rounded-2xl bg-[#2C3639] w-full h-18 sm:h-20">
                        <img className="h-10 w-10 sm:h-14 sm:w-14" src={mongologo}></img>
                        <p className="text-lg sm:text-xl font-semibold text-white">MongoDb</p>
                    </div>
                    </AnimationOnScroll>
                    </div>
                    <div className="   sm:h-20 sm:w-[23%] h-18 w-[45%]    hover:slide-fwd-center">
                    <AnimationOnScroll animateIn="animate-scale-up-center">
                      <div className="flex justify-center items-center gap-2 p-2 rounded-2xl bg-[#2C3639] w-full h-18 sm:h-20">
                        <img className="h-10 w-10 sm:h-14 sm:w-14" src={clogo}></img>
                        <p className="text-lg sm:text-xl font-semibold text-white">C++</p>
                    </div>
                    </AnimationOnScroll>
                    </div>
                    <div className="   sm:h-20 sm:w-[23%] h-18 w-[45%]    hover:slide-fwd-center">
                    <AnimationOnScroll animateIn="animate-scale-up-center">
                      <div className="flex justify-center items-center gap-2 p-2 rounded-2xl bg-[#2C3639] w-full h-18 sm:h-20">
                        <img className="h-10 w-10 sm:h-14 sm:w-14" src={javalogo}></img>
                        <p className="text-lg sm:text-xl font-semibold text-white">Java</p>
                    </div>
                    </AnimationOnScroll>
                    </div>
                    <div className="   sm:h-20 sm:w-[23%] h-18 w-[45%]    hover:slide-fwd-center">
                    <AnimationOnScroll animateIn="animate-scale-up-center">
                      <div className="flex justify-center items-center gap-2 p-2 rounded-2xl bg-[#2C3639] w-full h-18 sm:h-20">
                        <img className="h-10 w-10 sm:h-14 sm:w-14" src={pythonlogo}></img>
                        <p className="text-lg sm:text-xl font-semibold text-white">Python</p>
                    </div>
                    </AnimationOnScroll>
                    </div>
                    <div className="   sm:h-20 sm:w-[23%] h-18 w-[45%]    hover:slide-fwd-center">
                    <AnimationOnScroll animateIn="animate-scale-up-center">
                      <div className="flex justify-center items-center gap-2 p-2 rounded-2xl bg-[#2C3639] w-full h-18 sm:h-20">
                        <img className="h-10 w-10 sm:h-14 sm:w-14" src={telwindlogo}></img>
                        <p className="text-lg sm:text-xl font-semibold text-white">Telwind CSS</p>
                    </div>
                    </AnimationOnScroll>
                    </div>
                    <div className="   sm:h-20 sm:w-[23%] h-18 w-[45%]    hover:slide-fwd-center">
                    <AnimationOnScroll animateIn="animate-scale-up-center">
                      <div className="flex justify-center items-center gap-2 p-2 rounded-2xl bg-[#2C3639] w-full h-18 sm:h-20">
                        <img className="h-10 w-10 sm:h-14 sm:w-14" src={gitlogo}></img>
                        <p className="text-lg sm:text-xl font-semibold text-white">Git</p>
                    </div>
                    </AnimationOnScroll>
                    </div>
                    <div className="   sm:h-20 sm:w-[23%] h-18 w-[45%]    hover:slide-fwd-center">
                    <AnimationOnScroll animateIn="animate-scale-up-center">
                      <div className="flex justify-center items-center gap-2 p-2 rounded-2xl bg-[#2C3639] w-full h-18 sm:h-20">
                        <img className="h-10 w-10 sm:h-14 sm:w-14" src={githublogo}></img>
                        <p className="text-lg sm:text-xl font-semibold text-white">Github</p>
                    </div>
                    </AnimationOnScroll>
                    </div>
                    <div className="   sm:h-20 sm:w-[23%] h-18 w-[45%]    hover:slide-fwd-center">
                    <AnimationOnScroll animateIn="animate-scale-up-center">
                      <div className="flex justify-center items-center gap-2 p-2 rounded-2xl bg-[#2C3639] w-full h-18 sm:h-20">
                        <img className="h-10 w-10 sm:h-14 sm:w-14" src={pythonlogo}></img>
                        <p className="text-lg sm:text-xl font-semibold text-white">Python</p>
                    </div>
                    </AnimationOnScroll>
                    </div>
                    <div className="   sm:h-20 sm:w-[23%] h-18 w-[45%]    hover:slide-fwd-center">
                    <AnimationOnScroll animateIn="animate-scale-up-center">
                      <div className="flex justify-center items-center gap-2 p-2 rounded-2xl bg-[#2C3639] w-full h-18 sm:h-20">
                        <img className="h-10 w-10 sm:h-14 sm:w-14" src={socket}></img>
                        <p className="text-lg sm:text-xl font-semibold text-white">Socket.io</p>
                    </div>
                    </AnimationOnScroll>
                    </div>
                    <div className="   sm:h-20 sm:w-[23%] h-18 w-[45%]    hover:slide-fwd-center">
                    <AnimationOnScroll animateIn="animate-scale-up-center">
                      <div className="flex justify-center items-center gap-2 p-2 rounded-2xl bg-[#2C3639] w-full h-18 sm:h-20">
                        <img className="h-10 w-10 sm:h-14 sm:w-14" src={firebase}></img>
                        <p className="text-lg sm:text-xl font-semibold text-white">Firebase</p>
                    </div>
                    </AnimationOnScroll>
                    </div>
                </div>
                
                </div>
            </div>
        </>
    )
}