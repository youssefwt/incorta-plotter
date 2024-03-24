import { Column } from "@/api/columns";

const ColumnItem = ({ item }: { item: Column }) => {
  return (
    <p draggable className="cursor-move py-1 hover:bg-accent/80">
      {item.name}
    </p>
  );
};

export default ColumnItem;
