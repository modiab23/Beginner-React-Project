import styled from "styled-components";

export const PortfolioTitle  = styled.div`
   text-align: center;
    padding-top: 20px;
`
export const PortfolioText  = styled.h2`
    text-transform: capitalize;
    font-weight: bold;
    font-size: 35px;
`
export const AllPortfolio  = styled.div`
   text-align: center;
   margin-bottom:20px
   
`
export const AllSpan = styled.span`
    display: inline-block;
    background-color:#eb5424;  
    width: 115px;
    height: 25px;
    padding: 10px;
    border-radius:5px ;
    color: #fff;
    text-transform: capitalize;
    font-weight: bold;
    margin: 0 10px;
    cursor: pointer;

`
export const SpanPortfolio  = styled.span`
    display: inline-block;
    background-color:#888;  
    width: 115px;
    height: 25px;
    padding: 10px;
    border-radius:5px ;
    color: #fff;
    text-transform: capitalize;
    font-weight: bold;
    margin: 0 10px;
    cursor: pointer;
    transition: 0.4s;
    &:hover{
    background-color: #eb5424;

    }
`


export const PortfolioParent  = styled.div`
   display: grid;
   grid-template-columns: repeat(4,1fr);
   gap:10px;
`

export const PortfolioSon  = styled.div`
    position: relative;
    width:328px;
    cursor: pointer;        
    
    &:hover >div{
       opacity: 1;
      visibility: visible;
    }
    
`

export const Image  = styled.img`
    width:100%
`


export const Overlay  = styled.div`   
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: rgba(235,84,36 , 0.5);
    transition: 0.4s;
    opacity: 0;
    visibility: hidden;
`

export const OverlayBtn  = styled.button`
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
       color: #eb5424;
       border: none;
       padding: 15px 10px;
       border-radius: 5px;
       text-transform: capitalize;
       font-size: 12px;
       font-weight: bold;
       cursor: pointer;       

`
