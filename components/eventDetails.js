import React from 'react';

const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };

const EventDetails = ({event}) => (
    <div className='eventDetails'>
      <h1>{event.subject}</h1>
      <h3>{new Date(event.startTime).toLocaleTimeString('nb-NO', dateOptions)}</h3>
      <h2>Påmeldte:</h2>
      <ul>{event.participants.filter(p => !p.reserve).map(p => <li key={p.id}>{p.name}</li>)}</ul>
      <h2>Reserveliste:</h2>
      <ul>{event.participants.filter(p => p.reserve).map(p => <li key={p.id}>{p.name}</li>)}</ul>
      <pre-wrap>{event.description}</pre-wrap>
    <style jsx>{`
     .eventDetails {
       background-color: #212121;
       color: #FFF;
       padding: 25px 15px;
     }
    `}</style>
    </div>
)

export default EventDetails
