import navStyles from '../styles/Nav.module.css';
import headerStyles from '../styles/Header.module.css';
import mainStyles from '../styles/Main.module.css';
import prodSecOneStyles from '../styles/ProdSecOne.module.css';
import prodSecTwoStyles from '../styles/ProdSecTwo.module.css';
// Temp Icon for footer
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import StarIcon from '@material-ui/icons/Star';
//
import { bool, number, string } from 'prop-types';
// Hooks
import {
  useOnClickOutside,
  useWindowSizeX,
  useWindowSizeY,
  ShowWindowDimensions,
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
//

export default function Home() {
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
            <Link href="/"><a aria-label="link">link</a></Link>
            <Link href="/"><a aria-label="link">link</a></Link>
            <Link href="/"><a aria-label="link">link</a></Link>
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
        <br />
        <br />
        <article className={prodSecTwoStyles.Article}>
          <h1 className={prodSecTwoStyles.H1}>Top Sellers</h1>
          {'Carousel in dev while learning WP for you'}
          <section className={prodSecTwoStyles.ProdCarouselSec}>

            <div className={prodSecTwoStyles.Carousel}>

              <button
                className={prodSecTwoStyles.CarouselBtn}
                aria-label="product carousel left">
                <ChevronLeftIcon />
              </button>

              <div>
                <img src="https://via.placeholder.com/150X300" />
                <h4>product name</h4>
                <p>Category type</p>
                <p>price</p>
                <div>
                  <span>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>
                </div>
              </div>
              <div>
                <img src="https://via.placeholder.com/150X300" />
                <h4>product name</h4>
                <p>Category type</p>
                <p>price</p>
                <div>
                  <span>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>
                </div>
              </div>

              <button
                className={prodSecTwoStyles.CarouselBtn}
                aria-label="product carousel right">
                <ChevronRightIcon />
              </button>

            </div>
          </section>
          <p>Built with <FavoriteIcon fontSize="small" /> using NextJS.</p>
        </article>

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

Square.propTypes = {
  // width: string.isRequired,
  // height: string.isRequired,
}
