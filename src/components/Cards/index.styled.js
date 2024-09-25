import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-auto-flow: column;
	width: 100%;
`;

export const LeftSection = styled.div`
	img {
		width: 100%;
		height: 100%;
		object-fit: fill;
		border-radius: 8px;
	}
`;

export const ImageSplit = styled.div`
	display: grid;
	grid-gap: 30px;
	grid-template-rows: repeat(2, 1fr);
	img {
		width: 100%;
		height: 100%;
		border-radius: 8px;
	}
`;

export const TextSection = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	line-height: 2rem;
	color: #989e9e;
	h2 {
		font-weight: normal;
		font-size: 32px;
	}

	hr {
		width: 100%;
	}

	p {
		font-size: 22px;
	}
`;
