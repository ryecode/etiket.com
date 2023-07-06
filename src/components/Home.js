import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../NeonButton.module.css';

export const movies = [
  {
    id: 0,
    title: 'Spider-Man: Across the Spider-Verse',
    poster: 'images/spiderposter.png',
    details: '2023 ‧ Action/Adventure ‧ 2h 16m',
    trailer: 'https://www.youtube.com/embed/shW9i6k8cB0',
    banner: 'images/spiderverse.png',
  },
  {
    id: 1,
    title: 'Guardians Of The Galaxy Vol. 3',
    poster: 'images/guardiansposter.png',
    details: '2023 ‧ Action/Adventure ‧ 2h 2m',
    trailer: 'https://www.youtube.com/embed/u3V5KDHRQvk',
    banner: 'images/guardians.png',
  },
  {
    id: 2,
    title: 'Transformers: Rise of the Beasts',
    poster: 'images/transformersposter.png',
    details: '2023 ‧ Action/Fantasy ‧ 2h 7m',
    trailer: 'https://www.youtube.com/embed/itnqEauWQZM',
    banner: 'images/transformers.png',
  },
  {
    id: 3,
    title: 'The Little Mermaid',
    poster: 'images/mermaidposter.png',
    details: '2023 ‧ Fantasy/Musical ‧ 2h 15m',
    trailer: 'https://www.youtube.com/embed/kpGo2_d3oYE',
    banner: 'images/littlemermaid.png',
  }
];


export default function Home() {

    return (
        <div className="container-fluid row justify-content-center d-flex">
        <div className="col-lg-12">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel"> {/* Carousel */}
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active"> {/* Carousel Img Pattern Start*/}
                    <img src="images/spiderverse.png" className="d-block w-100" alt="..."/> {/* Movie Img Carousel Poster */}
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className="font-big">Spider-Man: Across the Spider-Verse</h5> {/* Movie Title */}
                      <p>2023 ‧ Action/Adventure ‧ 2h 16m</p> {/* Year / Genre / Movie Duration */}
                    </div> 
                  </div> {/* Carousel Img Pattern End */}
                  <div className="carousel-item">
                    <img src="images/guardians.png" className="d-block w-100" alt="..."/> 
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className="font-big">Guardians Of The Galaxy Vol. 3</h5> 
                      <p>2023 ‧ Action/Adventure ‧ 2h 2m</p> 
                    </div> 
                  </div>
                  <div className="carousel-item">
                    <img src="images/transformers.png" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className="font-big">Transformers: Rise of the Beasts</h5>
                      <p>2023 ‧ Action/Fantasy ‧ 2h 7m</p>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
        </div>
        <div className="col-lg-12 row p-5">
            <div className="col-lg-12 pb-5"> {/* Filter Links */}
              {/* <a className="pe-3 text-decoration-none font-med text-danger text-bold" href="">CATEGORY</a>
              <a className="pe-3 text-decoration-none font-med text-danger text-bold" href="">WEEKLY</a> */}
              <h2  className={styles.neonButton} >MOVIE SELECTIONS</h2>
            </div>
            <div className="col-lg-12 row"> {/* Posters */}
              
              {/* MOVIE LIST */}
              {movies.map((movie) => {
                return (
                <div className="col-lg-3 justify-content-center d-flex">
                    <div className="card">
                    <img src={movie.poster} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{movie.title}</h5> {/* Movie Title */}
                      <p className="card-text">{movie.details}</p> {/* Year / Genre / Duration */}
                      <Link to={`/Booking/${movie.id}`} className="btn btn-dark">BOOK NOW!</Link> 
                    </div>
                  </div>
                </div>
                )
                })
              }
            </div>
        </div>
    </div>
    )
}