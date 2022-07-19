import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Item from '../Components/Item';

const Carts = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <div>
      <div className='background-style h-[30vh]'>
        <h1 className=' text-white text-4xl pt-32 pl-20 font-serif font-bold'>Your cart</h1>
      </div>
      <div className='lg:mx-28 my-20'>
        <div className='overflow-x-auto w-full '>
          {cartItems.length === 0 ? (
            <h5 className="text-center text-2xl font-bold">Your cart is empty</h5>
          ) : (
            <table className=" table w-full ">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <Item item={item} key={item.id} />
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="mt-16 font-bold">
          <h6>
            Subtotal: $
            <span className=" text-primary text-xl font-semibold">{totalAmount}</span>
          </h6>
          <p>Taxes and shipping will calculate at checkout</p>

          <div className=" my-4">
            <button className=" text-white bg-primary px-5 py-2 rounded mr-5">
              <Link to="/foods">Continue Shopping</Link>
            </button>
            <button className=" text-white bg-primary px-5 py-2 rounded">
              <Link to="/checkout">Proceed to checkout</Link>
            </button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Carts;