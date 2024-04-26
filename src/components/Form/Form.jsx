
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import Swal from 'sweetalert2';
import './style.css';


export default function Form() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_pb2hu5c', 'template_8obl1qj', form.current, {
                publicKey: 'jPTg6AwD5wytX51-3',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    Swal.fire({
                        title: 'Thank you for your message!',
                        text: 'I will get back to you as soon as possible.',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    Swal.fire({
                        title: 'Oops!',
                        text: 'Something went wrong. Please try again.',
                        icon: 'error',
                        confirmButtonText: 'Close'
                    })
                },
            );
        e.target.reset();
    };
    return (
        <ContactFormStyling>

                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" placeholder='Enter your name here' />
                        <label>Email</label>
                        <input type="email" name="user_email" placeholder='Enter your email address here' />
                        <label>Message</label>
                        <textarea name="message" placeholder='Please type your message here' />
                        <input type="submit" value="Send" />
                    </form>

        </ContactFormStyling>

    )
}

// Styles
const ContactFormStyling = styled.div`
  width: 500px;
    margin: 0 auto;
    padding-bottom: 2rem;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;