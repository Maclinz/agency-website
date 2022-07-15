import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/themeContext';

function Button({name, icon, arrow, blob}) {
    const theme = useTheme()
    return (
        <ButtonStyled theme={theme}>
            {name}
            <span className={arrow}><i className={icon}></i></span>
            <span className={blob}></span>
        </ButtonStyled>
    )
}

const ButtonStyled = styled.a`
    cursor: pointer;
    overflow: hidden;
    background: ${props => props.theme.colorGradientPrimary3};
    padding: .8rem 2rem;
    border-radius: 30px;
    position: relative;
    transition: all .4s ease-in-out;
    display: inline-block;
    .blob{
        position: absolute;
        top: -5px;
        right: -55%;
        width: 180px;
        height: 180px;
        background: rgba(255,255,255,.2);
        border-radius: 50%;
        transition: all .4s cubic-bezier(.21,.69,.73,1.08);
    }
    &:hover{
        span{
            right: -30%;
            top: -15px;
        }
    }
`;

export default Button