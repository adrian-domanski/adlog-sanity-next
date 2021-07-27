import React from 'react';
import tw, { styled } from 'twin.macro';

interface IFooter {
  darkFooter?: boolean;
}

const Footer: React.FC<IFooter> = ({ darkFooter }) => {
  return (
    <StyledFooter darkFooter={darkFooter}>
      <p>
        Strona stworzona przez{' '}
        <a href='https://kodario.pl' target='_blank'>
          Kodario.pl
        </a>{' '}
        &copy; {new Date().getFullYear()}
      </p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer<{ darkFooter?: boolean }>(
  ({ darkFooter }) => [
    tw`flex mt-auto text-center justify-center p-4`,
    darkFooter && tw`bg-darkerGray text-white`,
  ]
);

export default Footer;
