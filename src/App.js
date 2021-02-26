import './App.css';
import { OccupiedProvider } from './Context/OccupiedContext';
import { SelectedArrayProvider } from './Context/SelectedContext';
import { MovieNameProvider } from './Context/MovieNameContext';

import Homepage from './pages/Homepage';
import { TicketBooking } from './pages/TicketBooking';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { BookingPage } from './pages/BookingPage';
import { BookedProvider } from './Context/BookedContext';
import { MyBookedTickets } from './pages/MyBookedTickets';


function App() {
  return (
    <Router>
      <div className="App">
        <OccupiedProvider>
          <MovieNameProvider>
            <SelectedArrayProvider>
              <OccupiedProvider>
                <BookedProvider>

                  <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/select-ticket" exact component={TicketBooking} />
                    <Route path="/bookingPage/:name" exact component={BookingPage} />
                    <Route path="/my-booked-tickets" exact component={MyBookedTickets} />

                  </Switch>
                </BookedProvider>
              </OccupiedProvider>
            </SelectedArrayProvider>
          </MovieNameProvider>
        </OccupiedProvider>
      </div>
    </Router>

  );
}

export default App;
