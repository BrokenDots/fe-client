import { useParams } from "react-router-dom";

export default function EditTicketsPage() {
  const { id } = useParams();
  return <h1>edit page for id : {id} here</h1>;
}
