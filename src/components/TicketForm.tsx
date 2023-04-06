import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "./Button";
import useCreateTicket from "../hooks/useCreateTicket";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-block: 2rem;
`;

const FormRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
  padding-block: 1rem;
  border-bottom: 1px solid grey;
`;

const Label = styled.label`
  width: 50%;
  margin-right: 20px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 50%;
  height: 30px;
  border: none;
  &:focus {
    outline: none;
  }
`;

const Select = styled.select`
  width: 50%;
  height: 30px;
  border: none;
  &:focus {
    outline: none;
  }
  padding: 0;
`;

export default function TicketForm() {
  const crm = ["Robin Beck", "Ben Borin", "Dan Potter", "Johnny Zhou"];

  const [formDataState, setFormDataState] = useState({
    title: "",
    client: "",
    crm: "",
  });

  function changeHandler(e: any) {
    // e here is the input event object
    let name = e.target.name;
    let value = e.target.value;
    setFormDataState((prev: any) => {
      return {
        ...prev, //use the spread operator ... to include everything in prev
        [name]: value, //using ES6 computed property name.
      };
    });
  }

  //create ticket logic
  const { isLoading, error, response, postTicket } = useCreateTicket();

  const navigate = useNavigate();

  //handle submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postTicket(formDataState);
    if (response) {
      alert("Ticket Created");
      navigate("/list");
    }
  };

  return (
    <Form>
      <FormRow>
        <Label>Title *</Label>
        <Input
          type="text"
          id="title"
          name="title"
          placeholder="Enter title"
          onChange={changeHandler}
        />
      </FormRow>

      <FormRow>
        <Label>Client *</Label>
        <Input
          type="text"
          id="client"
          name="client"
          placeholder="Enter client name"
          onChange={changeHandler}
        />
      </FormRow>

      <FormRow>
        <Label>e3 Contact *</Label>
        <Select id="crm" name="crm" onChange={changeHandler}>
          <option value="" selected disabled>
            -- select crm --
          </option>
          {crm.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </FormRow>

      <br />

      <Button icon="add" text="Request Feature" onClick={handleSubmit} />
    </Form>
  );
}
