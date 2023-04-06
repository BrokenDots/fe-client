import CardWrapper from "../components/CardWrapper";
import TicketForm from "../components/TicketForm";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import useCreateTicket from "../hooks/useCreateTicket";

import newTicketSchema from "../schemas/newTicketSchema";

export default function CreateTicketsPage() {
  //hold form state
  const [formDataState, setFormDataState] = useState({
    title: "",
    client: "",
    crm: "",
  });

  // validation
  function validate(data: any) {
    const { error } = newTicketSchema.validate(data, { abortEarly: false });
    if (!error) return null;
    return error;
  }

  //use the custom hook for making post request
  const { isLoading, error, response, postTicket } = useCreateTicket();

  let navigate = useNavigate();

  let validationErrors;

  //handle submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validationErrors = validate(formDataState);
    if (!validationErrors) {
      postTicket(formDataState).then((res) => {
        alert("Ticket created");
        navigate("/list");
      });
    } else {
      alert(validationErrors);
    }
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
