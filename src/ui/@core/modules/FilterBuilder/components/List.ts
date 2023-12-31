import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;