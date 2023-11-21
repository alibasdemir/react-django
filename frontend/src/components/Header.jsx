import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { Link, useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        console.log("User:", user); // Kullanıcı objesini konsolda göster
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
      };
    }

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
        <header id='header' className="bg-gradient-to-r from-purple-800 via-blue-800 to-purple-800 p-4 shadow-md pr-10 pl-10">
            <div className="mx-auto flex justify-between items-center ">
            <Link to="/" className="text-2xl font-bold italic text-white animate-pulse md:w-auto flex justify-center items-center no-underline">
    <span style={{ color: "#ff4500" }}>TICKET</span>
    <span style={{ color: "#a5b4fc", fontSize:"32px" }}>X</span>
</Link>

                <div id='headerevent' className="items-center space-x-4">
                <nav style={{ display: 'flex', gap: '5px' }} className="space-x-4 ">


                <NavDropdown title="Etkinlik Kategorileri" id="basic-nav-dropdown" style={{ color: 'white' }}>
                {categories.map((category) => (
                    <NavDropdown.Item key={category.id}>
                        <Link to={`/categories/${category.id}`} style={{ color:'black', textDecoration: 'none' }}>{category.title}</Link>
                    </NavDropdown.Item>
                ))}
                </NavDropdown>


                    <a href="#" className="text-white hover:text-gray-300 relative group no-underline">
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
                    </a>
                </nav>
            </div>
                <div id='searchbarheader' className="flex items-center space-x-4">
                    <div className="flex items-center">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Etkinlik, sanatçı ya da mekan arayın..."
                                className="px-4 py-1 rounded-md border-2 border-solid border-white focus:outline-none w-96 placeholder:italic text-sm"
                                value={searchTerm}
                                onChange={handleInputChange}
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <button onClick={handleSearch}>
                                    <AiOutlineSearch />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {user ? (
   
          <p style={{color: 'white', fontSize: '18px'}}>HOŞGELDİN, <span style={{color: 'yellow', fontSize: '24px', fontWeight: 'bold'}}>{user.username}</span> !</p>
          ) : (
              <p style={{color: 'white', fontSize: '18px'}}>Giriş Yapmadınız !</p>
                )}

                <div id='headerbuttons' className="flex items-center space-x-4">
                    <div className="relative flex items-center mr-3">
                        <button
                            onClick={openCart}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="flex items-center"
                        >
                            <SlBasket
                                className={`mr-1 ${isHovered ? 'text-blue-400' : 'text-white'}`}
                                size={24}

                            />

                            <span className={`mr-1 ${isHovered ? 'text-blue-400' : 'text-white'}`}>Sepetim</span>
                        </button>
                        {cartOpen && (
                            <div className="absolute bg-gray-800 text-white p-4 rounded-md top-12 right-0">
                                Sepet İçeriği Burada
                                {/* Sepet içeriği, sepetteki ürünlerin listesi, miktarı vs. */}
                            </div>
                        )}
                    </div>
                    {isLoggedIn ? (
          <button onClick={handleLogout} className="text-white hover:text-white relative group transform hover:scale-105 transition-transform no-underline">
            Çıkış Yap
            <span className="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </button>
        ) : (
                    <Link to="/login" className="text-white hover:text-white relative group transform hover:scale-105 transition-transform no-underline">
                        Giriş Yap
                        <span className="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </Link>
        )}
                    <Link to="/register" className="bg-white text-blue-600 hover:bg-blue-700 hover:text-gray-300 py-2 px-4 rounded-md font-medium hover:ease-out duration-500 no-underline">
                        Kayıt Ol
                    </Link>
                
                </div>

            </div>
            
        </header >
    )
}

export default Header