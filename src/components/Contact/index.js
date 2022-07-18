import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState,useEffect, useRef} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef

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
                    <form>
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
                                <input className='flat-button' type="submit" value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}
export default Contact