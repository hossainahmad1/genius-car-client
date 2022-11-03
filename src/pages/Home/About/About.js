import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-20 ">
            <div className="hero-content flex-col lg:flex-row">
                <div className=' relative w-1/2'>
                    <img src={person} className="w-5/6 h-full  rounded-lg shadow-2xl" alt='' />
                    <img src={parts} className="absolute right-5 top-1/2 w-1/2  rounded-lg border-8 shadow-2xl" alt='' />
                </div>
                <div className='w-1/2'>
                    <p className='text-orange-400 font-bold'> About us</p>
                    <h1 className="my-5 text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="text-py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-primary mt-2">Get More info</button>
                </div>
            </div>
        </div>
    );
};

export default About;