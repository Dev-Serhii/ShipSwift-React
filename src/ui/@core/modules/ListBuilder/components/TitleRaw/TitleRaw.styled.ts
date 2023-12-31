/* eslint-disable eqeqeq */
import styled from 'styled-components';

type Align = 'center' | 'left' | 'right';

export const RawWrapper = styled.div<{minWidth?: number, height?: number}>`
	display        : flex;
	align-items    : center;
	justify-content: space-between;
	min-width      : fit-content;
	height         : ${({height}) => `${height === undefined? 36: height}px`};
	background     : ${({ theme }) => theme.color.background[2]};
	padding        : 0 25px;

  &[data-clean-background=true] {
    background: ${({ theme }) => theme.color.greyscale[1]};
  }

  &[data-splitter=true] {
    border-bottom: 1px solid ${({ theme }) => theme.color.greyscale[2]};
  }

  &[data-flat=true] {
    padding: 0;
  }

	& > * {
		flex: 1;
    ${({ minWidth }) => `min-width: ${minWidth != undefined ? minWidth: 100}px` };
	}

	& > p:first-child {
    text-align: left;
  }
`;

export const Merge = styled.div<{ flex?: number, margin?: string }>`
  ${({ flex }) => flex != undefined ? `flex: ${flex} !important;`: ''}

  display    : flex;
  align-items: center;
  ${({margin}) => margin ? `margin:${margin}` : ''};
  
  & > *:not(:last-child) {
    margin-right: 12px;
  }

  & > p {
    text-align: left;
  }
`;

export const Name = styled.p<{ flex?: number, align?: Align }>`
  ${({ flex }) => flex != undefined ? `flex: ${flex} !important;`: ''}
  ${({ theme }) => theme.font.c_medium[5]};

  text-align: ${({align}) => align ? `${align} !important` : 'center'};
  color     : ${({ theme }) => theme.color.greyscale[12]};
`;

export const Space = styled.div<{ flex?: number, minWidth?: number }>`
  ${({ minWidth }) => minWidth != undefined ? `min-width: ${minWidth}px;` : ''}
  ${({ flex }) => flex != undefined ? `flex: ${flex} !important;`: ''}
`;
