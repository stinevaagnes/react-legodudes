import ShoppingCart from "./ShoppingCart";
import { useState } from "react";

export default function Header({cartItem, amount}){
    const [active, setActive] = useState(false)

    const cartHandler = () =>{
        setActive(!active) //! Utropstegn -> "blir det motsatte av hva som er der"
        console.log(active)
    }
    
    return (
         <header>
            <a href="index.html">
                <img src="images/LD_logo.svg" alt="LEGO-DUDES" />
            </a>
            <figure id="cart" role="button" onClick={cartHandler}>
                <span className="label">0</span>
                <img src="images/legocart.svg" alt="Handlekurv" />
            </figure>
            <ShoppingCart active={active} cartItem={cartItem} amount={amount}/>
        </header>
    )
}