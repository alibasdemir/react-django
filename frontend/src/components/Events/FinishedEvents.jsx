import React from 'react'
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

function FinishedEvents() {
    return (
        <div>
            <div>
                <div className="text-center mb-12 mx-20 justify-between" >
                    <div className='eventHeader bg-gray-100 rounded-full items-center justify-start flex flex-row py-3 px-10 content-center' style={{ boxShadow: '0 4px 8px #cbd5e1' }}>

                        <RiArrowRightSLine className='text-2xl mr-1 text-indigo-500' />
                        <Link to="/finishedevents" className="font-bold text-rose-500 mb-1 text-xl no-underline hover:scale-105">
                            Süresi Geçen Etkinlikler
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinishedEvents