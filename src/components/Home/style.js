import styled from "styled-components";
export const HomeParent= styled.div `
    position: relative;
    background-image: url("../images/Home/home-bg.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 120vh;
`
export const HomeList= styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
`
export const HomeTitle= styled.h2`
     text-transform: capitalize;
     font-size: 60px;
     font-weight: bold;
     color: #5e5e5e;
`
export const HomeCreative= styled.h4`
    text-transform: capitalize;
    font-size: 35px;
    color: #eb5424;
    margin-bottom: 20px;
`
export const HomeParagraph= styled.p`
    text-transform: capitalize;
    font-size: 20px;
    line-height: 1.5;
    color: #888;
    margin-bottom: 20px;
`
export const HomeButton= styled.button`
     text-transform: capitalize;
    padding: 12px 25px;
    background: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 150px;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    transition: 0.4s;

   &:hover {
   background-color: #fff;
   color: #eb5424;
}
`
