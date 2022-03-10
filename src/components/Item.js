import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useGlobalContext } from '../App'

const Item = ({ id, title, price, img, amount }) => {
    const [amountItem,setAmountItem] = useState(amount)
    const { dispatch, amountItems,totalPrice,getItems } = useGlobalContext();
    const increase = () => {
        setAmountItem(amountItem + 1)
        dispatch({ type: 'AMOUNT_IN_CART', payload: amountItems + 1 })
        dispatch({ type: "UPDATE_TOTAL_PRICE", payload: (Number(totalPrice) + Number(price)).toFixed(2) })
    }

    const decrease = () => {
        if (amountItem > 0) {
            setAmountItem(amountItem - 1)
            dispatch({ type: 'AMOUNT_IN_CART', payload: amountItems - 1 })
            dispatch({ type: "UPDATE_TOTAL_PRICE", payload: (Number(totalPrice) - Number(price)).toFixed(2) })
        }

        removeItem(id)
    }

    const removeItem = (id) => {
        const newItems = getItems.filter(item => item.id !== id)
        dispatch({ type: 'GET_ITEMS', payload: newItems })
        dispatch({ type: 'AMOUNT_IN_CART', payload: amountItems - 1 })
        dispatch({ type: "UPDATE_TOTAL_PRICE", payload: (Number(totalPrice) - Number(price)).toFixed(2) })
    }

    return (
        <div className='flex justify-between mb-6'>
            <div className='flex gap-6'>
                <img src={img} alt={title} className="w-20" />
                <div className='tracking-[2px]'>
                    <p className="text-[1.2rem] capitalize">{title}</p>
                    <p>{price}</p>
                    <button className='tracking-[2px] text-green-400' type='button' onClick={() => removeItem(id)}>remove</button>
                </div>
            </div>
            <div>
                <button className='text-green-400'><FontAwesomeIcon icon={faAngleUp} onClick={increase} /></button>
                <p className='text-center text-2xl'>{amountItem }</p>
                <button className='text-green-400'><FontAwesomeIcon icon={faAngleDown} onClick = {decrease} /></button>
            </div>
        </div>
    )
}

export default Item
