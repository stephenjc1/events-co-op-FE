import React, { Component } from 'react';

class UpdateAttendees extends Component {
  state = {
    attendees: 0,
    attendeesDetails: [],
    isLoading: true
  };


  render() {
    return (
      <>
        <button> ATTEND / PLAY </button>
        <p>ATTENDEES: THIS WILL BE SOMETHING DYNAMIC</p>
        <button > I CAN NO LONGER MAKE IT </button>
      </>
    );
  }
}

export default UpdateAttendees;