import React from 'react';
import '../css/style.css';
import { useState, useEffect } from 'react';

    let KEY_API = "7c51ce5f51b2a0e2bb3bf45b2afaa9ae"
    let url = "https://api.themoviedb.org/3/movie/popular?api_key="+KEY_API+"&language=fr-FR&page=1"

export default function Home() {
    const [films, setFilms] = useState([])
    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setFilms(data);
            console.log(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);


    //   const List = pokemons.map((data, index) => (
    //     <CardPokemon data={data} key={index}  />
    //   ));

      

    return (
        <>
            <nav className="desktop-nav">
                <a href="/"><i className="fas fa-film"></i></a>
                <ul>
                    <li><a href="/films">Films</a></li>
                    <li><a href="/series">Séries</a></li>
                    <li><a href="/populaires">Populaires</a></li>
                </ul>
            </nav>

            <nav className="nav-list-mobile" id="mobileNav">
                <a href="/"><i className="fas fa-film"></i></a>
                <div id="barr">
                    <div className="tt">
                        <div id="top-nav" className="bar"></div>
                        <div id="middle-nav" className="bar"></div>
                        <div id="bottom-nav" className="bar"></div>
                    </div>
                </div>
                <div className="mobile-nav-content" id="menu-nav">
                    <ul>
                        <li><a href="#">Films</a></li>
                        <li><a href="#">Séries</a></li>
                        <li><a href="#">Populaires</a></li>
                    </ul>
                </div>
            </nav>

            <div className="search-container">
                <input type="text" placeholder="Rechercher un film" />
                <button type="submit"><i className="fas fa-search"></i></button>
            </div>

            <div className="wrapper">
                <div className="tendances-container container">
                    <div className="title-filter" id="title-tendances">
                        <h2>Tendances</h2>
                        <button className="active" id="day">Aujourd'hui</button>
                        <button id="week">Cette semaine</button>
                    </div>
                    <div className="grid-tendances" id="tendances"></div>
                </div>
            </div>

            <div className="wrapper-pop">
                <div className="populaires-container container">
                    <div className="title-filter" id="title-category">
                        <h2>Populaires</h2>
                        <button className="active" id="popular">Populaires</button>
                        <button id="top_rated">Top rated</button>
                        <button id="upcoming">À venir</button>
                    </div>
                    <div className="grid-tendances" id="populaires"></div>
                </div>
            </div>

            <footer>
                <p>Tous droits réservés</p>
            </footer>
        </>
    );
}
