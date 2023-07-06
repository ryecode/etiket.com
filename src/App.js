import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReactDOM from "react-dom";
import Header from './components/Header';
import Home from './components/Home';
import Booking from './components/Booking';
import Login from './components/Login/Login';
import Register from './components/Register';
import Payment from './components/Payment';
import Reservation from './components/Reservation';
import Dashboard from './components/Dashboard';
import apiService from "./Api-service/ApiService";
import { useEffect, useState } from "react";

function App() {

  const [accounts, setAccounts] = useState([]);
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    apiService
      .get("/accounts/getAccounts")      
      .then((res) => {
        setAccounts(res.data);
      })
      .catch((error) => {
        console.error(error);
      });

      apiService
      .get("/movies/getAllMovieSeats")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((error) => {
        console.error(error);
      })

    },[]);

  console.log(accounts);
  console.log(movies);

  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="/Booking" element={<Booking />} />
              <Route path="/Login" element={<Login accounts={accounts} />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Payment" element={<Payment />} />
              <Route path="/Reservation" element={<Reservation />} />
              <Route path="/Dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
