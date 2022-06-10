import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2ze6j0h', 'template_4gebabm', form.current, '5YbYTOAVYyQgTUfHZ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <div id='contact'>
            <br />
            <br />

            <h1 className='mt-12 text-center text-5xl font-bold z-index-0'>Contact Me</h1>
            <div className='divider w-1/2 mx-auto'></div>
            <div class="hero min-h-screen w-full bg-base-100">
                <div class="hero-content w-full">
                    <div class="card w-full shadow-2xl bg-base-100">
                        <form ref={form} onSubmit={sendEmail} class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Message</span>
                                </label>
                                <input type="text" placeholder="Your Massege" name='message' class="input input-bordered" />

                            </div>
                            <div class="form-control w-1/2 mx-auto mt-6">
                                <button class="btn btn-primary">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;