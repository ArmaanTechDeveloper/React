export default function EventList({handleOnClick,events,showEvents}) {
  return (
    <div>
      {showEvents && events.map((event , index)=>(
        <div key={event.id}>
          <h1>{index} - {event.title}</h1>
          <button onClick={()=>handleOnClick(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  )
}
