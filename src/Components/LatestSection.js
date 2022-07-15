import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/themeContext';
import Title from '../Components/Title'

import latest from '../img/latest.jpg'
import Button from './Button';

function LatestSection() {
    const theme = useTheme()
    return (
        <LatestSectionStyled className='u-pad-lg-2' theme={theme}>
            <div className="title-con">
                <Title
                    name={'Our Latest Digital Work'}
                    subtext="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ratione atque blanditiis at, 
                        nihil nemo necessitatibus dignissimos nisi repellat quasi! Unde molestias tenetur at?"
                />
            </div>

            <div className="latest-container">
                <div className="latest-content">
                    <img src={latest} alt="" />
                    <div className="latest-text">
                        <h4 className="title">
                            Our Latest Digital Art Work Design
                        </h4>
                        <h6>Android, design</h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, placeat atque!
                        </p>
                        <Button
                            name={'EXPLORE MORE'}
                            icon={'fas fa-chevron-right'}
                            arrow={'arrow'}
                            blob={'blob'}
                        />
                    </div>
                </div>
            </div>
            <div className="latest-controlls">
                <div className="control control-1"></div>
                <div className="control control-2"></div>
                <div className="control control-3"></div>
            </div>
        </LatestSectionStyled>
    )
}

const LatestSectionStyled = styled.section`
    .latest-container{
        margin-top: 1.5rem;
        background-color: ${props => props.theme.colorGreyLight2};
        border-radius: 7px;
        .latest-content{
            display: grid;
            grid-template-columns: 40% auto;
            padding: 5rem 10rem;
            grid-gap: 2rem;
            img{
                width: 100%;
                border-radius: 7px;
                object-fit: cover;
            }
            .latest-text{
                margin-left: 3rem;
                h4{
                    font-size: 2rem;
                    padding-bottom: 1.5rem;
                }
                h6{
                    padding-bottom: 1.5rem;
                    color: ${props => props.theme.colorFont};
                    font-size: 1.2rem;
                }
                p{
                    padding-bottom: 1.5rem;
                }
                a{
                    background: transparent;
                    border: 2px solid ${props => props.theme.colorGrey4};
                    text-transform: inherit;
                }
            }
        }
    }

    .latest-controlls{
        display: flex;
        justify-content: center;
        margin-top: 2.5rem;
        .control{
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            margin: 0 0.2rem;
            cursor: pointer;
        }
        .control-1{
            background-color: ${props => props.theme.colorAccent};
        }
        .control-2{
            background-color: ${props => props.theme.colorGrey9};
            transform: scale(0.85);
        }
        .control-3{
            background-color: ${props => props.theme.colorGrey9};
            transform: scale(0.6);
        }
    }
`;

export default LatestSection