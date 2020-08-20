import React, { FC, ReactChild } from 'react';
import Head from 'next/head';
import { Content } from '../styles/Layout';
import Navbar from './UI/Navbar/NavigationBar';
import Footer from './UI/Footer/Footer';

interface Props {
  children: ReactChild;
}

const Layout: FC<Props> = (props: any) => {
  const layoutStyle = {
    height: '100%',
    width: '100%',
  };

  return (
    <div className='Layout' style={layoutStyle}>
      <Head>
        <meta
          name='copyright'
          content={`© ${new Date().getFullYear()} Canada Cannabyss`}
        />
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=UA-145329492-1'
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-145329492-1');
              `,
          }}
        />
      </Head>

      <Navbar />
      <Content>{props.children}</Content>
      <Footer />
    </div>
  );
};

export default Layout;
