import { Button } from "@/components/ui/button";
import { isMeasure } from "@/api/columns";
import { useStore } from "@/stores/store";
import { DragEvent } from "react";
import { X } from "lucide-react";
const MeasuresDrop = () => {
  const measures = useStore((store) => store.measures);
  const addMeasure = useStore((store) => store.addMeasure);
  const clearMeasure = useStore((store) => store.clearMeasure);
  const deleteMeasure = useStore((store) => store.deleteMeasure);

  const draggedColumn = useStore((store) => store.draggedColumn);

  const setDraggedColumn = useStore((store) => store.setDraggedColumn);
  function handleDragOver(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }
  function handleDrop(e: DragEvent<HTMLDivElement>) {
    if (isMeasure(draggedColumn!)) addMeasure(draggedColumn);
    setDraggedColumn(null);
  }

  return (
    <div className="flex items-center justify-between gap-3 ">
      <p className="w-24">Measures</p>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="flex w-full justify-between rounded-md border-2 border-black"
      >
        <div className="flex items-center gap-3 overflow-x-auto px-2">
          {!!measures.length &&
            measures.map((m) => (
              <p
                key={m.name}
                className="flex items-center gap-2 rounded-md border border-slate-500 px-2 text-lg"
              >
                {m?.name}{" "}
                <X
                  onClick={() => deleteMeasure(m)}
                  className="cursor-pointer text-red-600 active:text-red-800"
                />
              </p>
            ))}
        </div>
        <Button onClick={clearMeasure} className="rounded-sm">
          Clear
        </Button>
      </div>
    </div>
  );
};

export default MeasuresDrop;
