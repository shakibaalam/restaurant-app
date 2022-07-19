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
        <div>
            <div className="cart__item-info flex gap-2">
                <img src={image01} alt="product-img" />

                <div className="cart__product-info w-100 flex items-center gap-4 justify-between">
                    <div>
                        <h6 className="cart__product-title">{title}</h6>
                        <p className=" flex items-center gap-5 cart__product-price">
                            {quantity}x <span>${totalPrice}</span>
                        </p>
                        <div className=" flex items-center justify-between increase__decrease-btn">
                            <span className="increase__btn" onClick={incrementItem}>
                                <AiOutlinePlusCircle></AiOutlinePlusCircle>
                            </span>
                            <span className="quantity">{quantity}</span>
                            <span className="decrease__btn" onClick={decreaseItem}>
                                <AiOutlineMinusCircle />
                            </span>
                        </div>
                    </div>

                    <span className="delete__btn" onClick={deleteItem}>
                        <TiDeleteOutline />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CartItem;