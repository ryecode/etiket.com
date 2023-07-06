import React, {useRef, useState} from 'react';
import { movies } from './Home';
import { useParams } from 'react-router-dom';


export default function Booking() {

    // const [isSelected, setIsSelected] = useState(false);
    const handleSeat = (e) => {
        const {className, value} = e.target;
        console.log(value)
        e.target.classList.toggle('selected')
    }

    
    const { id } = useParams();
    const movieData = movies.filter(movie => movie.id === Number(id))
    console.log(movieData)
        
        return (
            <>
            {movieData.map((movie) => { return (
            <div className="container-fluid row justify-content-center d-flex p-5 align-items-center">
            <p className="col-lg-12 pt-5 pb-2 text-bold font-big text-center text-danger">BOOK NOW!</p>
            <div className="col-lg-7 row justify-content-center d-flex py-5"> {/* Left Side */}

                <div className="col-lg-12">
                    <iframe width="100%" height="500px" src={movie.trailer} frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe> {/* Video Source */}
                </div>
                <div className="col-lg-12 row py-3">
                    <div className="col-lg-5">
                        <select className="form-select"> {/* Theater Place */}
                            <option>Movie Place 1</option> 
                            <option>Movie Place 2</option>
                          </select>
                    </div>
                    <div className="col-lg-7">
                        <ul className="showcase d-flex justify-content-between text-light">
                            <li>
                            <div className="seat"></div>
                            <small>Available</small>
                            </li>
                    
                            <li>
                            <div className="seat selected"></div>
                            <small>Selected</small>
                            </li>
                    
                            <li>
                            <div className="seat occupied"></div>
                            <small>Occupied</small>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-12 justify-content-center d-flex"> {/* Seat Pattern */}
                    <div className="container-fluid contain">
                      <div className="row justify-content-center d-flex"> {/* Row 1 */}
                        <div className='seat' onClick={handleSeat} name='R1C1' value='1'></div> {/* Col 1 */}
                        <div className='seat' onClick={handleSeat} name='R1C2' value='2'></div> {/* Col 2 */}
                        <div className='seat' onClick={handleSeat} name='R1C3' value='3'></div> {/* Col 3 */}
                        <div className='seat' onClick={handleSeat} name='R1C4' value='4'></div> {/* Col 4 */}
                        <div className='seat' onClick={handleSeat} name='R1C5' value='5'></div> {/* Col 5 */}
                        <div className='seat' onClick={handleSeat} name='R1C6' value='6'></div> {/* Col 6 */}
                        <div className='seat' onClick={handleSeat} name='R1C7' value='7'></div> {/* Col 7 */}
                        <div className='seat' onClick={handleSeat} name='R1C8' value='8'></div> {/* Col 8 */}
                        <div className='seat' onClick={handleSeat} name='R1C9' value='9'></div> {/* Col 9 */}
                      </div>
                      <div className="row justify-content-center d-flex">
                        <div className='seat' onClick={handleSeat} name='R2C1' value='10'></div>
                        <div className='seat' onClick={handleSeat} name='R2C2' value='11'></div>
                        <div className='seat' onClick={handleSeat} name='R2C3' value='12'></div>
                        <div className='seat' onClick={handleSeat} name='R2C4' value='13'></div>
                        <div className='seat' onClick={handleSeat} name='R2C5' value='14'></div>
                        <div className='seat' onClick={handleSeat} name='R2C6' value='15'></div>
                        <div className='seat' onClick={handleSeat} name='R2C7' value='16'></div>
                        <div className='seat' onClick={handleSeat} name='R2C8' value='17'></div>
                        <div className='seat' onClick={handleSeat} name='R2C9' value='18'></div>
                      </div>
                
                      <div className="row justify-content-center d-flex">
                        <div className='seat' onClick={handleSeat} name='R3C1' value='1'></div>
                        <div className='seat' onClick={handleSeat} name='R3C2' value='21'></div>
                        <div className='seat' onClick={handleSeat} name='R3C3' value='22'></div>
                        <div className='seat' onClick={handleSeat} name='R3C4' value='23'></div>
                        <div className='seat' onClick={handleSeat} name='R3C5' value='24'></div>
                        <div className='seat' onClick={handleSeat} name='R3C6' value='25'></div>
                        <div className='seat' onClick={handleSeat} name='R3C7' value='26'></div>
                        <div className='seat' onClick={handleSeat} name='R3C8' value='27'></div>
                        <div className='seat' onClick={handleSeat} name='R3C9' value='28'></div>
                      </div>
                
                      <div className="row justify-content-center d-flex">
                        <div className='seat' onClick={handleSeat} name='R4C1' value='29'></div>
                        <div className='seat' onClick={handleSeat} name='R4C2' value='30'></div>
                        <div className='seat' onClick={handleSeat} name='R4C3' value='31'></div>
                        <div className='seat' onClick={handleSeat} name='R4C4' value='32'></div>
                        <div className='seat' onClick={handleSeat} name='R4C5' value='33'></div>
                        <div className='seat' onClick={handleSeat} name='R4C6' value='34'></div>
                        <div className='seat' onClick={handleSeat} name='R4C7' value='35'></div>
                        <div className='seat' onClick={handleSeat} name='R4C8' value='36'></div>
                        <div className='seat' onClick={handleSeat} name='R4C9' value='37'></div>
                      </div>
                
                      <div className="row justify-content-center d-flex">
                        <div className='seat' onClick={handleSeat} name='R5C1' value='38'></div>
                        <div className='seat' onClick={handleSeat} name='R5C2' value='39'></div>
                        <div className='seat' onClick={handleSeat} name='R5C3' value='40'></div>
                        <div className='seat' onClick={handleSeat} name='R5C4' value='41'></div>
                        <div className='seat' onClick={handleSeat} name='R5C5' value='42'></div>
                        <div className='seat' onClick={handleSeat} name='R5C6' value='43'></div>
                        <div className='seat' onClick={handleSeat} name='R5C7' value='44'></div>
                        <div className='seat' onClick={handleSeat} name='R5C8' value='45'></div>
                        <div className='seat' onClick={handleSeat} name='R5C9' value='46'></div>
                      </div>
                
                      <div className="row justify-content-center d-flex">
                        <div className='seat' onClick={handleSeat} name='R6C1' value='47'></div>
                        <div className='seat' onClick={handleSeat} name='R6C2' value='48'></div>
                        <div className='seat' onClick={handleSeat} name='R6C3' value='49'></div>
                        <div className='seat' onClick={handleSeat} name='R6C4' value='50'></div>
                        <div className='seat' onClick={handleSeat} name='R6C5' value='51'></div>
                        <div className='seat' onClick={handleSeat} name='R6C6' value='52'></div>
                        <div className='seat' onClick={handleSeat} name='R6C7' value='53'></div>
                        <div className='seat' onClick={handleSeat} name='R6C8' value='54'></div>
                        <div className='seat' onClick={handleSeat} name='R6C9' value='55'></div>
                      </div>
                    </div>
              </div>
            </div>
            <div className="col-lg-5 row"> {/* Right Side */}
                <div className="col-lg-6"> {/* Poster */}
                    <div className="justify-content-center d-flex">
                        <div className="card">
                        <img src={movie.poster} className="card-img-top" alt="..."/>
                      </div>
                    </div>
                </div>
                <div className="col-lg-6"> {/* Movie Details */}
                    <p className="text-bold text-danger font-med text-center">{movie.title}</p>
                    <p className="text-light font-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="col-lg-4">
                    <div className="col-lg-12 text-light py-3"> {/* Calendar Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-calendar-event" viewBox="0 0 16 16">
                            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        </svg>
                    </div>
                    <div className="col-lg-12 text-center"> {/* Showing Date = Pwede dapat to palitan kaso diko pa alam kung pano */}
                        <p className="text-light fs-3">JUNE 4, 2023 <br/>8 : 00 PM</p>
                    </div>
                </div>
                <div className="col-lg-8 text-center"> {/* Price Display */}
                    <p className="text-light fs-4 py-3">PRICE: <br/> PHP 350 - PHP 400</p>
                    <div className="container-fluid py-2"> {/* Checkout Button */}
                        <a className="w-100 btn btn-lg btn-danger" href="/Payment">CHECKOUT</a>
                    </div>   
                </div>
                <div className="col-lg-12 row"> {/* Ticket Details */}
                    <table className="table text-light w-100 m-0 px-3 pb-5">
                        <thead>
                            <tr>
                                <th>Selected Seats</th>
                                <th>Price</th>
                                <th>Reserve Expiration</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ROW 5 COL 4</td>
                                <td>350</td>
                                <td>60 mins</td>
                            </tr>
                            <tr>
                                <td>ROW 5 COL 5</td>
                                <td>400</td>
                                <td>60 mins</td>
                            </tr>
                            <tr>
                                <td>ROW 5 COL 6</td>
                                <td>400</td>
                                <td>60 mins</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>)})}
            </>
        )
    }