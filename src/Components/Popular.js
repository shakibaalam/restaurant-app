import React, { useEffect, useState } from 'react';
import products from "../assets/fake-data/products";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import Food from './Food';

const Popular = () => {
    const [category, setCategory] = useState("ALL");
    const [allProducts, setAllProducts] = useState(products);
    useEffect(() => {
        if (category === "ALL") {
            setAllProducts(products);
        }

        if (category === "BURGER") {
            const filteredProducts = products.filter(
                (item) => item.category === "Burger"
            );
            setAllProducts(filteredProducts);
        }

        if (category === "PIZZA") {
            const filteredProducts = products.filter(
                (item) => item.category === "Pizza"
            );
            setAllProducts(filteredProducts);
        }

        if (category === "BREAD") {
            const filteredProducts = products.filter(
                (item) => item.category === "Bread"
            );
            setAllProducts(filteredProducts);
        }
    }, [category]);

    return (
        <div className=' font-sans font-bold lg:mx-28'>
            <h2 className='my-8 text-3xl text-center'>Popular Foods</h2>

            <div className=' py-4 flex bg-primary text-white justify-center items-center gap-10 rounded text-lg'>
                <button
                    className={` ${category === "ALL" ? " bg-white text-primary px-3 py-1 rounded" : ""
                        } `}
                    onClick={() => setCategory("ALL")}
                >
                    All
                </button>
                <button
                    className={`flex justify-center items-center gap-2 ${category === "BURGER" ? " bg-white text-primary px-3 py-1 rounded" : ""
                        } `}
                    onClick={() => setCategory("BURGER")}
                >
                    <img className=' w-[20px]' src={foodCategoryImg01} alt="" />
                    Burger
                </button>

                <button
                    className={`flex justify-center items-center gap-2 ${category === "PIZZA" ? " bg-white text-primary px-3 py-1 rounded" : ""
                        } `}
                    onClick={() => setCategory("PIZZA")}
                >
                    <img className=' w-[20px]' src={foodCategoryImg02} alt="" />
                    Pizza
                </button>

                <button
                    className={`flex justify-center items-center gap-2 ${category === "BREAD" ? " bg-white text-primary px-3 py-1 rounded" : ""
                        } `}
                    onClick={() => setCategory("BREAD")}
                >
                    <img className=' w-[20px]' src={foodCategoryImg03} alt="" />
                    Bread
                </button>
            </div>

            <div className=' grid grid-cols-1 lg:grid-cols-4 gap-5 my-10'>
                {
                    allProducts.map((product, index) => <Food product={product} key={index}>
                    </Food>)
                }
            </div>
        </div>
    );
};

export default Popular;