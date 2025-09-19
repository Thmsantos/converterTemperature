import './Header.css';
import etecLogo from '../../../../public/etec.png';

export default function Header() {
    return (
        <div className="Header">
            <p className='headerText'>Conversor de temperatura</p>
            <img className='headerImg' src={etecLogo}/>
        </div>
    );
  }