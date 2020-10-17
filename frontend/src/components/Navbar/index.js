import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuItems from '../../constants/menu_items';
import { NavBarItems, NavMenu, NavLink, MenuIcon, Logo } from './styles';
import IMAGES from '../../constants/images'

const Navbar = () => {
  const [ menuClicked, setMenuClicked ] = useState(false)

  return(
    <NavBarItems>
      <Logo src={IMAGES.LOGO}></Logo>
      <MenuIcon onClick={() => {setMenuClicked(!menuClicked)}}>
        <i className={menuClicked ? 'fas fa-times': 'fas fa-bars'} />
      </MenuIcon>
      <NavMenu active={menuClicked}>
        {
          MenuItems.map((item, idx) => {
            return (
              <Link key={idx} onClick={() => {setMenuClicked(!menuClicked)}} to={item.url}>
                <NavLink>
                  {item.title}
                </NavLink>
              </Link>
            )
          })
        }
      </NavMenu>
    </NavBarItems>
  );
};

export default Navbar;