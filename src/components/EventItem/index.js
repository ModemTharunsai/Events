// EventItem.js
import React from 'react'
import './index.css'

const EventItem = ({event, setActiveEvent}) => {
  const {id, imageUrl, name, registrationStatus} = event

  return (
    <div
      className="event-item"
      onClick={() => setActiveEvent(event)}
      key={id} // Add a unique key for each event item
    >
      <img src={imageUrl} alt="event" />
      <p className="event-name">{name}</p>
    </div>
  )
}

export default EventItem
