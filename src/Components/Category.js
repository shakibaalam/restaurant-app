import React from 'react';
import categoryImg01 from "../assets/images/category-01.png";
import categoryImg02 from "../assets/images/category-02.png";
import categoryImg03 from "../assets/images/category-03.png";
import categoryImg04 from "../assets/images/category-04.png";

const Category = () => {
    const category = [
        {
            display: "Fastfood",
            imgUrl: categoryImg01,
        },
        {
            display: "Pizza",
            imgUrl: categoryImg02,
        },

        {
            display: "Asian Food",
            imgUrl: categoryImg03,
        },

        {
            display: "Row Meat",
            imgUrl: categoryImg04,
        },
    ];
    return (
        <div className='lg:mx-28'>
            <div className=' grid lg:grid-cols-4 grid-cols-1 gap-10'>
                {
                    category.map((c, index) => <div className=' bg-secondary flex justify-center items-center py-5 gap-5 font-serif font-bold' key={index}>
                        <img className=' w-16' src={c.imgUrl} alt="" />
                        <h4>{c.display}</h4>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Category;