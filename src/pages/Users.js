import React from 'react';
import { Table } from 'antd';

import { useState, useEffect } from 'react';

const Users = () => {
  const { Column } = Table;
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();

      setUser(data.splice(0,5));
    };
    getData();
  }, []);

  const handleDelete = (id) => {
    const newListUser = user.filter((item) => item.id !== id);
    setUser(newListUser);
  };

  return (
    <div className="users_wrapper">
      <p className="users_wrapper_title">Manage Users</p>
      <div className="users_wrapper_table">
        <Table className="table" dataSource={user}>
          <Column title="Name" dataIndex="name" />
          <Column title="User Name" dataIndex="username" />
          <Column title="Email" dataIndex="email" />
          <Column title="Phone" dataIndex="phone" />
          <Column
            title="Action"
            key="id"
            render={(item) => (
              <button className="table_btn" onClick={() => handleDelete(item.id)}>
                Delete
              </button>
            )}
          />
        </Table>
      </div>
    </div>
  );
};

export default Users;
