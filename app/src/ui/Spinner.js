import React from 'react';
import styled from 'styled-components';
import withPortal from './../hoc/withPortalHOC';

const SpinnerStyle = styled.div`
  margin: 0;
  padding: 0;

  right: 0;
  top: 0;
  left: 0;
  bottom: 0;

  z-index: 10;
  position: fixed;
  display: none
`;

const SpinnerOverlayStyle = styled.div`
  background-color: #fff;
  opacity: 0.5;
  position: relative;
  width: 100%;
  height: 100%;
`;

const SpinnerContentStyle = styled.div`
  background: #fefefe;
  border-radius: 4px;
  box-shadow: 0 0 12px rgba(2,3,3,0.17);
  border: 1px solid #d9d9d9;
  width: 350px;
  padding: 25px;
  box-sizing: border-box;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translateX(-50%) translateY(-30%);
`;

function Spinner(props) {
    const { title, subTitle } = props;
    return (
        <SpinnerStyle>
            <SpinnerOverlayStyle className="spinner-overlay">&nbsp;</SpinnerOverlayStyle>
            <SpinnerContentStyle className="spinner-content">
                <p>{title}</p>
                <p>{subTitle}</p>
            </SpinnerContentStyle>
        </SpinnerStyle>  
    )
};

export default withPortal(Spinner);
