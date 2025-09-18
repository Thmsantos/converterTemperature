import './Body.css';
import { RiCelsiusFill, RiFahrenheitFill } from "react-icons/ri";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

export default function Body(){
    return(
        <div className="body">
            <div className='container'>
                <div className='containerIcons'>

                <RiCelsiusFill style={{ fontSize: '100px' }} />
                <FaArrowRight style={{ fontSize: '100px' }} />
                <RiFahrenheitFill style={{ fontSize: '100px' }} />
                </div>
                <Button variant="secondary">Secondary</Button>
            </div>

            <div className='container'>
                <RiCelsiusFill style={{ fontSize: '100px' }} />
                <FaArrowLeft style={{ fontSize: '100px' }} />
                <RiFahrenheitFill style={{ fontSize: '100px' }} />
                <Button variant="secondary">Secondary</Button>
            </div>
        </div>
    )
}