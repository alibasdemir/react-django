import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { RiShoppingBasketFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from "react-icons/fa6";
import { LuLogIn } from "react-icons/lu";


function Header() {
    const [cartOpen, setCartOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [categories, setCategories] = useState([]);


    const openCart = () => {
        setCartOpen(!cartOpen);
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:8000/categories');
                if (response.ok) {
                    const data = await response.json();
                    setCategories(data);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);



    return (
        <header id='header' className="bg-gradient-to-r from-purple-800 via-blue-800 to-purple-800 p-4 shadow-md pr-20 pl-20">
            <div className="flex justify-between items-center ml-10 mr-10">
                <Link to="/" className="text-4xl font-bold italic text-white animate-pulse md:w-auto flex justify-center items-center no-underline">
                    <span style={{ color: "#ff4500" }}>TICKET</span>
                    <span style={{ color: "#a5b4fc", fontSize: "50px" }}>X</span>
                </Link>

                <div id='headerevent' className="items-center space-x-4">
                    <nav style={{ display: 'flex', gap: '5px' }} className="space-x-4 ">
                        {/* 
                        <Link to={"/"} className="text-white relative group no-underline">
                            Konser
                            <span class="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                        </Link>
                        <Link to={"/"} className="text-white relative group no-underline">
                            Tiyatro
                            <span class="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                        </Link>
                        <Link to={"/"} className="text-white  relative group no-underline">
                            Spor
                            <span class="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                        </Link>
                        <Link to={"/"} className="text-white relative group no-underline">
                            Aile & Çocuk
                            <span class="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                        </Link> */}

                        <NavDropdown title="ETKİNLİKLER" id="basic-nav-dropdown" style={{ color: 'white', fontSize:"20px", paddingTop:"4px"}} className='font-medium hover:scale-105 hover:ease-out  transition duration-500 '>
                            {categories.map((category) => (
                                <NavDropdown.Item key={category.id} style={{ paddingBottom: "8px" }} >
                                    <Link to={`/categories/${category.id}`} style={{ color: '#3730a3', textDecoration: 'none', fontSize: "18px", }} className='  font-bold '>
                                        {category.title}
                                    </Link>
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>




                        {/* <a href="#" className="text-white hover:text-gray-300 relative group no-underline">
                            Etkinlikler
                            <span class="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 relative group no-underline">
                            Konserler
                            <span class="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 relative group no-underline">
                            Spor
                            <span className="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 relative group no-underline">
                            Tiyatro
                            <span className="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 relative group no-underline">
                            Aile
                            <span className="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                        </a> */}
                    </nav>
                </div>
                <div id='searchbarheader' className="flex items-center space-x-4">
    <div className="flex items-center">
        <div className="relative">
            <input
                type="text"
                placeholder="Etkinlik, sanatçı ya da mekan arayın..."
                className="px-4 py-2 rounded-md border-2 border-solid border-white focus:outline-none w-96 placeholder:italic text-md"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <button>
                    <AiOutlineSearch className='text-2xl mt-1 text-indigo-600 hover:scale-110 mr-1'/>
                </button>
            </div>
        </div>
    </div>
</div>


                <div id='headerbuttons' className="flex items-center space-x-4">
                    <div className="relative flex items-center mr-3">
                        <button
                            onClick={openCart}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="flex items-center"
                        >
                            <RiShoppingBasketFill
                                className={`mr-1 ${isHovered ? 'text-pink-400' : 'text-white '} animate-bounce mt-2`}
                                size={30}

                            />
{/* 
                            <span className={`text-2xl mr-1 ${isHovered ? 'text-blue-400' : 'text-white'}`}>Sepetim</span> */}
                        </button>
                        {cartOpen && (
                            <div className="absolute bg-gray-800 text-white p-4 rounded-md top-12 right-0">
                              
                                {/* Sepet içeriği, sepetteki ürünlerin listesi, miktarı vs. */}
                            </div>
                        )}
                    </div>

                    <Link
                        to={'/login'} 
                        className='text-indigo-700 p-3 no-underline rounded-full bg-white/75 text-xl flex flex-row items-center  hover:bg-white hover:ease-out hover:scale-105 transition duration-500 font-normal '
                    >
                        <FaUser className='text-2xl mr-2' />
                        Giriş Yap
                    </Link>

                    <Link
                        to={'/register'}
                        className='text-white p-3 no-underline text-xl rounded-full bg-indigo-500/50 flex flex-row items-center hover:bg-indigo-900/75 hover:ease-out  transition duration-500 hover:scale-105 font-normal'
                    >
                        Kayıt Ol
                        <LuLogIn className='text-2xl ml-2'/>
                       
                    </Link>

                    {/* <Link to="/login" className="text-white hover:text-white relative group transform hover:scale-105 transition-transform no-underline">
                        Giriş Yap
                        <span className="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </Link>
                    <Link to="/register" className="bg-white text-blue-600 hover:bg-blue-700 hover:text-gray-300 py-2 px-4 rounded-md font-medium hover:ease-out duration-500 no-underline">
                        Kayıt Ol
                    </Link> */}
                </div>

            </div>

        </header >
    )
}

export default Header