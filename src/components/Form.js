import ShoppingButton from "./ShoppingButton"

export default function Form({name, handleClick}){
    const handleSubmit = (event) =>{
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            name="title"
            id="cart-item"
            type="hidden"  
            defaultValue={name}          
            />
            <ShoppingButton handleClick={handleClick}/>

        </form>
    )
}