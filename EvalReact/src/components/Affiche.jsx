import React from 'react';

function Affiche( props ) {
    let data = props.data;
    let url = "/details/"+data.id
    return (
        <div>
            <a href={url}>
                <img src={"https://image.tmdb.org/t/p/w500"+props.data.poster_path} alt={props.data.original_title || props.data.original_title} />
                <div className="score">
                    <p>{props.data.vote_average}</p>
                </div>
                <h5>{props.data.original_title || props.data.original_title}</h5>
                <p>{props.data.release_date}</p>
            </a>
        </div>
    );
}

export default Affiche;
