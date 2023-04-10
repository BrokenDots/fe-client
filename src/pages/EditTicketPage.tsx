import { useParams } from "react-router-dom";
import CardWrapper from "../components/CardWrapper";
import TicketForm from "../components/TicketForm";
import Button from "../components/Button";
import { useState, useEffect } from "react";

import useFetchSpecificTicket from "../hooks/useFetchSpecificTicket";
import useUpdateTicket from "../hooks/useUpdateTicket";

import { useNavigate } from "react-router-dom";
import useValidation from "../hooks/useValidation";

export default function EditTicketsPage() {
  const { id } = useParams();

  const { data, isLoading, error } = useFetchSpecificTicket(
    `http://localhost:3000/tickets/${id}`
  );

  const [formDataState, setFormDataState] = useState({
    title: "",
    client: "",
    crm: "",
    status: "",
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      setFormDataState({
        title: data.title,
        client: data.client,
        crm: data.crm,
        status: data.status,
      });
    }
  }, [data]);

  // validation
  const { validate } = useValidation();

  let validationErrors;

  //handle submission
  const {
    isLoading: isLoadingUpdate,
    error: updateError,
    ticket,
    updateTicket,
  } = useUpdateTicket(Number(id));

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validationErrors = validate(formDataState);
    if (!validationErrors) {
      updateTicket(formDataState).then((res) => {
        alert("Ticket updated");
        navigate("/list");
      });
    } else {
      alert(validationErrors);
    }
  };

  return (
    <CardWrapper title="Edit Ticket">
      <TicketForm
        formDataState={formDataState}
        setFormDataState={setFormDataState}
      />
      <Button icon="add" text="Update Ticket" onClick={handleSubmit} />
    </CardWrapper>
  );
}
