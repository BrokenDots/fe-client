import { useState } from "react";

interface Ticket {
  title: string;
  client: string;
  crm: string;
}

interface PostResponse {
  success: boolean;
  message: string;
  data?: Ticket;
}

const useCreateTicket = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<PostResponse | null>(null);

  const postTicket = async (ticket: Ticket) => {
    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch("http://localhost:3000/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ticket),
      });
      const data = await res.json();

      setResponse(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, response, postTicket };
};

export default useCreateTicket;
