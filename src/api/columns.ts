import { useQuery } from 'react-query';

type Column= {
  name: string;
  function: string;
}

type ColumnResponse= {
  dimensions: Column[];
  measures: Column[];
}

async function fetchColumns(): Promise<ColumnResponse> {
  const response = await fetch('https://plotter-task-8019e13a60ac.herokuapp.com/columns');
  if (!response.ok) {
    throw new Error('Failed to fetch columns');
  }
  const data = await response.json();

  // Separate dimensions and measures
  const dimensions: Column[] = [];
  const measures: Column[] = [];
  data.columns.forEach((column: Column) => {
    if (column.function === 'dimension') {
      dimensions.push(column);
    } else if (column.function === 'measure') {
      measures.push(column);
    }
  });

  return { dimensions, measures };
}

export function useColumns() {
  return useQuery<ColumnResponse, Error>('columns', fetchColumns);
}
