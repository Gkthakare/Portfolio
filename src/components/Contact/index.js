import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState,useEffect, useRef} from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer,TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_zpb69nu', 
        'contact_form', 
        form.current, 
        'bjSUxFeet8cssS8K8')
      .then((result) => {
          console.log(result.text);
          alert('Message Successfully Sent!')
          window.location.reload(false)
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message!, please try again later.')
      });
  };

    useEffect(() => {
        setTimeout(() => { 
            setLetterClass('text-animate-hover');
        }, 4000);
    }, []);

    
    return (
        <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass = {letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M','e']} 
                    idx = {15} 
                    />
                </h1>
                <p>
                    I'm Interested in freelance opportunities, especially major
                    projects,However,if any problem or question arises, please 
                    feel free to contact me using below contact information.
                </p>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required/>
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required/>
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder="Subject" required/>
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input className='flat-button' type="submit" value="Send"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Gaurav Thakare,
                <br/>
                India,
                <br/>
                Veer Sawarkar Nagar <br />
                Nashik <br />
                <span>gkthakare01@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[20.01820747364768, 73.75501631098358]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[20.01820747364768, 73.75501631098358]}>
                        <Popup>Gaurav Lives Here! Please come for a cup of coffee 😄</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}
export default Contact