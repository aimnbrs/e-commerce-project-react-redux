import React, { Fragment} from "react";
import styled from "styled-components";


const ButtonStyled = styled.button`
Outline: none;
border-radius: 25px;
width : ${(props) => props.buttonWidth || 'auto'};
// padding-right : ${(props) => props.buttonWidth || '10px'};
height: 8vh;
color: ${(props) => props.buttonColor || 'white'};
background-color: ${(props) => props.buttonBgColor || 'rgb(12, 12, 12)'};
border-style: none;
cursor : pointer;
&:hover {
color: ${(props) => props.onButtonColor || 'white'};
background-color: ${(props) => props.onButtonBgColor || 'rgb(12, 12, 12)'};
}
font: 15px Poppins-Medium ;
}
`;

const Button = ({children, buttonWidth, buttonColor, buttonBgColor ,onButtonColor, onButtonBgColor}) => {
  return (
    <Fragment>
      <ButtonStyled
        buttonWidth={buttonWidth}
        buttonColor={buttonColor}
        buttonBgColor={buttonBgColor}
        onButtonColor={onButtonColor}
        onButtonBgColor={onButtonBgColor}
      >
        {children}
      </ButtonStyled>
    </Fragment>
  );
};

export default Button;
