import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useGlobalContext } from '../App'

const Navbar = () => {
    const {amountItems} = useGlobalContext();

    return (
        <nav className='bg-green-600'>
            <div className='flex items-center py-5 px-7 font-black justify-between max-w-[50rem] m-auto text-white'>
                <h1 className='text-4xl tracking-widest'>BabsTech</h1>
                <div className='relative'>
                    <FontAwesomeIcon icon={faCartShopping} className="text-3xl" />
                    <span className='absolute right-[-12px] top-[-10px] bg-green-300 rounded-[50%] w-6 h-6 text-center'>{amountItems}</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
