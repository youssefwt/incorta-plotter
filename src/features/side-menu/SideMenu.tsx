import { useColumns } from "@/api/columns";
import { Separator } from "components/ui/separator";

const SideMenu = () => {
  const { data, isLoading, isFetching } = useColumns();
  console.log(data);
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
            <p
              draggable
              className="cursor-move py-1 hover:bg-accent/80"
              key={dim.name}
            >
              {dim.name}
            </p>
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
            <p
              draggable
              className="cursor-move py-1 hover:bg-accent/80"
              key={m.name}
            >
              {m.name}
            </p>
          ))}
      </div>
    </div>
  );
};

export default SideMenu;
