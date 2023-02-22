import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import { cartItemChangeActions } from '../../store/index';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, price, description } = props;

  const addItemsHandler = () => {
    dispatch(cartItemChangeActions.addItemToCart({
      id,
      title,
      price,
      description
    }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button  onClick={addItemsHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
