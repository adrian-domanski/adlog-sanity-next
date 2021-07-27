import React from 'react';
import tw from 'twin.macro';
import Footer from './Footer';
import Navbar from './Navbar';
import Head from 'next/head';

interface ILayout {
  darkFooter?: boolean;
}

const Layout: React.FC<ILayout> = ({ children, darkFooter = false }) => {
  return (
    <>
      <Head>
        <title>Adlog - Blog technologiczny</title>
        <link rel='shortcut icon' href='/favicon.png' type='image/x-icon' />
        {/* Font awesome */}
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
          integrity='sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
        {/* Font */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap'
          rel='stylesheet'
        />
        {/* og tags */}
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Adlog - Blog technologiczny' />
        <meta
          property='og:description'
          content='Bądź na bieżąco ze wszystkimi zmianami w świecie technologi.'
        />
        <meta property='og:image' content='/ogImage.jpg' />
      </Head>
      <PageWrapper>
        <Navbar />
        <div>{children}</div>
        <Footer darkFooter={darkFooter} />
      </PageWrapper>
    </>
  );
};

const PageWrapper = tw.div`flex flex-col h-full`;

export default Layout;
