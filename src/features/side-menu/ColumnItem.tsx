import { Dimension, Measure, isDimension, isMeasure } from "@/api/columns";
import { cn } from "@/lib/utils";
import { useStore } from "@/stores/store";
import { Check } from "lucide-react";

type ComponentProps<T extends Measure | Dimension> = {
  item: T;
};

const ColumnItem = <T extends Measure | Dimension>({
  item,
}: ComponentProps<T>) => {
  const storeDimension = useStore((store) => store.dimension);
  const storeMeasures = useStore((store) => store.measures);
  const setDraggedColumn = useStore((store) => store.setDraggedColumn);
  let matchItem: boolean | undefined;

  function handleDragStart() {
    setDraggedColumn(item);
  }

  if (isDimension(item)) {
    storeDimension?.name === item.name
      ? (matchItem = true)
      : (matchItem = false);
  } else if (isMeasure(item)) {
    matchItem = !!storeMeasures.find((m) => m.name === item.name);
  }
  return (
    <div className="flex items-center justify-between">
      <p
        onDragStart={handleDragStart}
        draggable={!matchItem}
        className={cn(
          "flex-1  py-1 hover:bg-accent/80 ",
          !matchItem && "cursor-grab active:cursor-grabbing",
        )}
      >
        {item.name}
      </p>
      {matchItem && <Check color="green" />}
    </div>
  );
};

export default ColumnItem;
