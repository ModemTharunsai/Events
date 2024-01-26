// EventsList.js
import React from 'react'
import EventItem from '../EventItem'
import './index.css'

const EventsList = ({eventsList, setActiveEvent}) => (
  <div className="events-list">
    {eventsList.map(event => (
      <EventItem key={event.id} event={event} setActiveEvent={setActiveEvent} />
    ))}
  </div>
)

export default EventsList
