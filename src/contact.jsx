import React, { useState } from 'react';
import './App.css';
import firebase from './firebase.js';







const ContactList = () => {

    const [Name, setTitle] = useState('')
    const [Email, setTime] = useState('')
    const [Phone, setPhone] = useState('')
    const [Subject, setSubject] = useState('')
    const [Message, setMessage] = useState('')

    function onSubmit(e) {
        e.preventDefault()

        firebase
            .firestore()
            .collection('Contact Us Entries')
            .add({
                Name,Email, Phone, Subject, Message
            })
            .then(() => {
                setTitle('')
                setTime('')
                setPhone('')
                setSubject('')
                setMessage('')
            })
    }

    return(

                    <div class="Form" onSubmit={onSubmit}> 
                        <form>
                        <div class="input-fields">
                            <input type="text" class="input" placeholder="Name" value={Name} onChange={e => setTitle(e.currentTarget.value) }  />
                            <input type="text" class="input" placeholder="Email Address" value={Email} onChange={e => setTime(e.currentTarget.value)}  />
                            <input type="text" class="input" placeholder="Phone" value={Phone} onChange={e => setPhone(e.currentTarget.value) }  />
                            <input type="text" class="input" placeholder="Subject" value={Subject} onChange={e => setSubject(e.currentTarget.value) }  />
                        </div>
                        <div class="msg">
                            <textarea placeholder="Message" value={Message} onChange={e => setMessage(e.currentTarget.value) }> </textarea>
                            <button class="btn">send</button>
                        </div>
                        </form>

                        <div class="dets">
                            <h1>Reach us at:</h1>
                          <h2> Phone: <br/>+91 7755000005 <br/> <br/> Email: tektriad@gmail.com</h2>
                        </div>
                    </div>
    )


};
export default ContactList;