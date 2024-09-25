import styled from 'styled-components';

export const StyledBoardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-gap: 30px;
	width: 100%;
`;

export const StyledLeftSection = styled.div`
	img {
		width: 100%;
		height: 100%;
		border-radius: 8px;
	}
`;

export const StyledImageSplit = styled.div`
	display: grid;
	grid-gap: 30px;
	grid-template-rows: repeat(2, 1fr);
	img {
		width: 100%;
		height: 100%;
		border-radius: 8px;
	}
`;

export const StyledTextSection = styled.div`
	display: grid;
	width: 100%;
	line-height: 2rem;
	color: #989e9e;
	h2 {
		font-weight: normal;
		font-size: 32px;
	}

	hr {
		width: 100%;
		height: 0;
	}

	p {
		font-size: 22px;
	}

	@media (min-width: 426px) and (max-width: 1024px) {
		grid-column: 1/3;
	}
`;
