import React from 'react';
import PropTypes from 'prop-types';

// <pre>
//    <code>
//        {JSON.stringify(preload, null, 4)}
//    </code>    
// </pre>  

const propTypes = {
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

const defaultProps = {
    title: 'stuff'
};

export default function ShowCard(props) {
    const { title, poster, year, description } = props;

    return (
        <div className="show-card">
            <div className="show-card">
                <img 
                    alt={`${title} show poster`}
                    src={`/public/img/posters/${poster}`} 
                />
                <div>
                    <h2>{title}</h2>
                    <h3>{year}</h3>
                    <p>{description}</p>  
                </div>    
            </div>
        </div>
    );
}

ShowCard.propTypes = propTypes;
ShowCard.defaultProps = defaultProps;
