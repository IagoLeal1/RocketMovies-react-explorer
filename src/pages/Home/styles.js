import styled from 'styled-components';
import { Link } from 'react-router-dom';

 export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
 `;

 export const Content = styled.div`
  position: relative;
   padding: 0px 123px;

   display: flex;
   flex-direction: column;
 `;

 export const Notes = styled.div`
    padding: 0px 123px;
   overflow-y: auto;

   display: flex;
   flex-direction: column;
   gap: 24px;
 `;

 export const Newnote = styled(Link)`
   background-color: ${({ theme }) => theme.COLORS.PINK};
   color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
   
  position: absolute;
  top: 47.5px;
  right: 106px;

   display: flex;
   align-items: center;
   justify-content: center;
   
   width: 207px;
   height: 48px;

   border-radius: 8px;

   svg {
    margin-right: 8px;
   }
 `;
