/* eslint-disable react/no-danger */
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { Content } from '../styles/Layout';
import Navbar from './UI/Navbar/NavigationBar';
import Footer from './UI/Footer/Footer';

const Layout = (props) => {
  const { children } = props;
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
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
