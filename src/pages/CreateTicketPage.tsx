import CardWrapper from "../components/CardWrapper";
import TicketForm from "../components/TicketForm";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import useCreateTicket from "../hooks/useCreateTicket";

export default function CreateTicketsPage() {
  //hold form state
  const [formDataState, setFormDataState] = useState({
    title: "",
    client: "",
    crm: "",
  });

  //use the custom hook for making post request
  const { isLoading, error, response, postTicket } = useCreateTicket();

  const navigate = useNavigate();

  //handle submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postTicket(formDataState);

    navigate("/list");
  };

  return (
    <CardWrapper title="New Feature Request">
      <TicketForm
        formDataState={formDataState}
        setFormDataState={setFormDataState}
      />
      <Button icon="add" text="Request Feature" onClick={handleSubmit} />
    </CardWrapper>
  );
}
