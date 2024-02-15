import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
console.log("toto");
export default function details(props) {
    let data = props.data;
    const params = useParams();
    const [film, setFilm] = useState({});



    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/"+ params.id+ "?api_key=7c51ce5f51b2a0e2bb3bf45b2afaa9ae&language=fr-FR")
            .then((response) => response.json())
            .then((data) => {
                setFilm(data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <main>
        <article>
            <div className="focus-container">
                <div className="banner">
                    <div className="content" style={{ display: 'flex' }}>
                        <img src={"https://image.tmdb.org/t/p/w500"+film.poster_path} alt="" />
                        <div className="right" style={{ marginLeft: '20px' }}>
                            <div className="top" style={{ display: 'flex' }}>
                                <div className="score">{film.vote_average}/10</div>
                                <div className="title-date" style={{ marginLeft: '20px' }}>
                                    <h1>{film.original_title} ([{film.release_date}])</h1>
                                    <span> Science-fi - 2h29</span>
                                </div>
                            </div>
                            <div className="synopsis">
                                <h2>Synopsis</h2>
                                <p>
                                    {film.overview}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="casting">
                    <h2>Casting</h2>
                    <div className="actors"></div>
                </div>
            </div>
        </article>
        </main>
    );
}