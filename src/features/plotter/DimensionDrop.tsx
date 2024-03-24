import { Button } from "@/components/ui/button";
import { useStore } from "@/stores/store";

const DimensionDrop = () => {
  const dimension = useStore((store) => store.dimension);
  const clearDimension = useStore((store) => store.clearDimension);
  console.log("dimesnion", dimension);
  return (
    <div className="flex items-center justify-between gap-3 ">
      <p>Dimension</p>
      <div className="flex w-full justify-between rounded-md border-2 border-black">
        <div className="flex items-center gap-3 px-2">
          <p className="rounded-md border border-slate-500 px-2 text-lg">
            {dimension?.name}
          </p>
        </div>
        <Button onClick={clearDimension} className="rounded-sm">
          Clear
        </Button>
      </div>
    </div>
  );
};

export default DimensionDrop;
