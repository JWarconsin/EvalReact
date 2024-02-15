import { useState } from 'react';

export function Affiche(props) {
    let data = props.data;

    return (
        <article key={props.index} >            
            <div className="card">
                <div className="banner">
                    <div className="content">
                        <img src={"https://image.tmdb.org/t/p/w500"+props.data.poster_path} alt="" />
                        <div className="right">
                            <div className="top">
                                <div className="score">{props.data.vote_average}/10</div>
                                <div className="title-date">
                                    <h1>{props.data.original_title} ([{props.data.release_date}])</h1>
                                    <span> Science-fi - 2h29</span>
                                </div>
                            </div>
                            <div className="synopsis">
                                <h2>Synopsis</h2>
                                <p>
                                    {props.data.overview}
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
    );
}