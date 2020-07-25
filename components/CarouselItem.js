import prodSecTwoStyles from '../styles/ProdSecTwo.module.css';
import StarIcon from '@material-ui/icons/Star';

export default function CarouselItem() {

  return (
    <div>
      <img src="https://via.placeholder.com/150X300" />
      <h4>product name</h4>
      <p>Category type</p>
      <p>price</p>
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