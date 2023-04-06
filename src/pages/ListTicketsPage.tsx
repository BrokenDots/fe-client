import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import CardWrapper from "../components/CardWrapper";
import SearchBox from "../components/SearchBox";
import TicketTable from "../components/TicketTable";
import Button from "../components/Button";
import TicketRowWrapper from "../components/TicketRow";
import useFetchTickets from "../hooks/useFetchTickets";

import React, { useState, useEffect } from "react";

type ticket = {
  id: number;
  title: string;
  client: string;
  crm: string;
  createdAt: number;
  status: "BACKLOG" | "PLANNED" | "IN_DEVELOPMENT";
};

const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1em;
  margin-block: 2em;
`;

export default function ListTicketsPage() {
  const navigate = useNavigate();

  // fetch all the tickets using custom hook
  const { data, isLoading, error } = useFetchTickets(
    "http://localhost:3000/tickets"
  );

  //state for searchbox value
  const [searchTerm, setSearchTerm] = useState("");

  //state for holding filtered data
  const [filteredData, setFilteredData] = useState<ticket[]>([]);

  // filtering is done on the client side mainly through this hook
  // data is set  as a dependency so that the newFilteredArray can be populated as soon as the api returns data. ie the value changes from null to something.
  // it also runs when the search term changes
  // creates a new filtered array using the data returned from the api and the searchterm
  useEffect(() => {
    if (data != null) {
      if (searchTerm === "") {
        setFilteredData(data);
      } else {
        const newFilteredData = data.filter((item) =>
          Object.values(item).some((value) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
        setFilteredData(newFilteredData);
      }
    }
  }, [data, searchTerm]);

  function changeHandler(e: any) {
    setSearchTerm(e.target.value);
  }

  return (
    <CardWrapper title="Feature Request Tracker">
      <FilterContainer>
        <SearchBox
          placeholder="filter by title"
          value={searchTerm}
          onChange={changeHandler}
        />
        <Button icon="filter" text="Show filter options" disabled={true} />
        <Button icon="export" text="Export CSV" disabled={true} />
      </FilterContainer>

      <TicketTable>
        {!isLoading &&
          data != null &&
          filteredData.map((ticket: any) => (
            <TicketRowWrapper
              key={ticket.id}
              id={ticket.id}
              title={ticket.title}
              client={ticket.client}
              crm={ticket.crm}
              createdAt={ticket.createdAt}
              status={ticket.status}
            />
          ))}
      </TicketTable>
      <Button
        icon="add"
        text="Request new feature"
        onClick={() => navigate("/create")}
      />
    </CardWrapper>
  );
}
