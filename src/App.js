import React, {useEffect,useReducer,useContext} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Items from './components/Items';
import Loading from './components/Loading';
import Total from './components/Total';
import ClearBtn from './components/ClearBtn';
import { reducer } from './reducer';

const appContext = React.createContext()
const url = 'https://course-api.com/react-useReducer-cart-project'

const defaultState = {
  isLoading: true,
  getItems: [],
  amountItems: 0,
  totalPrice:0,
}

function App() {
  const [state,dispatch] = useReducer(reducer,defaultState)

  const getCartItems = async () => {
    const response = await fetch(url).then(response => response.json())
    response && dispatch({ type: 'REMOVE_LOADING' })
    dispatch({ type: 'GET_ITEMS', payload: response })
    
    const amount = response.reduce((res, num) => {
      return res + num.amount
    },0)
    dispatch({ type: "AMOUNT_IN_CART", payload: amount })
    
    const totalPrice = response.reduce((sum, amt) => {
      return sum + Number(amt.price)
    },0)
    dispatch({ type:"UPDATE_TOTAL_PRICE",payload:totalPrice})
  }

  useEffect(() => {
    getCartItems();
  }, [])

  if (state.isLoading) {
    return <Loading />
  }

  return (
    <appContext.Provider value={{getItems:state.getItems,amountItems:state.amountItems,dispatch,totalPrice:state.totalPrice}}>
      <div className="App">
        <Navbar />
        <div className='w-[90vw] max-w-3xl m-auto'>
          <h1 className='text-5xl text-center uppercase mt-[5rem] font-black tracking-widest'>your bag</h1>
          {Math.round(state.totalPrice) ? <Items /> : ""}
          <Total />
          {Math.round(state.totalPrice) ? <ClearBtn /> : <p className='text-2xl text-center tracking-widest mt-6 text-green-800'>is currently empty</p>}
        </div>
      </div>
    </appContext.Provider>
  );
}

export const useGlobalContext = () => useContext(appContext)

export default App;
