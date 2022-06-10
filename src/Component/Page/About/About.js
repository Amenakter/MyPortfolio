import React from 'react';
import img from '../../../Asset/Amena akter.jpeg'
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div class="hero min-h-screen bg-base-200 mt-12">
            <div className='lg:w-3/4 lg:h-3/2 bg-white'>
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="avatar">
                        <div class="lg:w-96 sm:w-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div className='lg:w-1/2'>
                        <h1 class="lg:text-5xl text-3xl font-bold">Amena Akter</h1>
                        <p class="py-2">As a Full-Stack Web Developer</p>
                        <div className='divider'></div>
                        <p className='py-2 font-bold '>HTML5, CSS3, Tailwind CSS, Bootstrap, DaisyUI,JavaScript, ES6, ReactJS, React-Router, React-Hooks,ReactQuery Typescript, Axios,NodeJs, MongoDB.</p>
                        <p>I am very passionate about web development. Created several projects using JavaScript, ReactJS, Express.JS, HTML3, CSS3, Tailwind CSS and Bootstrap.Familler with VsCode, github,heroku,Firebase, netlify, daisy ui and also figma file. With my programming knowledge I can lead your company to greater success -this is my confidence</p>
                        <div className='w-1/2 mx-auto'>
                            <button class="mt-6 btn btn-primary mb-16"> <NavLink to='#contact/contact'>Contact Me</NavLink> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;