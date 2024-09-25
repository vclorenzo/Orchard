import styled from 'styled-components';

export const MasterContainer = styled.div`
	min-height: 724px;
`;

export const StyledContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: 1440px;
	height: 100vh;
	margin: 0 auto;

	@media (max-width: 425px) {
		min-height: fit-content;
	}
`;
