import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuItems from '../../constants/menu_items';
import IMAGES from '../../constants/images'
import './support.css'
import {
  NavBarItems,
  NavMenu,
  NavTitle,
  MenuIcon,
  Logo
} from './styles';

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
              <NavLink activeClassName="navbar_link_active" key={idx} onClick={() => {setMenuClicked(false)}} to={item.url}>
                <NavTitle>
                  {item.title}
                </NavTitle>
              </NavLink>
            )
          })
        }
      </NavMenu>
    </NavBarItems>
  );
};

export default Navbar;