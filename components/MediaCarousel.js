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
    this.addToCart = this.addToCart.bind(this);
    this.store = props.shopifyStore;
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  addToCart(e, item) {
    e.preventDefault();
    console.log('add to cart')
    console.log(e.target.elements[0])
  }

  render() {

    console.log(this.store);

    const settings = {
      dots: false,
      infinite: true,
      speed: 600,
      autoplay: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
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
            <form
              onSubmit={this.addToCart}
              className={prodSecFourStyles.CarouselItem}>
              <h4>{this.store[0].node.title}</h4>
              <img src={this.store[0].node.images.edges[0].node.transformedSrc} alt="" />
              <p>{this.store[0].node.description}</p>
              <p>$ {parseInt(this.store[0].node.priceRange.maxVariantPrice.amount) / 100}</p>
              <button>Buy</button>
            </form>

            <div className={prodSecFourStyles.CarouselItem}>
              <h4>{this.store[1].node.title}</h4>
              <img src={this.store[1].node.images.edges[0].node.transformedSrc} alt="" />
              <p>{this.store[1].node.description}</p>
              <p>$ {parseInt(this.store[1].node.priceRange.maxVariantPrice.amount) / 100}</p>
              <button>Buy</button>
            </div>

            <div className={prodSecFourStyles.CarouselItem}>
              <h4>{this.store[2].node.title}</h4>
              <img src={this.store[2].node.images.edges[0].node.transformedSrc} alt="" />
              <p>{this.store[2].node.description}</p>
              <p>$ {parseInt(this.store[2].node.priceRange.maxVariantPrice.amount) / 100}</p>
            </div>

            <div className={prodSecFourStyles.CarouselItem}>
              <h4>{this.store[3].node.title}</h4>
              <img src={this.store[3].node.images.edges[0].node.transformedSrc} alt="" />
              <p>{this.store[3].node.description}</p>
              <p>$ {parseInt(this.store[3].node.priceRange.maxVariantPrice.amount) / 100}</p>
            </div>

            <div className={prodSecFourStyles.CarouselItem}>
              <h4>{this.store[4].node.title}</h4>
              <img src={this.store[4].node.images.edges[0].node.transformedSrc} alt="" />
              <p>{this.store[4].node.description}</p>
              <p>$ {parseInt(this.store[4].node.priceRange.maxVariantPrice.amount) / 100}</p>
            </div>

            <div className={prodSecFourStyles.CarouselItem}>
              <h4>{this.store[5].node.title}</h4>
              <img src={this.store[5].node.images.edges[0].node.transformedSrc} alt="" />
              <p>{this.store[5].node.description}</p>
              <p>$ {parseInt(this.store[5].node.priceRange.maxVariantPrice.amount) / 100}</p>
            </div>

            <div className={prodSecFourStyles.CarouselItem}>
              <h4>{this.store[6].node.title}</h4>
              <img src={this.store[6].node.images.edges[0].node.transformedSrc} alt="" />
              <p>{this.store[6].node.description}</p>
              <p>$ {parseInt(this.store[6].node.priceRange.maxVariantPrice.amount) / 100}</p>
            </div>
          </Slider>
        </div>
        <div className={prodSecFourStyles.CarouselBtns}>
          <button
            className={prodSecFourStyles.CarouselBtnRight}
            onClick={this.previous}>
            <ChevronLeftIcon fontSize="large" />
          </button>
          <button
            className={prodSecFourStyles.CarouselBtnRight}
            onClick={this.next}>
            <ChevronRightIcon fontSize="large" />
          </button>
        </div>
      </div>
    );
  }
}