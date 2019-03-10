import React from 'react';

const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };

const EventDetails = ({event}) => (
    <div className='eventDetails'>
      <h1>{event.subject}</h1>
      <h3>{new Date(event.startTime).toLocaleTimeString('nb-NO', dateOptions)}</h3>
      <div className="participantContainer">
        <div className="participants">
          <h2>Påmeldte: ({event.participants.filter(p => !p.reserve).length})</h2>
          <ul>{event.participants.filter(p => !p.reserve).map(p => <li key={p.id}><i className="fas fa-check"></i>{p.name}</li>)}</ul>
        </div>
        <div className="reserves">
          <h2>Reserveliste: ({event.participants.filter(p => p.reserve).length})</h2>
          <ul>{event.participants.filter(p => p.reserve).map(p => <li key={p.id}><i className="fas fa-question"></i>{p.name}</li>)}</ul>
        </div>
      </div>
      <h3>Info</h3>
      <div className="info"><pre-wrap>{event.description}</pre-wrap></div>
    <style jsx>{`
     .eventDetails {
       background-color: #212121;
       color: #FFF;
       padding: 25px 45px;
     }
     ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li i {
      margin-right: 15px;
    }
    li i.fa-check {
      color: green;
    }
    li i.fa-question {
      color: orange;
    }
    li {
      padding: 7px 5px;
    }
    h1, h2, h3 {
      margin-bottom: 0;
    }
    .info {
      max-width: 600px;
    }
    .participants, .reserves {
      width: 250px;
    }
    .participantContainer {
      display: flex;
      flex-flow: wrap;
    }
    h2 {
      text-decoration: underline;
    }
    `}</style>
    </div>
)

export default EventDetails
