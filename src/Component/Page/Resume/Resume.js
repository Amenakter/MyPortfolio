import React from 'react';
import resume2 from '../../../Asset/Resume.PNG'
import resume from '../../../Asset/Simple_Resume.pdf'

const Resume = () => {
    return (
        <div className='flex'>
            <div className="mt-6 mb-8">
                <img className="ml-40" src={resume2} alt="resume second page" />
            </div>
            <div className='w-96 mx-auto'>
                <button className="btn btn-accent mb-16 mt-40"><a href={resume}>Download Resume</a></button>
            </div>
        </div>

    );
};

export default Resume;