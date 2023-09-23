import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display: flex;
  align-items: center;
`;

export const Title = styled.p`
  ${({ theme }) => theme.font.c_regular[5]};
  color: ${({ theme }) => theme.color.greyscale[10]};
  margin-right: 14px;
`;