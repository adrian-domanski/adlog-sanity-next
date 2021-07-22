import React from 'react';
import tw from 'twin.macro';
import Footer from './Footer';
import Navbar from './Navbar';
import Head from 'next/head';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Adlog - Blog technologiczny</title>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
          integrity='sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
      </Head>
      <Navbar />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </div>
  );
};

const PageWrapper = tw.div``;

export default Layout;
