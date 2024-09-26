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
	padding: 0;
	cursor: pointer;
	a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		text-decoration: none;
		color: inherit;
		margin: 0;
		padding: 0;
	}

	a:hover,
	a:focus,
	a:active {
		text-decoration: none;
		color: inherit;
		outline: none;
	}

	&:hover {
		background-color: #bb172f;
		border: none;
	}
`;
