import React from 'react';
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from '../features/CartSlice';

const Food = ({ product }) => {
    const { id, title, image01, price } = product;
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id,
                title,
                image01,
                price,
            })
        );
    };
    return (
        <div className=' border-1 border-primary shadow text-center px-10 py-5'>
            <img className=' w-[120px] mx-auto rounded' src={image01} alt="" />

            <Link to={`/foods/${id}`}> <h2 className=' text-xl my-4'>{title}</h2></Link>

            <div className=' flex justify-between mt-10'>
                <h5 className=' text-xl font-bold text-primary'>$ {price}</h5>
                <button className=' bg-primary px-5 py-2 text-white rounded' onClick={addToCart}>Add to cart</button>
            </div>
        </div>
    );
};

export default Food;