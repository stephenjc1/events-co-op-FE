import React, { Component } from 'react';
// import axios from "axios";
import { navigate, Link } from "@reach/router";
import Loader from '../components/Loader';
import { getEvents } from '../api';


class LandingPage extends Component {

  state = {
    events: [],
    isLoading: true
    }

   fetchEvents = () => {
    console.log("fetching")
    getEvents()
      .then(({ data: { events } }) => {
        this.setState({ events, isLoading: false })
      })
      // .catch(({ response }) => {
      //   console.dir(response);
      //   this.setState({
      //     error: { status: response.status, message: response.data.msg }
      //   })
      // })
  }


  componentDidMount() {
    this.fetchEvents();
  }

  render() {
    const { events, isLoading } = this.state
    if (isLoading) return <Loader />
    return (
      <>
      <ul>
           {events.map(event => {
            return (
              <section key={event.event_id}>
                <li key={event.event_id}>
                  <Link to={`/events/${event.event_id}`} key={event.event_id}>
                    <p>{event.type}</p>
                  </Link>
                  <p>{event.date_time}</p>
                  <p>{event.location}</p>
                  <p>{event.host}</p>
                  <p>{event.details}</p>
                </li>
              </section>
            )
          })}
      </ul>
      <div>
       <button onClick={() => {
                  navigate("/post_event");
                }} > Create an Event  </button>
       </div> 
      </>
    );
  }
}

export default LandingPage;