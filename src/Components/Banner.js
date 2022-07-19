import React from 'react';
import heroImg from "../assets/images/hero.png";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { RiShip2Line } from 'react-icons/ri';
import { BsShieldCheck } from 'react-icons/bs';

const Banner = () => {
    return (
        <div className=' flex justify-center items-center h-[100vh] lg:mx-28'>
            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className=' my-12'>
                    <h4 className=' my-2  font-serif font-bold text-xl'>Easy way to make an order</h4>
                    <h1 className=' text-5xl leading-tight font-sans w-3/4 font-bold mb-5'><span className=' text-primary'>HUNGRY?</span> Just wait
                        food at <span className='text-primary'>your door</span></h1>
                    <p className=' my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni delectus tenetur autem, sint veritatis!
                    </p>
                    <div className=' flex'>
                        <button className=' text-white bg-primary px-5 py-2 rounded font-bold flex justify-center items-center gap-2'>Order now  <MdOutlineKeyboardArrowRight /></button>
                        <button className=' text-primary font-bold border-2 border-primary rounded px-5 py-2 ml-10'>See All foods</button>
                    </div>
                    <div className=' flex gap-5 my-10 font-bold'>
                        <div className=' flex gap-2'>
                            <p className=' w-6 h-6 flex justify-center items-center bg-primary rounded-full'><RiShip2Line className='    text-white' /></p>
                            <p> No shipping charge</p>
                        </div>

                        <div className=' flex gap-2'>
                            <p className=' w-6 h-6 flex justify-center items-center bg-primary rounded-full'><BsShieldCheck className='    text-white' /></p>
                            <p> 100% secure checkout</p>
                        </div>

                    </div>
                </div>
                <div>
                    <img src={heroImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;