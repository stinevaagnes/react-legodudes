import Form from "./Form";
import ProductCategory from "./ProductCategory";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";


export default function Product({name, cat, price, img, prodid, cartItem, setCartItem, setAmount}){

    const handleClick = () =>{
        setCartItem((prev) => [
            {title: name, price: price, prodid: prodid}, ...prev
        ])
        console.log(cartItem)
        setAmount((prev) => prev + Number(price))
    }

    return (
        <article className="product-card">
            <img src={"./images/PROD_"+img} alt={"Produktbilde" + img} />
            <ProductTitle name={name}  />
            <ProductCategory cat={cat} />
            <ProductPrice price={price} />
            <Form name={name} handleClick={handleClick}/>
        </article>
    )
}