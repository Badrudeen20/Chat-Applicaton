import React, { useRef,useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default function Login({ onIdSubmit }) {
  const [error,setError] = useState(false);
  const idRef = useRef()
  const  containsAlphabet = /^[0-9]+$/;
  function handleSubmit(e) {
    e.preventDefault()
    if(!containsAlphabet.test(idRef.current.value)){
      setError(true)
      return
    }
     onIdSubmit(idRef.current.value)
  }

  return (
    <Container className="align-items-center d-flex" style={{ height: '100vh' }}>
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter Your No.</Form.Label>
          <Form.Control type="text" ref={idRef} required />
          {error && <Form.Label style={{fontSize:"13px",color:"red"}}>Number Is Not Valid</Form.Label>}
        </Form.Group>   
        <Button type="submit" className="mr-2 bg-success border-0">Login</Button>
      
      </Form>
    </Container>
  )
}
