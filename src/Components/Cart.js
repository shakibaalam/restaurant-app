import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartUiActions } from '../features/CartUiSlice';
import { AiFillCloseCircle } from 'react-icons/ai';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    const toggleCart = () => {
        dispatch(cartUiActions.toggle());
    };
    return (
        <div className=' fixed top-0 left-0 w-full h-full' style={{ background: " rgba(0, 0, 0, 0.639)", zIndex: "99999" }}>
            <div className=' absolute top-0 right-0 w-[400px] h-full bg-white z-[99999]'>
                <div className=' ml-5 my-5'>
                    <span onClick={toggleCart}>
                        <AiFillCloseCircle className=' text-accent text-2xl cursor-pointer' />
                    </span>
                </div>

                <div className="cart__item-list">
                    {cartProducts.length === 0 ? (
                        <h6 className="text-center mt-5  font-bold text-xl">No item added to the cart</h6>
                    ) : (
                        cartProducts.map((item, index) => (
                            <CartItem item={item} key={index} />
                        ))
                    )}
                </div>

                <div className=" absolute bottom-0 left-0 px-5 bg-primary text-white w-full h-[70px] flex items-center justify-between rounded">
                    <h6 className=' text-2xl'>
                        Subtotal : <span>${totalAmount}</span>
                    </h6>
                    <button className=' bg-white text-accent px-5 py-2 rounded font-bold'>
                        <Link to="/checkout" onClick={toggleCart}>
                            Checkout
                        </Link>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Cart;