import prodSecTwoStyles from '../styles/ProdSecTwo.module.css';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import StarIcon from '@material-ui/icons/Star';
// Components
import CarouselItem from '../components/CarouselItem';
//
import {
  useEffect,
  useState,
} from 'react';

export default function Carousel(props) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(props.products);
  }, []);

  console.log(typeof products);

  return (
    <div className={prodSecTwoStyles.Carousel}>

      <button
        className={prodSecTwoStyles.CarouselBtn}
        aria-label="product carousel left">
        <ChevronLeftIcon />
      </button>

      <CarouselItem />
      <CarouselItem />

      <button
        className={prodSecTwoStyles.CarouselBtn}
        aria-label="product carousel right">
        <ChevronRightIcon />
      </button>

    </div>
  )
}