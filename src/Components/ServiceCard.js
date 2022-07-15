import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/themeContext';
/*eslint-disable */

function ServiceCard({ title, desc, icon }) {
    const theme = useTheme()
    return (
        <ServiceCardStyled theme={theme}>
            <div className="s-item-con">
                <img src={icon} alt="" />
                <h4>{title}</h4>
                <p>
                    {desc}
                </p>
                <a href="#" className="learn-more">
                    <span>
                        Learn More
                    </span>
                    <span className="arrow">
                        <i className="fas fa-chevron-right"></i>
                    </span>
                </a>
            </div>
        </ServiceCardStyled>
    )
}

const ServiceCardStyled = styled.section`
    background-color: ${props => props.theme.colorGreyLight};
    text-align: center;
    padding: 3rem 1rem;
    border-radius: 7px;
    transition: all .4s ease-in-out;
    position: relative;
    &::before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: .4rem;
        background: ${props => props.theme.colorGradientPrimary2};
        transition:all .4s ease-in-out;
        transform: scale(0);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    &:hover{
        box-shadow: 10px 10px 0px ${props => props.theme.colorBorder};
        transform: translateY(-5px);
        &::before{
            transform: scale(1);
        }
    }
    .s-item-con{
        img{
            padding-bottom: 2rem;
            height: 100px;
        }
        h4{
            font-size: 1.5rem;
            padding-bottom: 1rem;
        }
        p{
            padding-bottom: 1.5rem;
        }
    }
`;

export default ServiceCard