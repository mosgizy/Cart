import React from 'react'
import Item from './Item'
import { useGlobalContext } from '../App'

const Items = () => {
    const { getItems } = useGlobalContext()

    return (
        <div className='mt-10 border-b-2 border-black pb-9'>
            {
                getItems.map(item => {
                    return <Item key={item.id} {...item} />
                })
            }
        </div>
    )
}

export default Items