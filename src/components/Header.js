import React, { Component } from 'react';
import styled from 'styled-components';

/* Header image */
const HeroImage = styled.div`
    width: 100vw;
    height: 120vh; 
    
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0.0, 0, 0, 0.0)), url("1.jpg");
    
    background-repeat: no-repeat;
    background-size: cover;
    //position: static;
    background-attachment: fixed;
    
    position: relative;
    
`;

/* Text in the middle of the image */
const HeroText = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    color: #fff;
    letter-spacing: 10px;
    //font-size: 7em;
    //font-weight: lighter;
    //padding: 1em 1em 2em 1em; 
`;

/* Larger text */
const LargerText = styled.p`
    color: #fff;
    font-size: 6rem;
    position: relative;
    white-space: nowrap;
    text-transform: lowercase;
    letter-spacing: .3em;
    font-weight: lighter;
    padding: 1em 1em 1em 1em;
    margin: 1em;
`;

/* Smaller text */
export const InnerText = styled.p`
    //color: #fff;
    font-size: 1rem;
    position: relative;
    white-space: nowrap;
    text-transform: lowercase;
    letter-spacing: 3px;
    margin: -2.2em 2em 2em 10em;
    font-weight: 700;
    padding: 1em;
    transform: translate(-12%, -70%); 
    color: #000033;
    border: 2px solid #fff;
    background-color: #fff;
   
`;

/* Portfolio button */
export const PortfolioButton = styled.button`
    color: #fff;
    font-size: 1rem;
    position: relative;
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: 5px;
    cursor: pointer;
    background: transparent;
    margin: 1em 1em 2em 2em;
    font-weight: 700;
    padding: 1em 1em 1em 1em;
    border: 2px solid #fff;
    transform: translate(0%, -70%); 
    &:hover, &:active {
        color: #000033;
        border-color: #fff;
        background-color: #fff;
    }
     
`;

export function Header() {
    return (
        <HeroImage>
            <HeroText>
                <LargerText>huey</LargerText>
                <InnerText>Control Hue lights</InnerText>
                <InnerText>Create mood lighting for every room</InnerText>
                <PortfolioButton href="#page-portfolio">
                    My rooms
                </PortfolioButton>
            </HeroText>
        </HeroImage>
    );
}