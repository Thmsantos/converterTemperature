import './Footer.css'
import fatecLogo from '../../../public/fatec.png';

export default function Footer() {
    return (
        <footer className="footer">
            <a  href="https://fatecdiadema.cps.sp.gov.br/" className="footer-text">
                <img className='footerImg' src={fatecLogo}/>
            </a>
            <div className="footer-links">
                <a href="https://github.com/Thmsantos/converterTemperature" target="_blank" rel="noreferrer">
                    GitHub
                </a>
                <a href="https://www.instagram.com/fatec.diadema/" target="_blank" rel="noreferrer">
                    Instagram
                </a>
            </div>
        </footer>
    )
}
