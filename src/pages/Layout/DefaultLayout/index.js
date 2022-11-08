import React from 'react';
import Header from '../../../components/Header';
import Sidenav from '../../../components/Sidenav';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="content">
        <Sidenav />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
