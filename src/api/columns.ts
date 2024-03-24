import { useQuery } from 'react-query';
import { useToast } from "@/components/ui/use-toast";

export type Column= {
  name: string;
  function: "dimension"|"measure";
}
export type Dimension={
  name: string;
  function: "dimension";
}
export type Measure={
  name: string;
  function: "measure";
}

type ColumnResponse= {
  dimensions: Dimension[];
  measures: Measure[];
}
// Type guards for distinguishing between Dimension and Measure
export function isDimension(column: Column): column is Dimension {
  return column.function === 'dimension';
}
export function isMeasure(column: Column): column is Measure {
  return column.function === 'measure';
}

async function fetchColumns(): Promise<ColumnResponse> {
  const response = await fetch('https://plotter-task-8019e13a60ac.herokuapp.com/columns');
  if (!response.ok) {
    throw new Error('Failed to fetch columns');
  }
  const data = await response.json();

  // Separate dimensions and measures
  const dimensions: Dimension[] = [];
  const measures: Measure[] = [];
  data.columns.forEach((column: Column) => {
    if (isDimension(column)) {
      dimensions.push(column);
    } else if (isMeasure(column)) {
      measures.push(column);
    }
  });

  return { dimensions, measures };
}

export function useColumns() {
  const { toast } = useToast();

  return useQuery<ColumnResponse, Error>('columns', fetchColumns,{
    onError: error => {
        toast({variant: "destructive",title:"Error fetching columns, please try again"});
    }
  });
}
