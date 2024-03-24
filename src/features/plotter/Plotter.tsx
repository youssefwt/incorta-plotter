import DimensionDrop from "./DimensionDrop";
import MeasuresDrop from "./MeasuresDrop";

const Plotter = () => {
  return (
    <div>
      <div className="space-y-3">
        <DimensionDrop />
        <MeasuresDrop />
      </div>
    </div>
  );
};

export default Plotter;
