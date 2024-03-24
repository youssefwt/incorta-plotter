import { useData } from "@/api/data";
import { useStore } from "@/stores/store";

const PlotChart = () => {
  const dimension = useStore((store) => store.dimension?.name);
  const storeMeasures = useStore((store) => store.measures);
  const measures = storeMeasures.map((m) => m.name);
  console.log("measures", measures);
  console.log("dimension", dimension);
  const { data } = useData(dimension, measures);
  console.log("data", data);
  return <div>{JSON.stringify(data)}</div>;
};

export default PlotChart;
