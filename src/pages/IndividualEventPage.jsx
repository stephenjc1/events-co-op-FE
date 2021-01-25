import React, { Component } from 'react';
import { getEventById } from '../api';
import Loader from '../components/Loader';
import UpdateAttendees from '../components/UpdateAttendees';

class IndividualEventPage extends Component {

state = {
  event: {},
  isLoading: true,
}

  componentDidMount() {
    console.log(this.props.event_id);
    getEventById(this.props.event_id)
      .then(({ data: { event } }) => {
        this.setState({ event, isLoading: false })
      })
  }

  render() {
    const { event, isLoading } = this.state
    if (isLoading) return <Loader />
    return (
      <section>
        <h4>{event.type}</h4>
        <p>{event.details}</p>
        <UpdateAttendees attendees={event.attendees} event_id={event.event_id} />
      </section>
    )
  }
}

export default IndividualEventPage;