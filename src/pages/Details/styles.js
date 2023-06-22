import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  "header" 
  "title"
  "profile"
  "Tags"
  "Text";

  > main {
    overflow-y: auto;
    padding: 20px 123px;

    > a {
      text-decoration: none;
      color : ${({ theme }) => theme.COLORS.PINK};
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        color : ${({ theme }) => theme.COLORS.PINK};
        font-size: 24px;
      }
    }
  }
`;

export const Title = styled.div`
  grid-area: Title;

  display: flex;
  align-items: center;
  gap: 19px;

  padding-top: 24px;

  > h1 {
    font-size: 36px;
    font-weight: 500;
  }

 div{
  > svg {
    color : ${({ theme }) => theme.COLORS.PINK};
    fill: ${({ theme }) => theme.COLORS.PINK};
    width: 20px;
    height: 20px;

    &:nth-child(5){
      fill: transparent;
    }
  }
 }

`;

export const ProfileSection = styled.div`
  grid-area: profile;

  display: flex;
  align-items: center;
  gap: 8px;

  padding: 40px 0;

 > img {
    border-radius: 35px;
    height: 16px;
    width: 16px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_600};
 }

 > svg {
  color : ${({ theme }) => theme.COLORS.PINK};
 }
`;

export const Tags = styled.div`
  grid-area: profile;

  display: flex;
  margin-bottom: 40px;
`;

export const Text = styled.div`
  grid-area: profile;
`;