'use client';

import { useState } from 'react';

interface ContadorProps {
  valorInicial?: number;
}

export default function Contador(props: ContadorProps) {
  const [numero, setNumero] = useState(props.valorInicial ?? 0);

  function decrementar() {
    setNumero(numero - 1);
  }

  function incrementar() {
    setNumero(numero + 1);
  }

  return (
    <>
      <h1>Contador</h1>

      <span>{numero}</span>

      <div className="flex gap-2">
        <button className="bg-red-500 p-2" onClick={decrementar}>
          Decrementar
        </button>
        <button className="bg-green-500 p-2" onClick={incrementar}>
          Incrementar
        </button>
      </div>
    </>
  );
}
