import styled from 'styled-components';

export const StyledCardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-gap: 25px;
	width: 100%;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const StyledCards = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;

	img {
		width: 100%;
		height: 100%;
		min-height: 300px;
		max-height: 300px;
		border-bottom: 5px solid #bb172f;
		border-radius: 8px;
	}
`;

export const StyledCardText = styled.div`
	min-height: 200px;
	h3 {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		text-overflow: ellipsis;
		font-size: 22px;
		font-weight: normal;
	}

	p {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 4;
		text-overflow: ellipsis;
		font-size: 20px;
		color: #989e9e;
	}
`;
