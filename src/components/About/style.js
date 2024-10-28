import styled from "styled-components";
export const AboutParent = styled.div`
    position: relative;
    background-image: url("./images/creative/about-bg.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 90vh;
    width: 100%;
`
export const AboutText = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
`

export const AboutList = styled.h2`
   font-weight:bold;
   font-size:40px;
`

export const AboutTitle = styled.h3`
   color:#eb5424;
   font-weight:bold;
   font-size:30px;

`

export const AboutParagraph = styled.p`
    color:#000;
   font-weight:bold;
   line-height:2;
`

