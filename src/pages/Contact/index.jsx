import React, { useEffect, useRef, useState } from 'react';
import emailjs from "@emailjs/browser"
import Loader from 'react-loaders';
import AnimatedLetters from '../../components/AnimatedLetters';
import './contact.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e)=>{
        e.preventDefault()
        emailjs
            .sendForm('contact_service', 'contact_form', form.current, 'SqRbtJu7Zhygbla8e')
            .then(()=> {
                alert("Message envoyé avec succès !")
                window.location.reload(false)
                }, 
                ()=> {
                alert("Oups ! Une erreur est survenue lors de l'envoi de votre message, essayez encore !")

                });
    }    

    return (
        <>
            <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={'Contact'.split('')} index={15}/>
                </h1>
                <p>
                    Je suis intéressée par les opportunités de freelance - en particulier par les petits projets. Toutefois, si vous avez d'autres demandes ou
                    questions, n'hésitez pas non plus à me contacter en utilisant le formulaire ci-dessous.
                </p>
                <hr/>
                <p>
                    I am interested in freelance opportunities - especially on small or meddium
                    projects. However, if you have any other requests or
                    questions, don't hesitate to contact me using below form either.
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name='name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type="email" name='email' placeholder='Email' required/>
                            </li>
                            <li>
                                <input type="text" name='subject' placeholder='Subject/Objet' required/>
                            </li>
                            <li>
                                <textarea name="message" id="message" cols="30" rows="10" placeholder='Votre/Your message' required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='btn' value="Send"/>
                            </li>
                        </ul>
                    </form>     
                </div>
            </div>
            </div>
            <Loader type='pacman'/>
        </>
    );
};

export default Contact;