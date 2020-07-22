import navStyles from '../styles/Nav.module.css';
import headerStyles from '../styles/Header.module.css';
import mainStyles from '../styles/Main.module.css';
import prodSecOneStyles from '../styles/ProdSecOne.module.css';
import { bool, number, string } from 'prop-types';
// Hooks
import {
  useOnClickOutside,
  useWindowSize,
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
  useLayoutEffect,
  useEffect,
  useState,
  useRef
} from 'react';
//

export default function Home() {
  const node = useRef();
  const [open, setOpen] = useState(false);
  // const [dy, setWidth] = useState(0);
  // const [dx, setHeight] = useState(0);

  const xy = useWindowSize();

  // useLayoutEffect(() => {
  //   console.log(window.innerWidth);
  //   setWidth(window.innerWidth / 2);
  //   setHeight(window.innerWidth / 2);
  // });

  const adjustDimensions = () => {
    console.log('its listening');
    let xy = useWindowSize();
    setWidth(xy[0] / 2);
    setHeight(xy[1] / 2);
    console.log(xy[0], xy[1]);
  }

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
          <h1>Grab you customer's attention here.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, nihil adipisci dicta ex temporibus dolores consectetur impedit natus nobis! Optio, cum dolorum animi sapiente sequi sint explicabo nostrum dolore similique.</p>
          <section className={prodSecOneStyles.FourSquareImgs}>
            <div className={prodSecOneStyles.FourSquareImgRow}>
              <Square
                className={prodSecOneStyles.FourSquareImgDiv}
                w={xy[0] / 2} h={xy[1] / 2} />
              <Square
                className={prodSecOneStyles.FourSquareImgDiv}
                w={xy[0] / 2} h={xy[1] / 2} />
            </div>
            <div className={prodSecOneStyles.FourSquareImgRow}>
              <Square
                className={prodSecOneStyles.FourSquareImgDiv}
                w={xy[0] / 2} h={xy[1] / 2} />
              <Square
                className={prodSecOneStyles.FourSquareImgDiv}
                w={xy[0] / 2} h={xy[1] / 2} />
            </div
          </section>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error modi nostrum natus explicabo quo. Aliquid sit, dolores animi, tempora molestiae fugiat perferendis, iste eveniet ducimus consectetur vitae consequuntur saepe enim.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ullam voluptatum, at libero necessitatibus, distinctio suscipit dolorem repellendus pariatur tenetur enim. Quam est doloribus provident deleniti. Eum ea voluptatem voluptates.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error modi nostrum natus explicabo quo. Aliquid sit, dolores animi, tempora molestiae fugiat perferendis, iste eveniet ducimus consectetur vitae consequuntur saepe enim.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ullam voluptatum, at libero necessitatibus, distinctio suscipit dolorem repellendus pariatur tenetur enim. Quam est doloribus provident deleniti. Eum ea voluptatem voluptates.</p>
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
