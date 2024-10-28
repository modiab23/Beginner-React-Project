import styled from "styled-components";
export const WorkTitle = styled.div `
   text-align: center;
    padding: 30px 0;
`
export const WorkText = styled.h2`
 text-transform: capitalize;
   font-weight: bold;
   font-size: 35px;
`
export const WorkParent = styled.div`
  display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 10px;
`
  
export const WorkSon = styled.div`
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    text-align: center;
    padding: 30px;
    cursor: pointer; 
`
export const WorkIcon = styled.i`
    font-size: 30px;
    color:#888;
`

export const SonText = styled.h2`
   text-transform: capitalize;
    color: #eb5424; 
    font-weight: bold;
    margin: 20px 0;
`
export const WorkParagraph = styled.p`
    text-transform: capitalize;
    font-size: 14px;
    color: #888;
    padding: 20px;
`