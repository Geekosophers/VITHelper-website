import styled from 'styled-components';
export const Button = styled.div`
   position: fixed; 
   width: 100%;
   left:95%;
   bottom: 40px;
   height: 40px;
   font-size: 4.5rem;
   z-index: 1;
   cursor: pointer;
   color: rgba(132, 208, 208, 1);
   @media (max-width:926px) and (min-width:462px){
      left:90%;
   }
   @media (max-width:462px) and (min-width:296px){
      left:77%;
      transform:scale(.8);
   }
   @media (max-width:296px) {
      left:70%;
      transform:scale(.7);
   }
`