import {useState} from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './qrgenerator.css';

const QrGenerator = () => {

    const [url, setUrl] = useState('');
    const [show, setShow] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setShow(true);
    };

    return(
        <>
        <div className='container'>
        <div className='card'>
        <form onSubmit={handleSubmit}>

        <div className='title'>
        <h3 className='title'>Qr Generator</h3>
        </div>

        <input type='url' 
        name ='url' value={url} 
        onChange={(e) => setUrl(e.target.value) } 
        placeholder='Enter you url'
        className='input-url'></input> 

        <div className='submit-qrcode'>
        <input type='submit' value="Generate QR"></input>
        </div>
        </form>

        {show && ( 
        <div 
        className='QRCODE'> 
        <QRCodeSVG value={url} className='QRCODE'/> 
        </div> 
        )}


        </div>

        </div>
        </>
    );




};

export default QrGenerator;