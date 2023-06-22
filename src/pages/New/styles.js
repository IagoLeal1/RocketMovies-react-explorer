import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  "header"
  "texts"
  "tags"
  "buttons";

  > main {
    overflow-y: auto;
  }


  .tags {
    display: flex;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
    width: 100%;
    padding: 16px;
    gap: 24px;
    border-radius: 8px;
  }
`;

export const Form = styled.form`
  padding: 40px 123px;
  margin: 38px auto;

  > header {
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 24px;
    justify-content: space-between;

    margin-bottom: 36px;

    a {
      font-size: 16px;
      gap: 8px;
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;

export const Texts = styled.div`
grid-area: texts;
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
`;
export const Tags = styled.div`
  grid-area: tags;
`;
export const Buttons = styled.div`
  grid-area: buttons;
  display: flex;
  gap: 40px;
`;