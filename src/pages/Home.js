import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Home = () => {
  
  const data = [
    {
      name: 'Tháng 1',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Tháng 2',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Tháng 3',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Tháng 4',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Tháng 5',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Tháng 6',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Tháng 7',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="home_wrapper">
      <div className="home_wrapper_total">
        <div className="home_wrapper_total_item">
          <p className="item_title">Tổng số CV</p>
          <p className="item_value">1000</p>
        </div>
        <div className="home_wrapper_total_item">
          <p className="item_title">Tổng người dùng</p>
          <p className="item_value">10</p>
        </div>
        <div className="home_wrapper_total_item">
          <p className="item_title">Số lượt truy cập</p>
          <p className="item_value">5000</p>
        </div>
        <div className="home_wrapper_total_item">
          <p className="item_title">Tổng thu nhập</p>
          <p className="item_value">$1000</p>
        </div>
      </div>

      <div className="home_wrapper_chart">
        <LineChart
          className="chart"
          width={900}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
};

export default Home;
