import CardWrapper from "../components/CardWrapper";
import TicketTable from "../components/TicketTable";
import Button from "../components/Button";

export default function ListTicketsPage() {
  return (
    <CardWrapper title="Feature Request Tracker">
      <h3>search box goes here</h3>
      <TicketTable></TicketTable>
      <Button text="Request new feature" />
    </CardWrapper>
  );
}
