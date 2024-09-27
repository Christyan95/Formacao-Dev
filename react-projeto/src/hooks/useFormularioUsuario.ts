import { useState } from "react";

export default function useFormularioUsuario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function salvar() {
    console.log('Nome', nome);
    console.log('Email', email);
    console.log('Senha', senha);
  }

  return{
    nome,
    setNome,
    email,
    setEmail,
    senha,
    setSenha,
    salvar
  }
}