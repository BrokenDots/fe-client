import styled from "styled-components";

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

interface ITicketFormProps {
  formDataState: any;
  setFormDataState: any;
}

export default function TicketForm({
  formDataState,
  setFormDataState,
}: ITicketFormProps) {
  const crm = ["Robin Beck", "Ben Borin", "Dan Potter", "Johnny Zhou"];

  function changeHandler(e: any) {
    let name = e.target.name;
    let value = e.target.value;
    setFormDataState((prev: any) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

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
    </Form>
  );
}