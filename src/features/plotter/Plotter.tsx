import DimensionDrop from "./DimensionDrop";
import MeasuresDrop from "./MeasuresDrop";
import PlotChart from "./PlotChart";

const Plotter = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <DimensionDrop />
        <MeasuresDrop />
      </div>
      <PlotChart />
    </div>
  );
};

export default Plotter;
