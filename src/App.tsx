import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import ListTicketsPage from "./pages/ListTicketsPage";
import CreateTicketsPage from "./pages/CreateTicketPage";
import EditTicketPage from "./pages/EditTicketPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/list" />} />
        <Route path="/list" element={<ListTicketsPage />} />
        <Route path="/create" element={<CreateTicketsPage />} />
        <Route path="/edit/:id" element={<EditTicketPage />} />
      </Routes>
    </Router>
  );
}

export default App;
