import React from 'react';
import { Link } from 'react-router-dom'
import logo from "../assets/images/res-logo.png";
import { IoIosBasket } from 'react-icons/io';
import { BsPersonCircle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { cartUiActions } from '../features/CartUiSlice';

const NavBar = () => {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const dispatch = useDispatch();

    const toggleCart = () => {
        dispatch(cartUiActions.toggle());
    };
    const navLinks = [
        {
            display: "Home",
            path: "/home",
        },
        {
            display: "Foods",
            path: "/foods",
        },
        {
            display: "Cart",
            path: "/cart",
        },
        {
            display: "Contact",
            path: "/contact",
        },
    ];
    return (
        <div className=' px-20 text-accent'>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl"><img className=' w-10 h-10' src={logo} alt="logo" />
                        <h5 className=' block font-bold ml-2'>Tasty Treat</h5></a>

                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 font-bold text-lg gap-7 ">
                        {navLinks.map((item, index) => (
                            <Link
                                to={item.path}
                                key={index}
                                className={(navClass) =>
                                    navClass.isActive ? " text-red-600" : ""
                                }
                            >
                                {item.display}
                            </Link>
                        ))}
                    </ul>
                </div>
                <div class="navbar-end cursor-pointer" >
                    <IoIosBasket onClick={toggleCart} className=' text-2xl relative' />
                    <p onClick={toggleCart} className=' bg-red-600 rounded-full text-white w-4 h-4 flex justify-center items-center text-xs absolute top-3 mr-8'>{totalQuantity}</p>
                    <Link to="/login">
                        < BsPersonCircle className=' text-2xl ml-3' />
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default NavBar;