import {
  Area,
  AreaChart,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const IncomeGraph = ({
  data,
  selectedMonth,
}: {
  data: any;
  selectedMonth?: string | null;
}) => {
  const selectedPoint = data.find(
    (item: { name: string }) => item.name === selectedMonth
  );
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: -80,
          bottom: -10,
        }}
      >
        <XAxis
          dataKey="name"
          axisLine={false}
          padding={{ left: 30 }}
          tickLine={false}
          tick={{ fill: "#B6B6B6", fontSize: 12 }}
        />
        <YAxis tick={false} axisLine={false} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="projectedIncome"
          stroke="#000000"
          fill="#00000010"
          strokeWidth={2}
          fillOpacity={0.2}
        />
        <Area
          type="monotone"
          dataKey="actualIncome"
          stroke="#00ff00"
          fill="#CCFFCD"
          strokeWidth={2}
          fillOpacity={0.5}
        />
        {selectedPoint && (
          <ReferenceDot
            x={selectedPoint.name}
            y={selectedPoint.actualIncome}
            r={8}
            fill="#00ff00"
            stroke="#ffffff"
            strokeWidth={5}
            label={{ value: `$${selectedPoint.actualIncome}`, position: "top" }}
          ></ReferenceDot>
        )}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default IncomeGraph;
