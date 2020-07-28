import prodSecFourStyles from '../styles/ProdSecFour.module.css';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import React, { Component } from "react";
import Slider from "react-slick";

export default class MediaCarousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
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
      speed: 400,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className={prodSecFourStyles.Carousel}>
        <div className={prodSecFourStyles.Slider}>
          <Slider ref={c => (this.slider = c)} {...settings}>
            <div className={prodSecFourStyles.CarouselItem}>
            </div>
            <div className={prodSecFourStyles.CarouselItem}>
            </div>
            <div className={prodSecFourStyles.CarouselItem}>
            </div>
            <div className={prodSecFourStyles.CarouselItem}>
            </div>
            <div className={prodSecFourStyles.CarouselItem}>
            </div>
            <div className={prodSecFourStyles.CarouselItem}>
            </div>
          </Slider>
        </div>
        <div className={prodSecFourStyles.CarouselBtns}>
          <button
            className={prodSecFourStyles.CarouselBtnRight}
            onClick={this.previous}>
            <ChevronLeftIcon />
          </button>
          <button
            className={prodSecFourStyles.CarouselBtnRight}
            onClick={this.next}>
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    );
  }
}