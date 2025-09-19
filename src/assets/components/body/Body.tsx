import './Body.css';
import { RiCelsiusFill, RiFahrenheitFill } from "react-icons/ri";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from '../modal/Modal';

export default function Body(){
    const [showModal, setShowModal] = useState<boolean>(false);
    const [type, setType] = useState<string>()
    
    function fahrenheitToCelsius(){
        setType('Fahrenheit para celsius');
        setShowModal(true);
    }

    function celsiusToFahrenheit(){
        setType('Celsius para fahrenheit');
        setShowModal(true);
    }
  
    return(
        <div className="body">
            <div className='container'>
                <div className='containerIcons'>
                    <RiCelsiusFill style={{ fontSize: '100px' }} />
                    <FaArrowRight style={{ fontSize: '100px' }} />
                    <RiFahrenheitFill style={{ fontSize: '100px' }} />
                </div>

                <Button className='submitButton' onClick={() => celsiusToFahrenheit()} >Calcular</Button>
            </div>

            <div className='container'>
                <div className='containerIcons'>
                    <RiCelsiusFill style={{ fontSize: '100px' }} />
                    <FaArrowLeft style={{ fontSize: '100px' }} />
                    <RiFahrenheitFill style={{ fontSize: '100px' }} />
                </div>

                <Button className='submitButton' onClick={() => fahrenheitToCelsius()}>Calcular</Button>
            </div>

            {showModal && (
                <Modal
                type={type!}
                onClose={() => setShowModal(false)}
                />
            )}
        </div>
    )
}