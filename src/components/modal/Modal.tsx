import { useState } from 'react';
import './Modal.css';
import { IoMdClose } from "react-icons/io";

interface Props {
  type: 'Fahrenheit para celsius' | 'Celsius para fahrenheit';
  onClose: () => void;
}

export default function Modal({ type, onClose }: Props) {
  const [resultado, setResultado] = useState<number>();
  const [tempValue, setTempValue] = useState<number>();

  const conversor = () => {
    if (tempValue === undefined || isNaN(tempValue)) {
      setResultado(NaN);
      return;
    }

    if (type === 'Celsius para fahrenheit') {
      const res = (tempValue * 9) / 5 + 32;
      setResultado(res);
      return;
    }

    if (type === 'Fahrenheit para celsius') {
      const res = ((tempValue - 32) * 5) / 9;
      setResultado(res);
      return;
    }

    setResultado(NaN);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <div className="headerModal">
          <h2 className="title">{type}</h2>
          <IoMdClose className="closeIcon" onClick={onClose} />
        </div>

        <input 
          className="inputModal"
          type="number"
          placeholder="Digite a temperatura..."
          onChange={(e) => setTempValue(Number(e.target.value))}
        />

        <button className="calcButton" onClick={conversor}>Calcular</button>

        <div className="resultados">
          <h4>Resultado</h4>
          <p className="resultado-text">
            {resultado !== undefined && !isNaN(resultado) 
              ? resultado.toFixed(2) 
              : "Realize o cálculo"}
          </p>
        </div>
      </div>
    </div>
  );
}
