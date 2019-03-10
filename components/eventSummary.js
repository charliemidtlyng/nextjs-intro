import React from 'react'
import Link from 'next/link'
const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };

const EventSummary = ({event}) => (
  <Link href={`/event?id=${event.id}`} as={`/event/${event.id}`}>
    <div className='eventSummary'>
      <h1><i className="far fa-futbol"></i>{event.subject}</h1>
      <p>{new Date(event.startTime).toLocaleTimeString('nb-NO', dateOptions)}</p>
    <style jsx>{`
     .eventSummary {
       background-color: #212121;
       color: #fff;
       padding: 25px 15px;
       border-bottom: 2px solid #383737;
     }
     .eventSummary:hover {
      background-color: #383737;
      cursor: pointer;
    }
    i {
      margin-right: 10px;
    }
    p {
      margin: 0px;
      padding: 2px;
    }
    `}</style>
    </div>
    
  </Link>
)

export default EventSummary
