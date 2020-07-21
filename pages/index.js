import navStyles from '../styles/Nav.module.css';
import headerStyles from '../styles/Header.module.css';
// Nav Icons
import MenuIcon from '@material-ui/icons/Menu';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
//
import Head from 'next/head'

import {
  useState,
} from 'react';

export default function Home() {

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
        <button 
          onClick={toggleMenu}
          className={navStyles.MenuBtn}>
          <MenuIcon
            className={navStyles.MenuIcon}
            fontSize='large'
            aria-label="menu" />
        </button>
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

      <aside 
        className={navStyles.HiddenMenu}>
        hidden content
      </aside>

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
