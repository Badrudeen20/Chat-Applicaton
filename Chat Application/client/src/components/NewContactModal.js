import React, { useRef, useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'

export default function NewContactModal({ closeModal }) {
  const [error,setError] = useState(false);
  const idRef = useRef()
  const nameRef = useRef()
  const { createContact } = useContacts()
  const  containsAlphabet = /^[0-9]+$/;
  
  function handleSubmit(e) {
    e.preventDefault()
    if(!containsAlphabet.test(idRef.current.value)){
      setError(true)
      return
    }
    createContact(idRef.current.value, nameRef.current.value)
    closeModal()
  }

  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>

          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Phone No.</Form.Label>
            <Form.Control type="text" ref={idRef} required />
            {error && <Form.Label style={{fontSize:"13px",color:"red"}}>Number Is Not Valid</Form.Label>}
          </Form.Group>
    
          <Button type="submit" className="bg-success border-0">Create</Button>
        </Form>
      </Modal.Body>
    </>
  )
}
