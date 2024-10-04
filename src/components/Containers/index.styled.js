import styled from 'styled-components';

export const MasterContainer = styled.section`
	min-height: 724px;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const StyledContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: 1500px;
	height: 100vh;
	margin: 0 auto;
	padding: 0 200px;

	@media (max-width: 1024px) {
		min-height: fit-content;
	}
`;
