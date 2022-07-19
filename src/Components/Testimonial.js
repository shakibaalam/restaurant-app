import React from 'react';
import networkImg from "../assets/images/network.png";
import ava01 from "../assets/images/ava-1.jpg";
import ava02 from "../assets/images/ava-2.jpg";
import ava03 from "../assets/images/ava-3.jpg";

const Testimonial = () => {
    const sliderData = [
        { title: "Jhon Doe", img: ava01, dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendisatque, quam minus totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibusquis dolorem quas!" },
        { title: "Mitchell Marsh", img: ava02, dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendisatque, quam minus totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibusquis dolorem quas!" },
        { title: "Steven Crock", img: ava03, dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendisatque, quam minus totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibusquis dolorem quas!" },
    ]
    return (
        <div className=' lg:mx-28 my-20'>
            <div className=' grid grid-cols-1 lg:grid-cols-2 font-serif gap-10'>
                <div>
                    <h5 className=' text-primary mb-4 text-lg'>Testimonial</h5>
                    <h2 className=' text-4xl font-extrabold mb-4'>What our <span className=' text-primary'>customers</span> are saying</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quasi qui minus quos sit perspiciatis inventore quis provident placeat fugiat!</p>
                </div>
                <div>
                    <img src={networkImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Testimonial;