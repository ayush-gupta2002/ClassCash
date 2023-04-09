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
    name: "EE/85",
    cash: 2400,
  },
  {
    name: "EE/86",
    cash: 2210,
  },
  {
    name: "EE/102",
    cash: 2010,
  },
  {
    name: "EE/110",
    cash: 2000,
  },
  {
    name: "EE/20",
    cash: 1500,
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
        <CartesianGrid strokeDasharray="5 5" stroke="white" />
        <XAxis dataKey="name" stroke="white" />
        <YAxis dataKey="cash" stroke="white"></YAxis>
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
        <Bar
          dataKey="cash"
          fill="white"
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
