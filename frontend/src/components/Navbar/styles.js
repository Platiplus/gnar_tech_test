import styled from 'styled-components/macro'
import media from 'styled-media-query'

export const NavBarItems = styled.nav`
  background-color: #263043;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;

  ${media.lessThan('medium')`
    position: relative;
  `}
`

export const Logo = styled.img`
  height: 100%;

  ${media.lessThan('medium')`
    position: absolute;
    top: 0;
    left: 0;
  `}
`

export const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 76vw;
  justify-content: end;

  a {
    color: #FFFFFF;
    text-decoration: none;
    &:hover {
        color: #FFFFFF;
    }
  }

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90.8vh;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;

    ${({ active }) => active && `
      background-color: #263043;
      left: 0;
      opacity: 1;
      transition: all 0.5 ease;
      z-index: 1;
    `}
  `}

`

export const MenuIcon = styled.div`
  display: none;
  color: #FFFFFF;

  ${media.lessThan('medium')`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
  `}
`

export const NavTitle = styled.li` 
  padding: 0.5rem 1rem;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }

  ${media.lessThan('medium')`
    text-align: left;
    padding: 1rem 0 1rem 1.5rem;
    width: 100%;
    display: table;

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 0;
    }
  `}
`