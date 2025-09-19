// import { useState } from 'react';
import './Modal.css'

interface Props{
    type: string;
    onClose: () => void;
}

export default function Modal({ type, onClose }: Props) {
    // const [fahrenheit, setFahrenheit] = useState<number>();
    // const [celsius, setCelsius] = useState<number>();

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2 className='title'>{type}</h2>

          <div className='inputs'>
            <div>
                <h3 className='subTitle'>Fahrenheit</h3>
                <input 
                    className='inputModal'
                    type='number'
                    // onChange={(e) => setFahrenheit()}
                />
            </div>

            <div>
                <h3 className='subTitle'>Celsius</h3>
                <input className='inputModal' type='number' />
            </div>
          </div>

          <button className='closeButton'>Calcular</button>

          <div className='resultados'>
                <h4>Resultado: </h4>
          </div>
          <button className="closeButton" onClick={onClose}>Fechar</button>
        </div>
      </div>
    );
  }
  