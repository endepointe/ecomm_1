import db from '../db/pgp/pgp';
import navStyles from '../styles/Nav.module.css';
import headerStyles from '../styles/Header.module.css';
import mainStyles from '../styles/Main.module.css';
import prodSecOneStyles from '../styles/ProdSecOne.module.css';
import prodSecTwoStyles from '../styles/ProdSecTwo.module.css';
import prodSecThreeStyles from '../styles/ProdSecThree.module.css';
import prodSecFourStyles from '../styles/ProdSecFour.module.css';

// lib
import { fetchAPI } from '../lib/api';
//

// Temp Icon for footer
import FavoriteIcon from '@material-ui/icons/Favorite';

//
import { bool } from 'prop-types';
// Hooks
import {
  useOnClickOutside,
  useWindowSizeX,
  useWindowSizeY,
} from '../hooks/hooks';
//
// Nav Icons
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
// Styled-components
import Burger from '../components/Burger';
import SideMenu from '../components/SideMenu';
import Square from '../components/Square';
//
// React Components
import dynamic from 'next/dynamic'
// import Carousel from '../components/Carousel';
const ProductCarousel = dynamic(import('../components/ProductCarousel'), {
  ssr: false
});
const MediaCarousel = dynamic(import('../components/MediaCarousel'), {
  ssr: false
});
//
// NextJS
import Head from 'next/head';
import Link from 'next/link';
//
// React
import {
  // useLayoutEffect,
  useEffect,
  useState,
  useRef
} from 'react';

// Shopify-Buy https://shopify.github.io/js-buy-sdk
import Client from 'shopify-buy';
const client = Client.buildClient({
  domain: process.env.STOREURL,
  storefrontAccessToken: process.env.STOREFRONTTOKEN,
});

import axios from 'axios';

export default function Home({ databaseProducts }) {

  const node = useRef();
  const [open, setOpen] = useState(false);
  const [dy, setWidth] = useState(useWindowSizeY());
  const [dx, setHeight] = useState(useWindowSizeX());

  // console.log(dy, dx);

  useEffect(() => {
    setWidth(window.innerWidth / 2);
    setHeight(window.innerWidth / 2);
  });

  useOnClickOutside(node, () => setOpen(false));
  const toggleMenu = () => {
    setOpen(!open);
  }

  return (
    <div>
      <Head>
        <title>Ecomm_1</title>
      </Head>

      <nav className={navStyles.Nav}>
        <div ref={node}>
          <SideMenu
            open={open}>
            <Link href="/"><a aria-label="Shop">Shop</a></Link>
            <Link href="/"><a aria-label="About Us">About Us</a></Link>
            <Link href="/"><a aria-label="Blog">Blog</a></Link>
          </SideMenu>
          <Burger
            open={open}
            onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </Burger>
        </div>
        <h1 className={navStyles.H1}>Company Name</h1>
        <ul className={navStyles.Ul}>
          <li className={navStyles.UlLi}>
            <button
              className={navStyles.AccountBtn}>
              <PersonRoundedIcon
                className={navStyles.AccountIcon}
                fontSize='large'
                aria-label="account" />
            </button>
          </li>
          <li className={navStyles.UlLi}>
            <button
              className={navStyles.CartBtn}>
              <ShoppingCartRoundedIcon
                className={navStyles.CartIcon}
                fontSize='large'
                aria-label="shopping cart" />
            </button>
          </li>
        </ul>
      </nav>

      <header className={headerStyles.Header}>
        <div className={headerStyles.H1s}>
          <h1 className={headerStyles.H1}>Time to start selling.</h1>
          <h2 className={headerStyles.H2}>Let me help.</h2>
        </div>
        <div className={headerStyles.ShopNowDiv}>
          <button className={headerStyles.ShopNowBtn}>
            Shop Now
            </button>
        </div>
      </header>

      <main className={mainStyles.Main}>
        <article className={prodSecOneStyles.Article}>
          <div className={prodSecOneStyles.DescDiv}>
            <h1 className={prodSecOneStyles.H1}>Grab your customer's attention here.</h1>
            <p className={prodSecOneStyles.P}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, nihil adipisci dicta ex temporibus dolores consectetur impedit natus nobis! Optio, cum dolorum animi sapiente sequi sint explicabo nostrum dolore similique.</p>
          </div>
          <section className={prodSecOneStyles.FourSquareImgs}>
            <div className={prodSecOneStyles.FourSquareImgRow}>
              <Square
                className={prodSecOneStyles.FourSquareImgDiv}
                w={dx} h={dy}>
                <div className={prodSecOneStyles.SquareOverlay}></div>
              </Square>
              <Square
                className={prodSecOneStyles.FourSquareImgDiv}
                w={dx} h={dy}>
                <div className={prodSecOneStyles.SquareOverlay}></div>
              </Square>
            </div>
            <div className={prodSecOneStyles.FourSquareImgRow}>
              <Square
                className={prodSecOneStyles.FourSquareImgDiv}
                w={dx} h={dy}>
                <div className={prodSecOneStyles.SquareOverlay}></div>
              </Square>
              <Square
                className={prodSecOneStyles.FourSquareImgDiv}
                w={dx} h={dy}>
                <div className={prodSecOneStyles.SquareOverlay}></div>
              </Square>
            </div>
          </section>
        </article>

        <article className={prodSecTwoStyles.Article}>
          <h1 className={prodSecTwoStyles.H1}>Top Sellers</h1>
          <section className={prodSecTwoStyles.ProdCarouselSec}>
            <ProductCarousel products={databaseProducts} />
          </section>
        </article>

        <article className={prodSecThreeStyles.Article}>
          <div className={prodSecThreeStyles.H1s}>
            <h1>Tell.</h1>
            <h1>Your.</h1>
            <h1>Story.</h1>
          </div>

          <p className={prodSecThreeStyles.P}>
            Use this section to give a brief overview of how your business operates. Is your business built with sustainability in mind? Are you family owned? This is your chance to connect with your customers who share the same values.
          </p>

          <div className={prodSecThreeStyles.Button}>
            <button>Learn more</button>
          </div>
        </article>

        <article className={prodSecFourStyles.Article}>
          <h1 className={prodSecFourStyles.H1}>Showcase your inventory.</h1>
          <MediaCarousel />
        </article>

        <p>Built with <FavoriteIcon fontSize="small" /> using NextJS.</p>

      </main>
    </div>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
}

SideMenu.propTypes = {
  open: bool.isRequired,
}

export async function getStaticProps() {

  const inventory = await db.manyOrNone('SELECT * FROM products;');

  const shopifyTest = await fetchAPI();

  console.log(shopifyTest);
  // client.product.fetchAll().then((products) => {
  //   console.log(products[4].options);
  // }).catch((error) => {
  //   console.log(error);
  // });

  // axios.get(`https://${process.env.SHOPIFY_STORE_API_KEY}:${process.env.SHOPIFY_STORE_PASSWORD}@${process.env.SHOPIFY_USERNAME}.myshopify.com/admin/api/2020-07/shop.json`).then((res) => {
  //   console.log(res.data);
  // }).catch((err) => {
  //   console.log(err);
  // });

  return {
    props: {
      databaseProducts: inventory,
    }
  }
}