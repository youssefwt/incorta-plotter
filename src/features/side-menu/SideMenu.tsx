import { useColumns } from "@/api/columns";
import { Separator } from "components/ui/separator";

const SideMenu = () => {
  const { data } = useColumns();
  console.log(data);
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h4 className="text-lg underline">Dimensions</h4>
        {data
          ? data.dimensions.map((dim) => <p key={dim.name}>{dim.name}</p>)
          : "loading"}
      </div>
      <Separator />
      <div className="space-y-2">
        <h4 className="text-lg underline">Measures</h4>
        {data
          ? data.measures.map((m) => <p key={m.name}>{m.name}</p>)
          : "loading"}
      </div>
    </div>
  );
};

export default SideMenu;
