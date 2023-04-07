import React from "react";
import { LineChart, XAxis, YAxis, Tooltip, Line } from "recharts";
import { chartSize } from "./MinMaxChart";

const SingleLineChart = ({ data, unit, title }) => {
  return (
    <>
      <h5 className="mt-3">{title}</h5>
      <LineChart
        width={chartSize.width}
        height={chartSize.height}
        data={data}
        margin={{ top: 5, right: 5, left: -30, bottom: 5 }}
        stackOffset="sign"
      >
        <XAxis dataKey="formattedTime" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 10 }} />
        <Tooltip formatter={(value) => `${value}${unit}`} />
        <Line type="monotone" dataKey="value" stroke="#f53e3e" />
      </LineChart>
    </>
  );
};

export default SingleLineChart;
