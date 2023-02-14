export default function ShoppingCart({active, cartItem, amount}){

    return (
        <section id="cartview" className={active ? null : "hidden"}> 
            <h3>Din handlevogn</h3>
             <ul>
                {cartItem.length > 1 ?
                cartItem.map((item, index) => (
                    <li key={index}>
                        <span className="title">{item.title}</span>
                        <span className="price">{item.price},-</span>
                    </li>
                )): <li>Din handlevogn er tom.</li> }
                
            </ul>
            <p>Totalt: Kr. <span id="total">{amount}</span>,-</p>
        </section>
    )
}