import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [formData, setFormData] = useState({name:"",subject:"",email:"",message:""});

  
  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams={
      name:formData.name,
      body:formData.message,
      subject:formData.subject,
      email:formData.email,
    }
    // var data = details;
    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_PUBLIC_KEY)
    .then((result) => {
        // console.log("Result",result.text);
        alert("Thank You")
    }, (error) => {
        // console.log("Error",error);
        alert("Error")
    });
    e.target.reset();
  };
  const handleChange = (name,value)=>{
    // console.log(value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <Form onSubmit={sendEmail} className="m-5 p-3 contact-form">
      <h5 className='text-white'>Get in Touch</h5>
      <Form.Group className="m-3 " controlId="formName">
        <Form.Control name="name" value={formData.name} onChange={(e)=>handleChange("name",e.target.value)} className="text-white bg-dark" type="text" placeholder="Your Name" />
      </Form.Group>
      <Form.Group className="m-3" controlId="formBasicEmail">
        <Form.Control name="email" value={formData.email} onChange={(e)=>handleChange("email",e.target.value)} className="text-white bg-dark" type="email" placeholder="Your Email" />
      </Form.Group>

      <Form.Group className="m-3" controlId="formSubject">
        <Form.Control name="subject" value={formData.subject} onChange={(e)=>handleChange("subject",e.target.value)} className="text-white bg-dark" type="text" placeholder="Subject" />
      </Form.Group>
      <Form.Group className="m-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control name="message" value={formData.message} as="textarea" onChange={(e)=>handleChange("message",e.target.value)} className="text-white bg-dark" rows={5} placeholder='Your message'/>
      </Form.Group>
      <button style={{width:"95%"}}  className="m-3 pt-2 pb-2 rounded mr-3 send-button" type="submit">
        Send Message <FontAwesomeIcon icon={faPaperPlane}/> 
      </button>
    </Form>
  )
}

export default ContactForm