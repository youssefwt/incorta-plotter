import { useQuery } from 'react-query';
import { useToast } from "@/components/ui/use-toast";

type DataItem = {
    name: string;
    values: (string | number)[];
}

type ResponseData = {
    data: DataItem[];
}



async function fetchData(dimension: string, measures: string[]): Promise<ResponseData> {
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
    return response.json();
}

export function useData(dimension: string | undefined, measures: string[]) {
    const { toast } = useToast();
    return useQuery<ResponseData|null, Error>([dimension, measures], () =>dimension? fetchData(dimension, measures):null, {
        enabled: !!dimension && !!measures.length,
        onError: error => {
            toast({ variant: "destructive", title: "Error fetching data, please try again" });
        }
    });
}