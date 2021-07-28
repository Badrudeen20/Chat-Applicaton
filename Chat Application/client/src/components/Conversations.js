import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider';

export default function Conversations() {
  const { conversations, selectConversationIndex } = useConversations()


  return (
    <ListGroup variant="flush">
     {conversations.map((conversation, index) => (
        <ListGroup.Item
          key={index}
          action
          onClick={() => selectConversationIndex(index)}
          active={conversation.selected}
          className="bg-success"
        >
          {conversation.recipients.map(r => r.name)}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

