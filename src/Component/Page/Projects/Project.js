import React from 'react';
import tool from '../../../Asset/tool.png'
import book from '../../../Asset/book.png'
import doctor from '../../../Asset/doctor.png'
import cosmatic from '../../../Asset/cosmatic.PNG'
import Bootstrap from '../../../Asset/bootstrap.PNG'


const Project = () => {
    return (
        <div className='mt-16'>
            <h1 className='text-4xl text-center bg-accent w-1/2 mx-auto mb-6 z-index-0'>Project-1</h1>
            <div class="card lg:card-side bg-base-200 shadow-xl">
                <figure>
                    <img src={tool} className='w-96 h-56' alt="Album" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-3xl">Tools Manufacturar</h2>
                    <p className=''> <span className='font-bold'>short description:</span> <br /> This ia a beautifull responsive website with nice navebar , banner, service section dashboard, reviews, <br />
                        add Product, manage product section and aslo payment section.</p>
                    <p className=''> <span className='font-bold'>Technology:</span> <br /> Reactjs, tailwind css, daisy ui, express js, mongoDB, reactQuery, firebase, heroku</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">See more details</button>
                    </div>
                </div>
            </div>
            <h1 className='text-4xl text-center bg-accent w-1/2 mx-auto mt-16 mb-6'>Project-2</h1>
            <div class="card lg:card-side bg-base-200 shadow-xl">
                <figure>
                    <img src={book} className='w-96 h-56' alt="Album" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-3xl">Warehouse Management</h2>
                    <p className=''> <span className='font-bold'>short description:</span> <br /> This ia a beautifull responsive website with nice navebar , banner, service section, <br />
                        add Product, manage product section.</p>
                    <p className=''> <span className='font-bold'>Technology:</span> <br /> Reactjs, React Bootstrap,  express js,JWT,  mongoDB, reactQuery, firebase, heroku</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">See more details</button>
                    </div>
                </div>
            </div>
            <h1 className='text-4xl text-center bg-accent w-1/2 mx-auto mt-16 mb-6'>Project-3</h1>
            <div class="card lg:card-side bg-base-200 shadow-xl">
                <figure>
                    <img src={doctor} className='w-96 h-56' alt="Album" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-3xl">Independence Service Provider</h2>
                    <p className=''> <span className='font-bold'>short description:</span> <br /> This ia a beautifull responsive website with nice navebar , banner, service section, <br />
                        add Product, manage product section.</p>
                    <p className=''> <span className='font-bold'>Technology:</span> <br /> Reactjs, React Bootstrap, express js, mongoDB, firebase, heroku</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">See more details</button>
                    </div>
                </div>
            </div>
            <h1 className='text-4xl text-center bg-accent w-1/2 mx-auto mt-16 mb-6'>Project-4</h1>
            <div class="card lg:card-side bg-base-200 shadow-xl">
                <figure>
                    <img src={cosmatic} className='w-96 h-56' alt="Album" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-3xl">Cosmatic Shop</h2>
                    <p className=''> <span className='font-bold'>short description:</span> <br /> This ia a beautifull responsive website with nice navebar , banner, service section dashboard, reviews, <br />
                        add Product, manage product section and aslo payment section.</p>
                    <p className=''> <span className='font-bold'>Technology:</span> <br /> Reactjs, React Bootstrap</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">See more details</button>
                    </div>
                </div>
            </div>
            <h1 className='text-4xl text-center bg-accent w-1/2 mx-auto mt-16 mb-6'>Project-5</h1>
            <div class="card lg:card-side bg-base-200 shadow-xl">
                <figure>
                    <img src={Bootstrap} className='w-96 h-56' alt="Album" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-3xl">Tools Manufacturar</h2>
                    <p className=''> <span className='font-bold'>short description:</span> <br /> This ia a beautifull responsive website with nice navebar , banner, service section <br />
                        Footer section
                    </p>
                    <p className=''> <span className='font-bold'>Technology:</span> <br /> HTML5, CSS, Bootstrap</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">See more details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;