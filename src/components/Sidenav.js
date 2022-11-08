import React from 'react';

const Sidenav = () => {
  return (
    <div className="sidenav_wrapper">
      <div className="sidenav_wrapper_control">
        <ul className="list">
          <li>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <a href="/user">Users</a>
          </li>
          <li>
            <a href="/">Setting</a>
          </li>
          <li>
            <a href="/">Help</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
