import { useState, useEffect } from "react";

interface Ticket {
  title: string;
  client: string;
  crm: string;
  status: string;
}

interface UpdatedTicketProps {
  title?: string;
  client?: string;
  crm?: string;
  status?: string;
}

function useUpdateTicket(id: number) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ticket, setTicket] = useState<Ticket | null>(null);

  async function updateTicket({
    title,
    client,
    crm,
    status,
  }: UpdatedTicketProps) {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:3000/tickets/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          client,
          crm,
          status,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update ticket.");
      }

      const data = await response.json();
      setTicket(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    error,
    ticket,
    updateTicket,
  };
}

export default useUpdateTicket;
