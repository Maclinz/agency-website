import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/themeContext';

function ServicesSection({name, subtext}) {
    const theme = useTheme()
    return (
        <TitleStyled theme={theme}>
            <h3>{name}</h3>
            <p>{subtext}</p>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    h3{
        font-size: 2.5rem;
        font-weight: 700;
    }
`;

export default ServicesSection