import React from 'react';
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

const Serve = () => {
    const feature = [
        {
            title: "Quick Delivery",
            imgUrl: featureImg01,
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
        },

        {
            title: "Super Dine In",
            imgUrl: featureImg02,
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
        },
        {
            title: "Easy Pick Up",
            imgUrl: featureImg03,
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
        },
    ];
    return (
        <div className=' text-center font-san mt-28 lg:mx-28'>
            <div>
                <h4 className=' text-primary text-xl my-5'>What we serve</h4>
                <h2 className=' text-4xl font-bold'>Just sit back at home</h2>
                <h3 className=' text-3xl font-bold mt-2 mb-5'>we will <span className=' text-primary'>take care</span></h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, officiis?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius.</p>
            </div>
            <div className=' my-20 grid lg:grid-cols-3 grid-cols-1 gap-10'>
                {
                    feature.map((f, index) => <div key={index} className='p-10'>
                        <img className=' w-[80px] mx-auto' src={f.imgUrl} alt="" />
                        <h2 className=' text-2xl font-bold my-3'>{f.title}</h2>
                        <p>{f.desc}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Serve;