import styled from 'styled-components';

export const StyledTextButton = styled.button`
	font-size: 20px;
	color: #f6fafb;
	background-color: transparent;
	border: none;
	border-bottom: 2px solid #bb172f;
	width: 140px;
	height: 60px;
	transition: background-color 0.3s ease, border 0.3s ease;

	&:hover {
		background-color: #bb172f;
		border: none;
	}
`;
