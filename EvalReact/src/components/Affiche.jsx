import { useState } from 'react';

export function Affiche(props) {
    let data = props.data;

    return (
        <article>
            <div className="card">
                <div className="banner">
                    <div className="content">
                        <img src="../assets/bg.png" alt="" />
                        <div className="right">
                            <div className="top">
                                <div className="score">4/5</div>
                                <div className="title-date">
                                    <h1>TOTO ([2022])</h1>
                                    <span> Science-fi - 2h29</span>
                                </div>
                            </div>
                            <div className="synopsis">
                                <h2>Synopsis</h2>
                                <p>
                                    Film pas ouf mais bon c'est pas grave
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