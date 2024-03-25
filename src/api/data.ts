import { useQuery } from 'react-query';
import { useToast } from "@/components/ui/use-toast";

type DataItem = {
    name: string;
    values: (string | number)[];
}


type AnalysisData = {
    name: string;//of dimension
    [key: string]: string | number; // Allow dynamic fields for measures.
}


async function fetchData(dimension: string, measures: string[]): Promise<AnalysisData[]> {
    const response = await fetch('https://plotter-task-8019e13a60ac.herokuapp.com/data'
        , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ dimension, measures })
        });
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const responseData: {data:DataItem[]} = await response.json();
    // Extract dimension and measure data
    const dimensionValues = responseData.data[0].values;
    const measureData = responseData.data.slice(1);

    // Create an array of objects containing product data
    const transformedData: AnalysisData[] = dimensionValues.map((productName, index) => {
        const product: AnalysisData = {
            name: productName as string
        };

        // Dynamically map cost, revenue, units sold, and potentially other fields
        measureData.forEach(measure => {
            product[measure.name] = measure.values[index];
        });

        return product;
    });

    return transformedData;
}

export function useData(dimension: string | undefined, measures: string[]) {
    const { toast } = useToast();
    return useQuery<AnalysisData[] , Error>([dimension, measures], () =>  fetchData(dimension!, measures) , {
        enabled: !!dimension && !!measures.length,
        onError: (_error) => {
            toast({ variant: "destructive", title: "Error fetching data, please try again" });
        }
    });
}