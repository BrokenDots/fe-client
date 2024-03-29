import styled from "styled-components";

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`;

const TableHead = styled.thead`
  font-weight: 700;
`;

const TableBody = styled.tbody`
  & > div:nth-child(even) {
    background-color: #ccc;
  }
`;

const TableHeader = styled.th`
  padding: 1em;
  text-align: left;
`;

type ITicketTableProps = React.PropsWithChildren<{}>;

export default function TicketTable({ children }: ITicketTableProps) {
  return (
    <StyledTable>
      <TableHead>
        <TableHeader>#</TableHeader>
        <TableHeader>TITLE</TableHeader>
        <TableHeader>CLIENT</TableHeader>
        <TableHeader>CRM</TableHeader>
        <TableHeader>SUBMITTED</TableHeader>
        <TableHeader>STATUS</TableHeader>
      </TableHead>
      <TableBody>{children}</TableBody>
    </StyledTable>
  );
}
