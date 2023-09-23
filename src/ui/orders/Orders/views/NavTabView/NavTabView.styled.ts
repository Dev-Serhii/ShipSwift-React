import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display        : flex;
	justify-content: flex-end;
	align-items    : center;
	width          : 100%;

	& > *:not(:last-child) {
		margin-right: 20px;
	}
`;
