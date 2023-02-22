import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/index';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const disptach = useDispatch();
  const cartHandler = () => {
    disptach(cartActions.cartToggle());
  };

  return (
      <button className={classes.button} onClick={cartHandler}>
        <span>My Cart</span>
        <span className={classes.badge}>1</span>
      </button>
  );
};

export default CartButton;
