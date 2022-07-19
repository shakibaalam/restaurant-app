import React from 'react';
import logo from "../assets/images/res-logo.png";
import { FaFacebookF } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineYoutube } from 'react-icons/ai';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=' bg-secondary lg:px-28 py-20 font-san text-accent'>
            <div className=' grid grid-cols-4 gap-8'>
                <div className="">
                    <img className=' w-16' src={logo} alt="logo" />
                    <h5 className=' font-bold text-lg mt-1 mb-5'>Tasty Treat</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt pariatur accusamus
                    </p>
                </div>
                <div>
                    <h5 className=' text-xl font-bold'>Delivery Time</h5>
                    <div>
                        <h6 className=' text-lg font-semibold mt-4 mb-1 '>Sunday - Thursday</h6>
                        <p>10:00am - 11:00pm</p>
                    </div>
                    <div>
                        <h6 className=' text-lg font-semibold mt-4 mb-1'>Friday - Saturday</h6>
                        <p>Off day</p>
                    </div>
                </div>
                <div>
                    <h5 className=' text-xl font-bold mb-4'>Contact</h5>
                    <p>Location: Maniknagar, Dhaka-1203, Bangladesh</p>
                    <p className=' font-bold text-lg mt-6 mb-4'>Phone: 01613387332</p>
                    <p className='text-lg font-bold'>Email: shakibaalam092@gmail.com</p>
                </div>
                <div>
                    <h5 className=' text-xl font-bold mb-1'>Newsletter</h5>
                    <p>Subscribe our newsletter</p>
                    <div className=" mt-4">

                        <div class="form-control">
                            <label class="input-group">
                                <input type="email" placeholder="Enter your email" class="input input-bordered" />
                                <span className=' bg-primary text-white'><FaTelegramPlane className=' text-xl ' /></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mt-16 flex justify-between'>
                <p className=' text-primary text-xs'>  Copyright - 2022, website made by Shakiba Alam. All Rights Reserved.</p>
                <div className=' flex gap-4 items-center'>
                    <p className=' font-bold'>Follow:</p>
                    <p className='bg-primary w-8 h-8 rounded-full flex justify-center items-center'><FaFacebookF className=' text-white ' /></p>

                    <p className='bg-primary w-8 h-8 rounded-full flex justify-center items-center'><BsGithub className=' text-white ' /></p>
                    <p className='bg-primary w-8 h-8 rounded-full flex justify-center items-center'><AiOutlineYoutube className=' text-white ' /></p>
                    <p className='bg-primary w-8 h-8 rounded-full flex justify-center items-center'><TiSocialLinkedinCircular className=' text-xl text-white ' /></p>


                </div>
            </div>
        </div>
    );
};

export default Footer;