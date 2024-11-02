"use client"

import { useState } from "react";

export const IMC = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [result, setResult] = useState('');
  const [show, setShow] = useState(false);


  const handleClick = () => {

    const Naltura = parseFloat(altura.replace(',', '.'));
    const Npeso = parseFloat(peso.replace(',', '.'));

    if (Naltura > 0 && Npeso > 0) {
      const resultado = (Npeso / (Naltura * Naltura)).toFixed(2);
      setResult(resultado);
      setShow(true);
    }

  }

  const handleReset = () => {
    setAltura('');
    setPeso('');
    setResult('')
    setShow(false);
  }


  return (
    <div>
      {
        !show &&
        <div>
          <input
            type="text"
            value={altura}
            onChange={e => setAltura(e.target.value)}
          />
          <input
            type="text"
            value={peso}
            onChange={e => setPeso(e.target.value)}
          />
          <button onClick={handleClick}>Calcular</button>
        </div>
      }

      {
        show &&
        <div>
          <input
            type="text"
            value={altura}
            onChange={e => setAltura(e.target.value)}
            disabled={true}
          />
          <input
            type="text"
            value={peso}
            onChange={e => setPeso(e.target.value)}
            disabled={true}
          />
          <button onClick={handleReset}>Limpar</button>
          <div>
            Resultado:
          </div>

          <div>
            {result}
          </div>

        </div>

      }

    </div>
  );
}