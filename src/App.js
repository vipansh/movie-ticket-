import './App.css';
import { AccupiedProvider } from './Contaxt/AccupiedContaxt';
import { SelectedArrayProvider } from './Contaxt/SelectedContaxt';
import { MovieNameProvider } from './Contaxt/MovieNameContaxt';

import Homepage from './pages/Homepage';
import { TicketBooking } from './pages/TicketBooking';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { BookingPage } from './pages/BookingPage';
import { BookedProvider } from './Contaxt/BookedContext';


function App() {
  return (
    <Router>
      <div className="App">
        <AccupiedProvider>
          <MovieNameProvider>
            <SelectedArrayProvider>
              <AccupiedProvider>
                <BookedProvider>

                  <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/select-ticket" exact component={TicketBooking} />
                    <Route path="/bookingPage/:name" exact component={BookingPage} />
                  </Switch>
                </BookedProvider>
              </AccupiedProvider>
            </SelectedArrayProvider>
          </MovieNameProvider>
        </AccupiedProvider>
      </div>
    </Router>

  );
}

export default App;
