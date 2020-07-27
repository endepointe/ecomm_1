import prodSecTwoStyles from '../styles/ProdSecTwo.module.css';
import StarIcon from '@material-ui/icons/Star';

export default function CarouselItem(props) {

  console.log(props.product.item);

  return (
    <div>
      <img src="https://via.placeholder.com/150X300" />
      <h4>{props.product.item}</h4>
      <p>Category type</p>
      <p>{props.product.price}</p>
      <span>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </span>
    </div>
  )
};