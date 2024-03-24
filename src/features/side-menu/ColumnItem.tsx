import { Column } from "@/api/columns";

const ColumnItem = ({ item }: { item: Column }) => {
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
