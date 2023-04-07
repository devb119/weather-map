import { LineChart, XAxis, YAxis, Tooltip, Line } from "recharts";

export const chartSize = {
  width: 340,
  height: 200,
};

const MinMaxChart = ({ data, title }) => {
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
        <Tooltip formatter={(value) => `${value}°C`} />
        {/* <Legend /> */}
        <Line type="monotone" dataKey="max" stroke="#f53e3e" />
        <Line type="monotone" dataKey="min" stroke="#6a7bfe" />
      </LineChart>
    </>
  );
};

export default MinMaxChart;
