import { useData } from "@/api/data";
import { generateHexColor } from "@/lib/utils";
import { useStore } from "@/stores/store";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const HexMap: Record<string, string> = {
  Cost: "#36DCE4 ",
  "Units sold": "#AA36E4",
  Revenue: "#36E448",
};

const PlotChart = () => {
  const dimension = useStore((store) => store.dimension?.name);
  const storeMeasures = useStore((store) => store.measures);
  const measures = storeMeasures.map((m) => m.name);
  const { data } = useData(dimension, measures);
  return (
    <>
      {data && (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              left: 40,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {measures.map((m) => (
              <Line
                strokeWidth={2}
                type="monotone"
                dataKey={m}
                stroke={HexMap[m] || generateHexColor()}
                activeDot={{ r: 8 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default PlotChart;
