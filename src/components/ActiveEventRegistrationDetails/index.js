import React from 'react'
import './index.css'

const ActiveEventRegistrationDetails = ({activeEvent}) => {
  const {name, location, registrationStatus} = activeEvent

  return (
    <div className="active-event-details">
      <p className="active-event-name">{name}</p>
      <p className="active-event-location">{location}</p>
      <p className="active-event-status">{`Status: ${registrationStatus}`}</p>
    </div>
  )
}

export default ActiveEventRegistrationDetails
