import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
  Cell,
} from "recharts";
const BarChartGraph = ({
  data,
  selectedWeek,
}: {
  data: any;
  selectedWeek: string | null;
}) => {
  const selectedPoint = data.find(
    (item: { name: string }) => item.name === selectedWeek
  );
  const CustomBar = (props: any) => {
    const { x, y, width, height, fill } = props;
    return (
      <rect x={x} y={y} width={20} height={height} fill={fill} rx={16} ry={8} />
    );
  };
  const CustomDot = (props: any) => {
    const { cx, cy } = props;
    return (
      <>
        <circle
          cx={cx - 15}
          cy={cy - 4}
          r={10}
          fill="#000000"
          stroke="#ffffff"
          strokeWidth={5}
        />
        <circle cx={cx - 15} cy={cy - 4} r={4} fill="#00FF6B" />
      </>
    );
  };
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 15,
            right: 0,
            left: 15,
            bottom: -20,
          }}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#ffffff", fontSize: 12 }}
          />
          <YAxis hide />
          <Tooltip
            cursor={false}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-black text-white p-2 rounded">
                    +${payload[0].value}
                  </div>
                );
              }
              return null;
            }}
          />

          <Bar dataKey="value" shape={<CustomBar />}>
            {data.map((entry: any, index: any) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.name === selectedWeek ? "#000000" : "#00FF6B"}
              />
            ))}
          </Bar>
          {selectedPoint && (
            <ReferenceDot
              x={selectedPoint.name}
              y={selectedPoint.value}
              shape={<CustomDot />}
            />
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartGraph;
