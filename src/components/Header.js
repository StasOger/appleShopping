import React, {useState} from 'react';
// import { FaApplePay } from "react-icons/fa";
// import { FaApple } from "react-icons/fa";

import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';
// import App from 'App';
import ContactUs from './contactForm';

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

const showForm = () => {
  return(<div name='form'>
     <ContactUs/>
  </div>
)}

const showNothing = () => {
  return (<div className='empty'>
    <h3>No products</h3>
  </div>)
}

 

export default function Header(props) {

let [cartOpen, setCartOpen] = useState(false)

let [formOpen, setFormOpen] = useState(false)

  return (
      <header>
          <div>
              <span className='logo'>AppleJobing</span>
                <ul className='nav'>
                  <li 
                    onClick={() => setFormOpen(formOpen = !formOpen)} 
                    className={`form-button ${formOpen && 'active'}`}>
                    
                    Chekout
                    
                  </li>
                  {formOpen && (
                    <div className='form'>
                        {props.orders.length > 0 ?
                        showForm(props) : showNothing()}
                    </div>)}
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


