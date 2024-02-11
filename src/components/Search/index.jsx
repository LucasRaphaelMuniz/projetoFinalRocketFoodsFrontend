import { FiSearch } from "react-icons/fi";
import { Container } from "./styles";

import { Input } from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { api } from "../../services/api";



export function Search({ setSearch }) {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }
  
  return (
    <Container>
      <FiSearch onClick={handleBack}  />
      <Input
        placeholder="Busque por pratos ou ingredientes"
        onChange={(e) => setSearch(e.target.value)}
      />
    </Container>
  );
}
