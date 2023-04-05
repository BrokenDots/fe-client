import styled from "styled-components";

const TicketRow = styled.tr<{ status: string }>`
  border: 1px solid #ddd;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  border-left: 0.4em solid
    ${(props) =>
      props.status === "BACKLOG"
        ? "#A5A5A5"
        : props.status === "IN_DEVELOPMENT"
        ? "#34905C"
        : "#498DC8"};
`;

const TicketCell = styled.td`
  padding: 1em;
  text-align: left;
`;

enum statusEnum {
  BACKLOG = "Backlog",
  PLANNED = "Planned",
  IN_DEVELOPMENT = "In development",
}

interface ITicketRowWrapperProps {
  id: number;
  title: string;
  client: string;
  crm: string;
  createdAt: number;
  status: "BACKLOG" | "PLANNED" | "IN_DEVELOPMENT";
}

export default function TicketRowWrapper({
  id,
  title,
  client,
  crm,
  createdAt,
  status,
}: ITicketRowWrapperProps) {
  return (
    <TicketRow key={id} status={status}>
      <TicketCell>{id}</TicketCell>
      <TicketCell>{title}</TicketCell>
      <TicketCell>{client}</TicketCell>
      <TicketCell>{crm}</TicketCell>
      <TicketCell>
        {new Date(createdAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </TicketCell>
      <TicketCell>{statusEnum[status]}</TicketCell>
      <TicketCell>...</TicketCell>
    </TicketRow>
  );
}
