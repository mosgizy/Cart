import React from 'react'
import { useGlobalContext } from '../App'

const Total = () => {
    const { totalPrice } = useGlobalContext()
    return (
        Math.round(totalPrice) ? <div className='mt-4 flex justify-between text-xl capitalize font-bold tracking-widest'>
            <p>total</p>
            <p>{totalPrice}</p> 
        </div> : ""
    )
}

export default Total
