import { Dimension, Measure, useColumns } from "@/api/columns";
import { Separator } from "components/ui/separator";
import ColumnItem from "./ColumnItem";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

function ColumnTooltip({ content }: { content: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Info size={20} color="grey" />
        </TooltipTrigger>
        <TooltipContent align="start">
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

const SideMenu = () => {
  const { data, isLoading, isFetching } = useColumns();
  const loading = isLoading || isFetching;
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <div className="flex items-center gap-5">
          <h4 className="text-lg underline">Dimensions</h4>
          <ColumnTooltip content="Drag one dimension" />
        </div>
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
        <div className="flex items-center gap-5">
          <h4 className="text-lg underline">Measures</h4>
          <ColumnTooltip content="Drag one or more measures" />
        </div>
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
