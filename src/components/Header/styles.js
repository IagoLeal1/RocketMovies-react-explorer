import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color:${({ theme }) => theme.COLORS.BACKGROUND_200};

  display: flex;
  justify-content: space-between;

  padding: 0 123px;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Search = styled.div`
 padding: 30px 64px;
 width: 630px;
`;

export const Brand = styled.div`
grid-area: brand;

display: flex;
justify-content: center;
align-items: center;

border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};

>h1 {
  font-size : 24ps;
  color: ${({ theme }) => theme.COLORS.PINK};
}
`;