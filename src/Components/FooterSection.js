import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/themeContext';

import team1 from '../img/team1.jpg'
import team2 from '../img/team2.jpg'
import css3 from '../img/css.png'
import agency4 from '../img/agency4.jpg'
import figma from '../img/figma.jpg'
import fitness from '../img/fitness.png'
/*eslint-disable */

function FooterSection() {
    const theme = useTheme()
    return (
        <FooterSectionStyled className='u-pad-lg-2' theme={theme}>
            <nav className="bottom-navigation">
                <ul className="logo-con">
                    <div className="logo">
                        <h1>LOGO</h1>
                    </div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam unde minima illum minus?
                    </p>
                    <div className="b-nav-icons">
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-linkedin"></i>
                        <i class="fab fa-github"></i>
                        <i class="fab fa-youtube"></i>
                    </div>
                </ul>
                <ul className="nav-b nav-contact">
                    <h4>Contact Us</h4>
                    <li className="nav-item">
                        <div className="icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="f-text">
                            <h6>Email</h6>
                            <span>maclinzuniversal@gmail.com</span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="icon">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="f-text">
                            <h6>Phone</h6>
                            <span> +44 (0) 745-878-908</span>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div className="icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="f-text">
                            <h6>Location</h6>
                            <span>
                                London, United Kingdom
                            </span>
                        </div>
                    </li>
                </ul>

                <ul className="nav-b comapny">
                    <h4>Company</h4>
                    <li className="nav-item">
                        <a href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Customer's FAQ</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Refund Policy</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Private Policy</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">License & Copyright</a>
                    </li>
                </ul>

                <ul className="nav-b ig">
                    <h4>Instagram</h4>
                    <div className="ig-images">
                        <img src={team1} alt="" />
                        <img src={team2} alt="" />
                        <img src={css3} alt="" />
                        <img src={agency4} alt="" />
                        <img src={figma} alt="" />
                        <img src={fitness} alt="" />
                    </div>
                </ul>
            </nav>
            <div className="footer-copywrite">
                <p>
                    Copyright © 2022 <span>MacLinz Universal</span>. All rights reserved.
                </p>
            </div>
        </FooterSectionStyled>
    )
}

const FooterSectionStyled = styled.footer`
    background-color: ${props => props.theme.colorBg3};
    padding-top: 6rem !important;
    color: ${props => props.theme.colorFont};
    padding-bottom: 3rem !important;
    h6{
        font-size: 1.2rem;
        
    }
    h4{
        font-size: 1.5rem;
        color: ${props => props.theme.colorGrey4};
    }
    a{
        color: ${props => props.theme.colorFont};
        transition: all 0.3s ease-in-out;
        &:hover{
            color: ${props => props.theme.colorAccent};
            text-decoration: underline;
        }
    }

    i{
        font-size: 1.3rem;
        transition: all 0.3s ease-in-out;
        &:hover{
            color: ${props => props.theme.colorAccent};
        }
    }

    h1{
        color: ${props => props.theme.colorWhite};
        margin-bottom: 1rem;
    }

    .bottom-navigation{
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 3rem;
        h4{
            padding-bottom: 1.5rem;
        }
        .nav-b{
            margin: 0 1.5rem;
            .nav-item{
                margin-bottom: 1rem;
            }
        }

        .nav-contact{
            .nav-item{
                display: grid;
                grid-template-columns: 30px auto;
            }
        }

        .logo-con{
            flex: 5;

        }
        .b-nav-icons{
            display: flex;
            margin-top: 2rem;
            .fa-facebook{
                margin-right: .3rem;
            }
            i:not(:first-child){
                margin: 0 .5rem;
                cursor: pointer;
            }
        }

        .ig{
            .ig-images{
                display: grid;
                grid-template-columns: repeat(3, 90px);
                grid-template-rows: repeat(2, 90px);
                grid-gap: .5rem;
                img{
                    width: 100%;
                    object-fit: cover;
                    height: 100%;
                    cursor: pointer;
                }
            }
        }
    }

    .footer-copywrite{
        padding-top: 3rem;
        border-top: 1px solid ${props => props.theme.colorGrey9};
        text-align: center;
        span{
            color: ${props => props.theme.colorGrey4};
            cursor: pointer;
            transition: all .4s ease-in-out;
            &:hover{
                color: ${props => props.theme.colorAccent};
            }
        }
    }
`;

export default FooterSection