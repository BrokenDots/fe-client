import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import useDeleteTicket from "../hooks/useDeleteTicket";
import { useNavigate } from "react-router-dom";

const ActionMenuWrapper = styled.div`
  position: relative;
`;

const MenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  font-weight: bold;
`;

const MenuItems = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 0;
  z-index: 2;
  width: fit-content;
`;

const MenuItemHeading = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  white-space: nowrap;
  color: #959595;
  border-bottom: 2px solid #959595;
  margin-bottom: 0.25rem;
  padding-inline: 1rem;
`;

const MenuItem = styled.div`
  padding-inline: 1rem;
  padding-block: 0.5rem;
  cursor: disabled;
  white-space: nowrap;
  color: #0099ff;
  &:hover {
    background-color: #0099ff;
    color: white;
  }
`;

//custom hook to handle clicks outside of the 3 dots
function useOutsideClick(ref: any, callback: any) {
  function handleClickOutside(event: any) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

interface IActionMenuProps {
  ticketId: number;
}

export default function ActionMenu({ ticketId }: IActionMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const { isLoading, error, deleteTicket } = useDeleteTicket(ticketId);

  useOutsideClick(menuRef, () => setIsOpen(false));

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const navigate = useNavigate();

  async function handleDelete(ticketID: number) {
    await deleteTicket();
    alert("Ticket deleted");
    // Redirect to ticket list page or perform any other action here
    navigate("/", { replace: true }); // Refreshes the current page
  }

  return (
    <ActionMenuWrapper>
      <MenuIcon onClick={toggleMenu}>...</MenuIcon>
      {isOpen && (
        <MenuItems ref={menuRef}>
          <MenuItemHeading>Set status</MenuItemHeading>
          <MenuItem>Backlog</MenuItem>
          <MenuItem>Planned</MenuItem>
          <MenuItem>In development</MenuItem>
          <MenuItemHeading>Actions</MenuItemHeading>
          <MenuItem>Edit</MenuItem>
          <MenuItem onClick={() => handleDelete(ticketId)}>Delete</MenuItem>
        </MenuItems>
      )}
    </ActionMenuWrapper>
  );
}
