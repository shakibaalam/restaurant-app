import React from 'react';
import whyImg from "../assets/images/location.png";
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Tasty = () => {
    const data = [
        { title: "Fresh and tasty foods", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus." },
        { title: "Quality support", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
        { title: "Order from any location", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
    ]
    return (
        <div className=' h-[100vh] lg:mx-28 font-serif'>
            <div className=' grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <img src={whyImg} alt="" />
                </div>
                <div className=' flex justify-center items-center'>
                    <div>
                        <h4 className=' text-primary text-3xl font-bold mb-4'>Why Tasty Treat?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus. Tempora reprehenderit a corporis velit, laboriosam vitae ullam, repellat illo sequi odio esse iste fugiat dolor, optio incidunt eligendi deleniti!</p>

                        <div className=' mt-8'>
                            {
                                data.map((d, index) => <div  key={index}>
                                    <div className=' flex gap-2 items-center mb-1'>
                                        <AiOutlineCheckCircle className=' text-primary' />
                                        <h4 className=' text-lg font-bold'>{d.title}</h4>
                                    </div>
                                    <p className=' mb-4'>{d.desc}</p>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasty;