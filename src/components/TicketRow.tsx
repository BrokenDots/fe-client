import styled from "styled-components";
import ActionMenu from "./ActionMenu";

const TicketRow = styled.tr<{ status: string }>`
  &:nth-child(even) {
    background-color: var(--background-color);
  }
  border-left: 0.4em solid
    ${(props) =>
      props.status === "BACKLOG"
        ? "var(--yellow)"
        : props.status === "IN_DEVELOPMENT"
        ? "var(--blue)"
        : "var(--purple)"};
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
      <TicketCell>
        <ActionMenu ticketId={id} />
      </TicketCell>
    </TicketRow>
  );
}
