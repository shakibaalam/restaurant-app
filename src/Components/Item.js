import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../features/CartSlice';
import { TiDeleteOutline } from 'react-icons/ti';

const Item = ({ item }) => {
    const { id, image01, title, price, quantity } = item;
    const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id));
    };
    return (
        <tr >
            <td>
                <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                        <img src={image01} alt="Avatar " />
                    </div>
                </div>
            </td>
            <td className=" font-bold">{title}</td>
            <td className=" text-lg">${price}</td>
            <td className="">{quantity} </td>
            <td onClick={deleteItem} className="text-center">
                <TiDeleteOutline className=' text-xl text-primary cursor-pointer' />
            </td>
        </tr>
    );
};

export default Item;