import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser } from "react-icons/fa6";
import { LuLogIn } from "react-icons/lu";
import { Dropdown } from 'react-bootstrap';
import userprofile from '../components/images/userprofile.svg';
import { LuPartyPopper } from "react-icons/lu";

function Header() {
    const [cartOpen, setCartOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

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

    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
            setIsLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        console.log("User:", user);
    }, [user]);

    const handleLogout = () => {
        localStorage.removeItem("user");
        if (window.location.pathname === '/') {
            toast.success('Çıkış yapıldı');
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } else {
            navigate("/");
            toast.success('Çıkış yapıldı');
        }
    };

    const [searchTerm, setSearchTerm] = useState('');

    function normalizeTurkishChars(text) {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    const handleSearch = async () => {
        const normalizedTerm = normalizeTurkishChars(searchTerm).toLowerCase();

        try {
            const response = await fetch(`http://localhost:8000/search-events/?query=${encodeURIComponent(normalizedTerm)}`);
            if (response.ok) {
                const data = await response.json();
                console.log('Search Results:', data);

                navigate('/search-results', { state: { searchResults: data } });
            } else {
                console.error('An error occurred during search.');
            }
        } catch (error) {
            console.error('An error occurred during search:', error);
        }
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <header id='header' className="bg-gradient-to-r from-purple-800 via-blue-800 to-purple-800 flex py-3 lg:h-[86px] " >
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 " >
           <div className='flex flex-row space-x-24'>
           <div className="flex items-center space-x-4">
                <Link to="/" className="text-xl lg:text-3xl font-bold italic text-white animate-pulse md:w-auto flex justify-center items-center no-underline">
                    <span style={{ color: "#ff4500" }}>TICKET</span>
                    <span style={{ color: "#a5b4fc" }} className="text-[30px] lg:text-[48px] ">
                        X
                    </span>
                </Link>
            </div>

                <div id='headerevent' className="lg:flex lg:items-center lg:space-x-4 ">
    <nav className="flex flex-col lg:flex-row lg:gap-5 space-x-4 text-blue-300 hover:scale-105 hover:text-indigo-200 font-bold">
        <NavDropdown title="ETKİNLİKLER" id="basic-nav-dropdown" className='  Slg:order-last '>
            <NavDropdown.Item>
                <Link to="/categories/all" className='text-blue-700 font-bold no-underline'>
                    <ul><li>TÜM ETKİNLİKLER</li></ul>
                </Link>
            </NavDropdown.Item>
            {categories.map((category) => (
                <NavDropdown.Item key={category.id}>
                    <Link to={`/categories/${category.id}`} className='text-blue-700 font-bold no-underline'><ul><li>{category.title}</li></ul></Link>
                </NavDropdown.Item>
            ))}
        </NavDropdown>
    </nav>
</div>
           </div>


                <div id='searchbarheader' className="flex items-center space-x-4">
                    <div className="flex items-center">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Etkinlik, sanatçı ya da mekan arayın..."
                                className="px-4 py-1 rounded-md border-2 border-solid border-white focus:outline-none w-96 placeholder:italic text-sm "
                                value={searchTerm}
                                onChange={handleInputChange}
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <button onClick={handleSearch}>
                                    <AiOutlineSearch className='text-xl mt-1 text-indigo-600 hover:scale-110 mr-1' />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>



               <div className='flex flex-row space-x-4 lg:space-x-20'>
               <div style={{ display: 'flex', alignItems: 'center', marginRight: "24px" }}>
                    {user ? (
                        <p className='pt-3' style={{ color: 'white', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                            HOŞGELDİN, <span style={{ color: "#ff4500", fontSize: '24px', fontWeight: 'bold', marginRight: "5px", marginLeft: "5px" }}>{user.username}</span> !
                            <LuPartyPopper className='ml-2 text-yellow-300 text-3xl' />
                        </p>
                    ) : (
                        // <p style={{ color: 'white', fontSize: '18px' }}>Giriş Yapmadınız ! </p>
                        []
                    )}
                </div>




                <div id='headerbuttons' className="flex items-center space-x-4">
                    {/* <div className="relative flex items-center mr-16">
                            <button
                                onClick={openCart}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="flex items-center"
                            >
                                <RiShoppingBasketFill
                                    className={`text-3xl mr-1 ${isHovered ? 'text-blue-300' : 'text-white '}  `}


                                />


                            </button>
                            {cartOpen && (
                                <div className="absolute bg-gray-800 text-white p-4 rounded-md top-12 right-0 z-20">

                                    <div className="flex justify-end mt-4">
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                         ÖDEME YAP
                                    </button>
                                    </div>
                                    </div>
                                    )}

                        </div> */}



                    {isLoggedIn ? (
                        <>

                            <Dropdown>
                                <Dropdown.Toggle style={{ display: "flex", flexDirection: "row", borderRadius: "96px", backgroundImage: `url(${userprofile})`, backgroundSize: 'cover', overflow: 'hidden', width: "48px", height: "48px", alignItems: "end", justifyContent: "center" }} className='ring-2 ring-indigo-400 hover:scale-105 hover:ease-out transition duration-500 hover:ring-4 hover:ring-indigo-300 mb-3' variant="secondary" id="dropdown-basic">
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='border-2 border-indigo-600 z-20 bg-white/25'>
                                    <Dropdown.Item className='relative group transform transition-transform' href="#">Profilim<span className="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform "></span></Dropdown.Item>
                                    <Dropdown.Item className='relative group transform  transition-transform' href="#">Sepetim<span className="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform "></span></Dropdown.Item>
                                    <Dropdown.Item className='relative group transform  transition-transform' href="#">Ayarlar<span className="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform "></span></Dropdown.Item>
                                    <Dropdown.Item href="#"> <button
                                        onClick={handleLogout}
                                        className='relative group transform hover:text-indigo-500 transition-transform'     >
                                        Çıkış Yap
                                        <span className="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform "></span>
                                    </button></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>


                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className='text-white p-3 font-semibold no-underline rounded-full  text-base flex flex-row items-center  hover:bg-gray-700 hover:ease-out hover:scale-105 transition duration-500 hover:ring-2 hover:ring-blue-500 hover:text-indigo-500'
                            >
                                <FaUser className='text-base mr-2' />
                                Giriş Yap
                                {/* <span className="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span> */}
                            </Link>
                            {isLoggedIn ? null : (
                                <Link
                                    to="/register"
                                    className='text-white px-3 py-3 no-underline text-base rounded-full bg-indigo-500/50 flex flex-row items-center hover:bg-blue-500 hover:ease-out  transition duration-500 hover:scale-105 font-normal  '
                                >
                                    Kayıt Ol
                                    <LuLogIn className='text-lg ml-2' />
                                </Link>
                            )}
                        </>
                    )}
                </div>
               </div>




            </div>

        </header >
    )
}

export default Header