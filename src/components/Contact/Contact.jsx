import styles from './Contact.module.css'
import Nav from './../nav/Nav.jsx'
import Footer from './../Footer/Footer.jsx'
import ReactInputMask from 'react-input-mask'
import { useState } from 'react'

const Contact = () => {

    const [phone, setPhone] = useState('')

    return (
        <>
            <Nav />
            <div className={styles.content}>
                <div className={styles.contact_header}>
                    <p className={styles.p1}>Contate-nos</p>
                    <h3 className={styles.h3}>Para consultas ou perguntas</h3>
                    <p className={styles.p2}>Por favor, use o formulário abaixo ou entre em contato via <a className={styles.link} href="https://api.whatsapp.com/send/?phone=5533987289728&text&type=phone_number&app_absent=0">WhatsApp.</a></p>
                </div>
                <form action="https://formsubmit.co/neonventura@gmail.com" method='POST' className={styles.form}>

                    <input type="hidden" name="_autoresponse" value="Agradecemos pela mensagem, retornaremos em breve!" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://construcy.vercel.app/contato"></input>

                    <label className={styles.label} for="first-name">Primeiro Nome</label>
                    <input className={styles.input} type="text" id="first-name" name="first-name" />

                    <label className={styles.label} for="last-name">Último Nome</label>
                    <input className={styles.input} type="text" id="last-name" name="last-name" />

                    <label className={styles.label} for="email">Email *</label>
                    <input className={styles.input} type="email" id="email" name="email" required />

                    <label className={`${styles.label} ${styles.number}`} for="number">Número</label>
                    <ReactInputMask 
                        className={styles.number}
                        name='number'
                        mask={"(99) 99999-9999"}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    /> 

                    <label className={styles.label} for="subject">Objetivo</label>
                    <input className={styles.input} type="text" id="subject" name="subject" />

                    <label for="message">Nos mande uma menssagem...</label>
                    <textarea className={styles.textarea} id="message" name="message"></textarea>
                    <button type='submit' className={styles.btn}>Enviar</button>
                </form>
            </div>
            <img className={styles.img} src="/services/img-5.webp" alt="" />
            <Footer />
        </>
    )
}

export default Contact





