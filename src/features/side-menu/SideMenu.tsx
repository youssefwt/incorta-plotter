import { Dimension, Measure, useColumns } from "@/api/columns";
import { Separator } from "components/ui/separator";
import ColumnItem from "./ColumnItem";

const SideMenu = () => {
  const { data, isLoading, isFetching } = useColumns();
  const loading = isLoading || isFetching;
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h4 className="text-lg underline">Dimensions</h4>
        {!!loading &&
          !data &&
          [1, 2, 3].map((el) => (
            <p className="h-8 animate-pulse bg-accent" key={el}></p>
          ))}
        {!!data &&
          data.dimensions.map((dim) => (
            <ColumnItem<Dimension> key={dim.name} item={dim} />
          ))}
      </div>
      <Separator />
      <div className="space-y-1">
        <h4 className="text-lg underline">Measures</h4>
        {!!loading &&
          !data &&
          [4, 5, 6].map((el) => (
            <p className="h-8 animate-pulse bg-accent" key={el}></p>
          ))}
        {!!data &&
          data.measures.map((m) => (
            <ColumnItem<Measure> key={m.name} item={m} />
          ))}
      </div>
    </div>
  );
};

export default SideMenu;
