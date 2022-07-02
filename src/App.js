import React from 'react'

import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';

// import HomePage from './pages/HomePage';
// import {Navigate} from 'react-router-dom';
// import ContactUs from './components/contactForm';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Iphone 13 Pro',
          img: 'IMG_iphone13_600x600.jpg',
          desc: '123',
          category: 'IPhone',
          price: '999.99'
        },
        {
          id: 2,
          title: 'Iphone 13',
          img: 'IMG_iphone13nepro_600x600.jpg',
          desc: '123',
          category: 'IPhone',
          price: '799.99'
        },
        {
          id: 3,
          title: 'Iphone 11',
          img: 'IMG_iphone11_600x600.jpg',
          desc: '123',
          category: 'IPhone',
          price: '599.99'
        },
        {
          id: 4,
          title: 'AirPods Pro',
          img: 'IMG_airpodsPro600x600.jpg',
          desc: '123',
          category: 'Ear',
          price: '159.99'
        }, 
        {
          id: 5,
          title: 'IWatch 6',
          img: 'img_iWatch600x600.jpg',
          desc: '123',
          category: 'IWatch',
          price: '299.99'
        },
        {
          id: 6,
          title: 'MacBook Air 13',
          img: 'img_macBook600x600.jpg',
          desc: '123',
          category: 'MacBook',
          price: '5299.99'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }

    

    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  confirm() {
    return (
      console.log('sbc000')
    );
  }

  render(){
      return (
        <div className="wrapper">
          <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
          <Categories chooseCategory={this.chooseCategory}/>
          <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
          
          {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}
          <Footer/>
          {/* <ContactUs/> */}
          
        </div>
        
      )
    }

    onShowItem(item) {
      this.setState({fullItem: item})
      this.setState({showFullItem: !this.state.showFullItem})
    }

    chooseCategory(category) {
      if(category === 'All'){
        this.setState({ currentItems: this.state.items})
        return
      }

      this.setState({
        currentItems: this.state.items.filter(el => el.category === category)
      })
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }

    addToOrder(item) {
      let isInArray = false
      this.state.orders.forEach(el => {
        if(el.id === item.id)
        isInArray = true
      })
      if(!isInArray)
        this.setState({orders: [...this.state.orders, item] })
    }

    
  }
  
export default App;
