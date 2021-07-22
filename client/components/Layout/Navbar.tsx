import React, { useState } from 'react';
import tw from 'twin.macro';
import LogoSVG from '../LogoSVG';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <Nav>
      <LogoSVG />
      <ul
        tw='bg-lightGray absolute w-full left-0 top-full transform transition duration-150 origin-top scale-y-0'
        css={[isMobileOpen && tw`scale-y-100`]}
      >
        <MenuListItem>
          <a href='#start'>Strona główna</a>
        </MenuListItem>
        <MenuListItem>
          <a href='#start'>Strona główna</a>
        </MenuListItem>
      </ul>
      <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
        <i className='fas fa-bars' tw='text-4xl text-darkGray'></i>
      </button>
    </Nav>
  );
};

const Nav = tw.nav`flex justify-between items-center p-4 relative`;
const MenuListItem = tw.li`p-4 text-center border-b border-gray-400 last:border-0`;

export default Navbar;
