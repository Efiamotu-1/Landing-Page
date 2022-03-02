import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    pv: 8400,
  },
  {
    name: 'Feb',
    pv: 6398,
  },
  {
    name: 'Mar',
    pv: 4800,
  },
  {
    name: 'Apr',
    pv: 7208,
  },
  {
    name: 'May',
    pv: 9800,
  },
  {
    name: 'June',
    pv: 3800,
  },
  {
    name: 'July',
    pv: 4300,
  },
  {
    name: 'Aug',
    pv: 4300,
  },
  {
    name: 'Sep',
    uv: 9300,
  },
  {
    name: 'Oct',
    pv: 4300,
  },
  {
    name: 'Nov',
    pv: 4300,
  },
];

export default function Chart() {

  
    return (
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <Bar dataKey="pv" fill="#edf2f7" />
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  }

