import React from 'react'
import { useGlobalContext } from '../App'

const ClearBtn = () => {
    const { dispatch } = useGlobalContext()
    
    const clearItems = () => {
        dispatch({ type: 'GET_ITEMS', payload: [] })
        dispatch({ type: "UPDATE_TOTAL_PRICE", payload: "0" })
    }
  return (
    <div className='text-center mt-8'>
      <button type='button' onClick={clearItems} className='bg-white border-2 border-red-600 rounded text-red-600 tracking-widest uppercase py-0.5 px-4 shadow-md transition-all duration-300 hover:shadow-inner hover:shadow-md hover:bg-red-300'>clear cart</button>
    </div>
  )
}

export default ClearBtn
