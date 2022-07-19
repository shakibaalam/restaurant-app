import React, { useEffect, useState } from 'react';
import products from "../assets/fake-data/products.js";
import { useDispatch } from "react-redux";

const Pizza = () => {
    const [hotPizza, setHotPizza] = useState([]);

    useEffect(() => {
        const filteredPizza = products.filter((item) => item.category === "Pizza");
        const slicePizza = filteredPizza.slice(0, 4);
        setHotPizza(slicePizza);
    }, []);

    // const dispatch = useDispatch();

    // const addToCart = () => {
    //   dispatch(
    //     cartActions.addItem({
    //       id,
    //       title,
    //       image01,
    //       price,
    //     })
    //   );
    // };
    return (
        <div className=' font-mono font-bold lg:mx-28'>
            <h2 className='my-8 text-3xl text-center'>Hot Pizza</h2>
            <div className=' grid grid-cols-1 lg:grid-cols-4 gap-5 my-10'>
                {
                    hotPizza.map(hot => <div className=' border-1 border-primary shadow text-center px-10 py-5' key={hot.id}>
                        <img className=' w-[120px] mx-auto rounded' src={hot.image01} alt="" />
                        <h4 className=' text-xl my-4'>{hot.title}</h4>
                        <div className=' flex justify-between mt-10'>
                            <h5 className=' text-xl text-primary'>$ {hot.price}</h5>
                            <button className=' bg-primary px-5 py-2 text-white rounded' >Add to cart</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Pizza;