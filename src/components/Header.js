import React, {useState} from 'react';
// import { FaApplePay } from "react-icons/fa";
// import { FaApple } from "react-icons/fa";

import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';
// import App from 'App';

const showOrders = (props) => {

  

  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return(<div>
    {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
      <button className='confirm' onClick={() => this.confirm()}>Go to confirm</button>
  </div>)
}



const showNothing = () => {
  return (<div className='empty'>
    <h3>No products</h3>
  </div>)
}

 

export default function Header(props) {

let [cartOpen, setCartOpen] = useState(false)

  return (
      <header>
          <div>
              <span className='logo'>AppleJobing</span>
                <ul className='nav'>
                  <li>Mac</li>
                  <li>Iphone</li>
                  <li>AirPods</li>
                  <li>IWatch</li>
                  
                </ul>
                  <FaShoppingCart 
                  onClick={() => setCartOpen(cartOpen = !cartOpen)} 
                  className={`shop-cart-button ${cartOpen && 'active'}`}
                  />
                {cartOpen && (
                  <div className='shop-cart'>
                      {props.orders.length > 0 ?
                      showOrders(props) : showNothing()}
                  </div>)}
          </div>
          <div className='presentation'>
          </div>
      </header>
    
  )
}


