import { useState } from 'react';
import './App.css'
import ContentPage from './components/ContentPage';
import Header from './components/Header';
import Nav from './components/Nav';
import './css/main.css'

const cartStart = [
  {
    id: 0,
    title: "",
    price: 0, 

  }
]

function App() {
  const [cartItem, setCartItem] = useState([...cartStart])
  const [amount, setAmount] = useState(0)
  const [id, setId] = useState(0)

  return (
    <div className="container">
      <Header cartItem={cartItem} amount={amount} id={id}/>
      <Nav/>
      <ContentPage cartItem={cartItem} setCartItem={setCartItem} setAmount={setAmount}/>
     </div>
  );
}

export default App;
