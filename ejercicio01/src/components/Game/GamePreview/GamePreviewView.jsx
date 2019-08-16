import React from 'react';


const GamePreviewView = ({
    title,
    date
}) => (

    <article className="GamePreview">
        <h6>
            { title }
        </h6>
        <p>
            { date }
        </p>
    </article>

)

export default GamePreviewView;