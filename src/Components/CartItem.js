import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../features/CartSlice';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

const CartItem = ({ item }) => {
    const { id, title, price, image01, quantity, totalPrice } = item;

    const dispatch = useDispatch();

    const incrementItem = () => {
        dispatch(
            cartActions.addItem({
                id,
                title,
                price,
                image01,
            })
        );
    };

    const decreaseItem = () => {
        dispatch(cartActions.removeItem(id));
    };

    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id));
    };
    return (
        <div className=' pl-5'>
            <div className="flex gap-5">
                <img className='w-[35px] h-[35px] object-cover' src={image01} alt="product-img" />

                <div className=" w-100 flex items-center gap-10 justify-between">
                    <div>
                        <h6 className=" font-bold text">{title}</h6>
                        <p className=" flex items-center gap-5 font-bold">
                            {quantity}x <span className=' text-primary text-xl'>${totalPrice}</span>
                        </p>
                        <div className=" flex items-center justify-between bg-secondary rounded p-2 cursor-pointer mt-4">
                            <span className="increase__btn" onClick={incrementItem}>
                                <AiOutlinePlusCircle></AiOutlinePlusCircle>
                            </span>
                            <span className="quantity">{quantity}</span>
                            <span className="decrease__btn" onClick={decreaseItem}>
                                <AiOutlineMinusCircle />
                            </span>
                        </div>
                    </div>

                    <span className="" onClick={deleteItem}>
                        <TiDeleteOutline className=' text-2xl' />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CartItem;