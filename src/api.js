import axios from 'axios';


const instance = axios.create({
  baseURL: 'http://localhost:9090/api',
});

export const getEvents = () => {
  return instance.get('/events', )
}

export const getEventById = (event_id) => {
  return instance.get(`events/${event_id}`)
}

export const createEvent = (newEvent) => {
  return instance.post('/events', newEvent)
}