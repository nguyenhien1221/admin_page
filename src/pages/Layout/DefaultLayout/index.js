import React from 'react';
import Header from '../../../components/Header';
import Sidenav from '../../../components/Sidenav';
import ScrollTop from 'src/components/ScrollTop';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="content">
        <Sidenav />
        <div>{children}</div>
      </div>
      <ScrollTop />
    </div>
  );
};

export default DefaultLayout;
