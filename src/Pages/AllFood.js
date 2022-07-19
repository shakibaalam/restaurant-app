import React, { useState } from 'react';
import '../Style/Style.css';
import '../Style/Pagination.css';
import { FiSearch } from 'react-icons/fi';
import products from "../assets/fake-data/products";
import Food from '../Components/Food';
import ReactPaginate from 'react-paginate';

const AllFood = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const [pageNumber, setPageNumber] = useState(0);

    const searchedProduct = products.filter((item) => {
        if (searchTerm.value === "") {
            return item;
        }
        if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item;
        } else {
            return console.log("not found");
        }
    });

    const productPerPage = 12;
    const visitedPage = pageNumber * productPerPage;
    const displayPage = searchedProduct.slice(
        visitedPage,
        visitedPage + productPerPage
    );

    const pageCount = Math.ceil(searchedProduct.length / productPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    return (
        <div>
            <div className='background-style h-[30vh]'>
                <h1 className=' text-white text-4xl pt-32 pl-20 font-serif font-bold'>All Foods</h1>
            </div>

            <div className=' my-20 lg:mx-28'>
                <div className=' flex justify-between items-center'>
                    <div class="form-control">
                        <label class="input-group">
                            <input type="text"
                                placeholder="I'm looking for...."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)} class="input input-bordered w-[630px]" />
                            <span className=' bg-primary text-white'><FiSearch className=' text-xl ' /></span>
                        </label>
                    </div>

                    <div className="">
                        <select className="w-[320px] px-5 py-3">
                            <option>Default</option>
                            <option value="ascending">Alphabetically, A-Z</option>
                            <option value="descending">Alphabetically, Z-A</option>
                            <option value="high-price">High Price</option>
                            <option value="low-price">Low Price</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className=' grid grid-cols-1 lg:grid-cols-4 gap-5 my-10 lg:mx-28'>
                {
                    displayPage.map(product => <Food key={product.id} product={product}></Food>)
                }
            </div>

            <div className='my-10 '>
                <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={changePage}
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    containerClassName=" paginationBttns "
                />
            </div>
        </div >
    );
};

export default AllFood;