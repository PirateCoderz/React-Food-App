import React, { useContext } from 'react';
import CartIcon from '../../Carts/CartIcon';
import classes from './CartButton.module.css';
import CartContext from '../../../store/cart-context';


const CartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
        return (curNum + item.amount);
    }, 0);
    return ( 
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span className={classes.cartText}>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
     );
}
 
export default CartButton;