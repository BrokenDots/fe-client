import { useState, useEffect } from "react";

type ticket = {
  id: number;
  title: string;
  client: string;
  crm: string;
  createdAt: number;
  status: "BACKLOG" | "PLANNED" | "IN_DEVELOPMENT";
};

interface FetchedDataState {
  data: ticket[] | null;
  isLoading: boolean;
  error: Error | null;
}

export default function useFetchTickets(url: string): FetchedDataState {
  const [data, setData] = useState<ticket[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error: any) {
        setError(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
}
