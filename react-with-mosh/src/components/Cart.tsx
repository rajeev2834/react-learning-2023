import Button from "./Button";

interface Props{
    cartItems: string[],
    removeCartItem: () => void
}
function Cart({cartItems, removeCartItem}: Props){
    return(
        <>
        <div>Cart</div>
        <ul>
            {
                cartItems.map(item => <li key={item}>{item}</li>)
            }
        </ul>
        <Button color="danger" onClick={() => removeCartItem()}>Clear</Button>
        </>
    );
}

export default Cart;