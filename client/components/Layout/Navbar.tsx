import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
import LogoSVG from '../LogoSVG';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const closeMobile = () => setIsMobileOpen(false);

    if (isMobileOpen) {
      document.addEventListener('click', closeMobile);
      return () => document.removeEventListener('click', closeMobile);
    }
  }, [isMobileOpen]);

  return (
    <Nav>
      <Link href='/' passHref>
        <a tw='lg:hidden'>
          <LogoSVG />
        </a>
      </Link>
      <ul
        tw='bg-gray-200 absolute z-50 w-full left-0 top-full transform transition duration-150 origin-top scale-y-0 lg:(scale-y-100 static bg-transparent flex items-center justify-around max-w-4xl mx-auto)'
        css={[isMobileOpen && tw`scale-y-100`]}
      >
        <MenuListItem>
          <MenuListLink href='/#start'>Strona główna</MenuListLink>
        </MenuListItem>
        <MenuListItem>
          <MenuListLink href='/#o-mnie'>O mnie</MenuListLink>
        </MenuListItem>
        <Link href='/' passHref>
          <a tw='lg:block hidden px-12'>
            <LogoSVG />
          </a>
        </Link>
        <MenuListItem>
          <MenuListLink href='/#kontakt'>Kontakt</MenuListLink>
        </MenuListItem>
        <MenuListItem>
          <Link href='/aktualnosci' passHref>
            <MenuListLink>Aktualności</MenuListLink>
          </Link>
        </MenuListItem>
      </ul>
      <button onClick={() => setIsMobileOpen(!isMobileOpen)} tw='lg:(hidden)'>
        <i className='fas fa-bars' tw='text-4xl text-darkGray'></i>
      </button>
    </Nav>
  );
};

const Nav = tw.nav`flex justify-between items-center p-4 relative border-b`;
const MenuListItem = tw.li`text-center border-gray-300 border-b last:border-0 lg:(border-0 py-2)`;
const MenuListLink = tw.a`block w-full h-full p-4 lg:(py-2 rounded-full) hover:(text-white bg-darkerGray) transition-colors duration-300`;

export default Navbar;
