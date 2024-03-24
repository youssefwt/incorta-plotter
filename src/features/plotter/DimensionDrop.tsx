import { isDimension } from "@/api/columns";
import { Button } from "@/components/ui/button";
import { useStore } from "@/stores/store";
import { DragEvent } from "react";

const DimensionDrop = () => {
  const dimension = useStore((store) => store.dimension);
  const addDimension = useStore((store) => store.addDimension);
  const clearDimension = useStore((store) => store.clearDimension);
  const draggedColumn = useStore((store) => store.draggedColumn);
  const setDraggedColumn = useStore((store) => store.setDraggedColumn);

  console.log("dimesnion", dimension);
  function handleDragOver(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }
  function handleDrop(e: DragEvent<HTMLDivElement>) {
    console.log("drop", e);
    if (isDimension(draggedColumn!)) addDimension(draggedColumn);
    setDraggedColumn(null);
  }
  return (
    <div className="flex items-center justify-between gap-3 ">
      <p>Dimension</p>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="flex w-full justify-between rounded-md border-2 border-black"
      >
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
