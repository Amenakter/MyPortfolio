import React from 'react';
import Typical from 'react-typical';
import banner from '../../../Asset/banner.jpg'
import resume from '../../../Asset/Simple_Resume.pdf'



const Banner = () => {
    return (
        <div class="hero h-96 z-index-0" style={{ backgroundImage: `url(${banner})` }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-4xl font-bold">Hello I am Amena Akter</h1>
                    {""}
                    <h1 class="mb-5 text-4xl">I am a
                        {""}
                        <Typical
                            loop={Infinity}
                            steps={[
                                "Full-Stack Developer",
                                1000,
                                "Front-End Developer",
                                1000,
                                "React Js Developer",
                                1000,
                                "MERN Stack Developer",
                                1000,
                            ]}
                        />
                    </h1>

                    <a href='../../../Asset/Simple_Resume.pdf' download={resume} class="btn btn-primary">
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;