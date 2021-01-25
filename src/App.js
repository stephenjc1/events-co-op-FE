import './App.css';
import LandingPage from './pages/LandingPage';
import PostEvent from './pages/PostEvent';
import { Router } from '@reach/router';
import IndividualEventPage from './pages/IndividualEventPage';

function App() {
  return (
    <div className="App">
      <Router>
        <LandingPage path='/' />
        <PostEvent path='/post_event' />
        <IndividualEventPage path='/events/:event_id' />
      </Router>
    </div>
  );
}

export default App;
