import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Customized,
} from "recharts";

import CustomizedLabel from "./CustomizedLabel";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

function compare(a, b) {
  if (a.pv < b.pv) {
    return 1;
  }
  if (a.pv > b.pv) {
    return -1;
  }
  return 0;
}

data.sort(compare);

function BarGraph() {
  const barColors = ["#4c8bf5", "#dc2424", "#fcda00", "#8383ba", "#23dbbd"];
  return (
    <ResponsiveContainer width="100%" height="100%" aspect={2}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 60,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <defs>
          {barColors.map((color, index) => (
            <linearGradient
              id={`colorUv${index}`}
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              spreadMethod="reflect"
            >
              <stop offset="0" stopColor="#1a1a1a" />
              <stop offset="1" stopColor={color} />
            </linearGradient>
          ))}
        </defs>
        <Tooltip />
        <Legend />
        <Bar
          dataKey="pv"
          fill="#8884d8"
          barSize={40}
          label={<CustomizedLabel></CustomizedLabel>}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={`url(#colorUv${index})`} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarGraph;
