import React, { useState } from 'react'
import { Modal, Form, Button ,ListGroup } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'
import { useConversations } from '../contexts/ConversationsProvider'

export default function NewConversationModal({ closeModal }) {
  const { contacts } = useContacts()
  const { createConversation ,conversations} = useConversations()
   
  
  function handleCheckboxChange(contactId) {
  
   let check = false
    conversations.map(conversation =>{
       if(contactId == conversation.recipients[0].id){
             check = true
           return
       }
    })
    if(check){
       return
    }else{
       createConversation([contactId])
    } 
  }

  return (
    <>
      <Modal.Header closeButton>Add People</Modal.Header>
      <Modal.Body>
        
          {contacts.map(contact => (
              <ListGroup>
               
              <ListGroup.Item 
              key={contact.id}
              onClick={() => handleCheckboxChange(contact.id)}
              className={`mb-2`} style={{cursor:"pointer"}} >
              {contact.name}
              </ListGroup.Item>
            </ListGroup>
          ))}
       
      </Modal.Body>
    </>
  )
}

/*
<Form onSubmit={handleSubmit}>
 <Form.Group controlId={contact.id} >
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            </Form.Group>
 <Button type="submit">Create</Button>
 </Form>
*/