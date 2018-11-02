import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

const defaultProps = {
    title: 'stuff'
};

const breakPoint = '980px';

const Wrapper = styled.div`
    width: 32%;
    border: 1px solid #333;
    border-radius: 4px;
    margin-bottom: 25px;
    overflow: hidden;

    & > h2 {
        color: blue;
    }

    @media (${breakPoint}) {
        color: black;
    }
`;

const Image = styled.img`
    width: 46%;
    float: left;
    margin-right: 10px;
`;

export default function ShowCard(props) {
    const { title, poster, year, description } = props;

    return (
        <Wrapper className="show-card">
            <Image alt={`${title} show poster`} src={`/public/img/posters/${poster}`} />
            <div>
                <h2>{title}</h2>
                <h3>{year}</h3>
                <p>{description}</p>
            </div>
        </Wrapper>
    );
}

ShowCard.propTypes = propTypes;
ShowCard.defaultProps = defaultProps;
