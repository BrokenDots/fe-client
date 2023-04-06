import { useState } from "react";

type UseDeleteTicketResponse = {
  isLoading: boolean;
  error: Error | null;
  deleteTicket: () => Promise<void>;
};

function useDeleteTicket(id: number): UseDeleteTicketResponse {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  async function deleteTicket(): Promise<void> {
    setIsLoading(true);

    try {
      const response = await fetch(`http://localhost:3000/tickets/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    error,
    deleteTicket,
  };
}

export default useDeleteTicket;
