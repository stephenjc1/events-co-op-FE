import { navigate } from '@reach/router';
import React, { useRef } from 'react';
import { createEvent } from '../api';


export default function PostEvent() {
  // const [loading, setLoading] = useState(false);
  const typeRef = useRef();
  const locationRef = useRef();
  const datetimeRef = useRef();
  const hostRef = useRef();
  const detailsRef = useRef();


 function handleSubmit(ev) {
  ev.preventDefault();
  const newEvent = { type: typeRef.current.value, location: locationRef.current.value, date_time: datetimeRef.current.value, host: hostRef.current.value, details: detailsRef.current.value };
  createEvent(newEvent).then(() => {
    navigate("/")
  });
}


  return (
    <>
    <h1>COMPLETE THIS FORM</h1>  
     <form onSubmit={handleSubmit}>
            <label>Game Type</label>
            <input
              type="text"
              id="type"
              name="type"
              placeholder="Game type"
              required
              ref={typeRef}
            ></input>
            <label>Location</label>
            <input
              id="location"
              name="location"
              placeholder="Location"
              required
              ref={locationRef}
            ></input>
            <label>Date and Time</label>
            <input
              id="date_time"
              name="date_time"
              placeholder="Date and Time"
              required
              ref={datetimeRef}
            ></input>
            <label>Host</label>
            <input
              id="host"
              name="host"
              placeholder="Host"
              required
              ref={hostRef}
            ></input>

            <label>Details</label>
            <textarea
              id="details"
              name="details"
              placeholder="Details"
              required
              ref={detailsRef}
            ></textarea>

        <button >
          Submit
        </button>
      </form>
    </>
  );
};

