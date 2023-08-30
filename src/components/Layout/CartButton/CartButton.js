import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../../Carts/CartIcon';
import classes from './CartButton.module.css';
import CartContext from '../../../store/cart-context';


const CartButton = (props) => {
    const [cartItemAdded, setCartItemAdded] = useState(false)
    const cartCtx = useContext(CartContext);
    
    const { items } = cartCtx;
    const btnClass = `${classes.button} ${ cartItemAdded ? classes.bump : ''}`;
    const numberOfCartItems = items.reduce((curNum, item) => {
        return (curNum + item.amount);
    }, 0);


    useEffect(()=> {
        if(items.length === 0) return;
        setCartItemAdded(true);
        
        const timer = setTimeout(() => {
            setCartItemAdded(false);
        }, 300);
        
        return () => {
            clearTimeout(timer);
        }
    }, [items])
    return ( 
        <button className={btnClass} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span className={classes.cartText}>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
     );
}
 
export default CartButton;