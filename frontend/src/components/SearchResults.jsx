import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { RiArrowRightSLine } from "react-icons/ri";
import { BiSolidHome } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";


function SearchResults() {
    const { state } = useLocation();
    const searchResults = state?.searchResults || [];

    return (
        <div>
            <Header />
            <div className='px-20 py-10 bg-gray-100'>
                <div className="text-center mb-12 mx-20 justify-between" >
                    <div className='eventHeader bg-white rounded-full items-center justify-start flex flex-row py-3 px-10 content-center' style={{ boxShadow: '0 4px 8px #cbd5e1' }}>
                        <Link to="/" className=' no-underline  hover:scale-105 '>
                            <BiSolidHome className='text-2xl mr-1 text-rose-500 hover:text-rose-500' />
                        </Link>
                        <RiArrowRightSLine className='text-2xl mr-1 text-indigo-500' />

                        <span className="font-bold text-rose-500 mb-1 text-xl no-underline hover:scale-105" style={styles.title}>Search Results</span>

                    </div>
                </div>

                <div style={styles.container} >

                    {searchResults.length === 0 ? (
                        <p style={styles.noResults}>No results found</p>
                    ) : (
                        <ul style={styles.resultsList} className='flex flex-row'>
                            {searchResults.map((result) => (
                                <li key={result.id} style={styles.resultItem} className='bg-white p-10 mx-20 rounded-2xl relative gap-3 mb-3' >
                                    <h2 style={styles.resultTitle} className='text-indigo-500 font-bold mb-4'>{result.name}</h2>
                                 <div className='flex flex-row items-center justify-center' >
                                 <div >                    
                                        <FaMapMarkerAlt className='text-rose-500 mr-2 text-2xl' />
                                    </div>
                                    <div>
                                    <p style={styles.resultInfo}>{result.location}</p>
                                    <p style={styles.resultInfo}>{result.owner}</p>
                                    </div>
                                 </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

            </div>
            <Footer />
        </div>
    );
}

const styles = {
    container: {
        margin: '20px',
    },
    title: {
        fontSize: '24px',
        marginBottom: '16px',
    },
    noResults: {
        color: 'red',
    },
    resultsList: {
        listStyleType: 'none',
        padding: 0,
    },
    resultItem: {
        marginBottom: '16px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px #cbd5e1'
    },
    resultTitle: {
        fontSize: '20px',
        marginBottom: '8px',
    },
    resultInfo: {
        margin: 0,
    },
};

export default SearchResults;
