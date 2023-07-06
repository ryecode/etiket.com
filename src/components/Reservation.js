import React from 'react';

export default function Reservation() {
        return (
            <div className="container-fluid p-5">
            <div className="text-danger text-bold py-5 font-big">My Reservations</div>
            <div className="text-light text-bold font-med">Movie Tickets</div>
            <div className="container-fluid row py-5">
                <div className="col-lg-12">
                    <table className="table table-dark w-100 m-0 px-3 pb-5">
                        <thead>
                            <tr>
                                <th>Movie Title</th>
                                <th>Seat Number</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Download QR</th>
                                <th>Sell Your Ticker</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Abangers: Civilian Lang</td>
                                <td>R1C2</td>
                                <td>MM/DD/YYYY</td>
                                <td>9:00PM</td>
                                <td><a href="http://">2304823fhskuk88</a></td>
                                <td>SELL</td>                                
                                <td><a className="text-decoration-none text-light" href="http://">see details</a></td>
                            </tr>
                            <tr>
                                <td>John Weak: -4</td>
                                <td>R1C2</td>
                                <td>MM/DD/YYYY</td>
                                <td>9:00PM</td>
                                <td><a href="http://">2304823fhskuk88</a></td>
                                <td>STOP SELLING</td>                                
                                <td><a className="text-decoration-none text-light" href="http://">see details</a></td>
                            </tr>
                            <tr>
                                <td>Spider Man: Work From Home</td>
                                <td>R1C2</td>
                                <td>MM/DD/YYYY</td>
                                <td>9:00PM</td>
                                <td><a href="http://">2304823fhskuk88</a></td>
                                <td>SOLD</td>                                
                                <td><a className="text-decoration-none text-light" href="http://">see details</a></td>
                            </tr>
                        </tbody>
                    </table>
          
                </div>
            </div>
        </div>
        )
    }