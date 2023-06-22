import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 225px;
  background-color: ${({ theme }) => theme.COLORS.PINKNOTE};

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 11px;

  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;

    > h1 {
      flex: 1;
      font-weight: 700;
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    >div svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        margin: 8px 6px 15px 0;
        fill: ${({ theme }) => theme.COLORS.PINK};

        &:nth-child(5){
          fill: transparent;
        }
      }

    > p {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
      max-height: 92px;
      max-width: 100%;
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 10px;
    }

    > footer {
      width: 100%;
      display: flex;
      margin-top: 24px;
    }
`;
