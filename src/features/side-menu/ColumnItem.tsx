import { Column, Dimension, Measure } from "@/api/columns";

type ComponentProps<T extends Measure | Dimension> = {
  item: T;
};

const ColumnItem = <T extends Measure | Dimension>({
  item,
}: ComponentProps<T>) => {
  return (
    <p
      draggable
      className="cursor-grab py-1 hover:bg-accent/80 active:cursor-grabbing"
    >
      {item.name}
    </p>
  );
};

export default ColumnItem;
