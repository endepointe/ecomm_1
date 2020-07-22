import navStyles from '../styles/Nav.module.css';
import headerStyles from '../styles/Header.module.css';
import { bool } from 'prop-types';
import { useOnClickOutside } from '../hooks/hooks';
// Nav Icons
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
// Styled-components
import Burger from '../components/Burger';
import SideMenu from '../components/SideMenu';
//
// NextJS
import Head from 'next/head';
import Link from 'next/link';
//
// React
import {
  useState,
  useRef
} from 'react';
//

export default function Home() {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
    console.log('toggle menu')
    let el = document.querySelector('.HiddenMenu');
    console.log(el);
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
    </div>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
}

SideMenu.propTypes = {
  open: bool.isRequired,
}
