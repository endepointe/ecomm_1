import prodSecTwoStyles from '../styles/ProdSecTwo.module.css';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CarouselItem from '../components/CarouselItem';
import React, { Component } from "react";
import Slider from "react-slick";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.products = props.products;
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <div className={prodSecTwoStyles.Carousel}>
        <div className={prodSecTwoStyles.Slider}>
          <Slider ref={c => (this.slider = c)} {...settings}>
            {Object.values(this.products).map((product, i) =>
              <CarouselItem key={i} product={product} />
            )}
          </Slider>
        </div>
        <div className={prodSecTwoStyles.CarouselBtns}>
          <button
            className={prodSecTwoStyles.CarouselBtnRight}
            onClick={this.previous}>
            <ChevronLeftIcon />
          </button>
          <button
            className={prodSecTwoStyles.CarouselBtnRight}
            onClick={this.next}>
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    );
  }
}